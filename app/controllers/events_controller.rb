class EventsController < ApplicationController
    def index
        events = Event.all
        render json: events, status: :ok
    end

    # GET "/events/:id"
    def show
        event = Event.find(params[:id])
        render json: event, status: :ok
    end

    def create
        event = Event.create!(event_params)
        render json: event, status: :created
    end

    def destroy
        event = Event.find(params[:id])
        event.destroy
        head :no_content
    end

    private
    def event_params
        params.permit(:name, :date, :book_club_id)
    end
end
