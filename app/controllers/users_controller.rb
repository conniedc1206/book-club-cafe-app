class UsersController < ApplicationController

    # GET "/users": Fetch this route to see a list of all users that currently have an account
    def index
        users = User.all
        render json: users, status: :ok
    end

    # GET "/users/:id"
    def show
        user = User.find(params[:id])
        render json: user.events, status: :ok
    end

    # POST "/users": Fetch this route to create a user (see user_params to know what's required in the form)
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
        # error: unprocessable_entity in app controller
    end

    # Update a user, potentially in account settings
    # PATCH "/users/:id"
    def update
        user = User.find(params[:id])
        user.update!(user_params)
        render json: user, status: :accepted
    end

    # DESTROY "/users/:id"
    # Delete account (user) in account settings
    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end

    private

    def user_params
        params.permit(:email, :password, :name, :avatar, :bio)
    end
end
