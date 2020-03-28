module Api
  class UsersController < ApplicationController
    def index
      render json: { users: User.get_list }, status: :ok if @user.present?
    end

    def me
      render json: { me:  @user, mappings: @user.subscriber_user_mappings.select('id, user_id') }, status: :ok if @user.present?
    end
  end
end