class MembershipsController < ApplicationController
    # POST /memberships: when current user joins a bookclub
    def create
        membership = Membership.create!(membership_params)
        render json: membership, status: :created
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
