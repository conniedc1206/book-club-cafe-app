class BookClubsController < ApplicationController
    # GET "/book_clubs"
    def index
        bookclubs = BookClub.all
        render json: bookclubs, status: :ok
    end

    # GET "/book_clubs/:id"
    def show
        bookclub = BookClub.find(params[:id])
        render json: bookclub, status: :ok
    end

end
