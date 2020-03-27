module Api
  class SubscriberUserMappingsController < ApplicationController
    before_action :set_subscriber_user_mapping, only: :destroy
    def create
      begin
        subscriber_user_mapping = SubscriberUserMapping.new(subscriber_user_mapping_params)
        if subscriber_user_mapping.save
          render json: { subscriber_user_mapping: subscriber_user_mapping }, status: :ok
        else
          render json: { errors: subscriber_user_mapping.errors }, status: :unprocessable_entity
        end
      rescue ActiveRecord::RecordNotUnique
        render json: { message: 'You are already follow this user' }, status: :unprocessable_entity
      end
    end

    def destroy
      @subscriber_user_mapping.destroy
      render json: { message: 'destroy success' }, status: :ok
    end

    private

    def set_subscriber_user_mapping
      @subscriber_user_mapping = SubscriberUserMapping.find(params[:id])
    end

    def subscriber_user_mapping_params
      {
          user_id: params[:user_id],
          subscriber_id: @user.id
      }
    end
  end
end