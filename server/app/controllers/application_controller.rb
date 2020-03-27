class ApplicationController < ActionController::Base
  before_action :set_user

  private

  def set_user
    if request.cookies['user'].present?
      @user = User.find_by_id(request.cookies['user'])
    else
      render json: { error: 'not signed in'}, status: :not_acceptable
    end
  end
end
