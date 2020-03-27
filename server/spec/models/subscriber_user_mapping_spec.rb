require 'rails_helper'

RSpec.describe SubscriberUserMapping, type: :model do
  describe 'SubscriberUserMapping validations' do
    context 'without a user' do
      it 'should NOT be valid with a user error' do
        subscriber_user_mapping = SubscriberUserMapping.create(user: nil)
        expect(subscriber_user_mapping).not_to be_valid
        expect(subscriber_user_mapping.errors).to have_key(:user)
      end

      it 'should NOT be valid with a subscriber error' do
        subscriber_user_mapping = SubscriberUserMapping.create(subscriber: nil)
        expect(subscriber_user_mapping).not_to be_valid
        expect(subscriber_user_mapping.errors).to have_key(:subscriber)
      end
    end

    context 'with valid attributes' do
      it 'should be valid with no errors' do
        subscriber_user_mapping = create(:subscriber_user_mapping)
        expect(subscriber_user_mapping).to be_valid
      end
    end
  end

  describe 'SubscriberUserMapping dependency' do
    it 'belongs to user' do
      assc = described_class.reflect_on_association(:user)
      expect(assc.macro).to eq :belongs_to
    end

    it 'belongs to subscriber' do
      assc = described_class.reflect_on_association(:subscriber)
      expect(assc.macro).to eq :belongs_to
    end

  end
end