class MembershipsController < ApplicationController
    def index
        memberships = Membership.all
        render json: memberships, status: :ok
    end
    
    # POST /memberships: when current user joins a bookclub
    def create
        if (current_user.memberships.find_by(book_club_id: params[:book_club_id]))
            render json: { error: "You are already a member of this book club" }, status: :forbidden
        else
            membership = Membership.create!(membership_params)
            render json: membership.book_club, status: :created
        end
    end

    # DELETE /memberships/:id: when current user leaves a bookclub
    def destroy
        membership = Membership.find(params[:id])
        membership.destroy
        head :no_content
    end

    private

    def membership_params
        params.permit(:user_id, :book_club_id)
    end
    
end
