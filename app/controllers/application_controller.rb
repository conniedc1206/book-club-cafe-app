class ApplicationController < ActionController::API
  # before_action :authenticate_user
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid

  def current_user
    @current_user ||= User.find_by_id(session[:user_id]) # memoization
  end
  
  private

  # checking if a user is logged in
  # def authenticate_user
  #   render json: { errors: { User: "Not Authorized" } }, status: :unauthorized unless current_user
  # end

  # Record_not_found
  def record_not_found(exception)
    render json: { error: "#{exception.model} not found." }, status: :not_found
  end

  # Record_invalid
  def record_invalid(invalid)
      render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

end
