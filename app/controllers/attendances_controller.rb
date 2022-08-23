class AttendancesController < ApplicationController
    def index
        attendances = Attendance.all
        render json: attendances, status: :ok
    end

    # user clicks yes to an event
    # POST /attendances
    def create
        if (current_user.events.find_by(id: params[:event_id]))
            render json: { error: "You are already attending this event" }, status: :forbidden
        else
            attendance = Attendance.create!(attendance_params)
            render json: attendance, status: :created
        end
    end


    # user clicks no to an event
    # DELETE /attendances/:id
    # if record not found, error will render from app controller
    def destroy
        attendance = Attendance.find(params[:id])
        attendance.destroy
        head :no_content
    end


    private
    def attendance_params
        params.permit(:user_id, :event_id)
    end
end
