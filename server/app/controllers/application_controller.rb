class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  before_action :set_user

  private

  def set_user
    if request.headers["X-User"].present?
      @user = User.find_by_id(request.headers["X-User"])
    else
      render json: { error: 'not signed in'}, status: :not_acceptable
    end
  end
end
