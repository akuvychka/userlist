require 'rails_helper'

RSpec.describe "Users", type: :request do
  describe "GET /api/users" do
    let!(:user) { create(:user) }

    it "return user list wit status 200" do
      get users_path
      expect(response).to have_http_status(200)
      expect(response.body).to include(user.id.to_s)
    end
  end
end