module Api
  class UsersController < ApplicationController
    def index
      render json: { users: User.joins(:group).select('*, groups.name as group_name') }, status: :ok
    end
  end
end