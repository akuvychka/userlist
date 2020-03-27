require 'rails_helper'

RSpec.describe "SubscriberUserMappingsController", type: :request do
  describe "POST /api/subscriber_user_mappings" do
    let!(:user) { create(:user) }
    let!(:subscriber) { create(:user) }

    it "create mapping with status 200" do
      cookies['user'] = user.id

      post subscriber_user_mappings_path(user_id: subscriber.id)
      expect(response).to have_http_status(200)
      expect(SubscriberUserMapping.count).to eq(1)
    end

    it "create mapping failed with status 422" do
      cookies['user'] = user.id

      post subscriber_user_mappings_path
      expect(response).to have_http_status(422)
      expect(SubscriberUserMapping.count).to eq(0)
    end
  end

  describe "GET /api/users/me" do
    let!(:subscriber_user_mapping) { create(:subscriber_user_mapping) }

    it "destroy mapping with status 200" do
      cookies['user'] = subscriber_user_mapping.subscriber_id

      delete subscriber_user_mappings_path(id: subscriber_user_mapping.id)
      expect(response).to have_http_status(200)
      expect(SubscriberUserMapping.count).to eq(0)
    end
  end

end