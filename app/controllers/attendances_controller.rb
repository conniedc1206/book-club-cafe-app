class AttendancesController < ApplicationController
    def index
        attendances = Attendance.all
        render json: attendances, status: :ok
    end
end
