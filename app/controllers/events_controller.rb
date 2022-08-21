class EventsController < ApplicationController
    def index
        events = Event.all
        render json: events, status: :ok
    end
end
