require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'User validations' do
    context 'without a name' do
      it 'should NOT be valid with a name error' do
        user = User.create(name: nil)
        expect(user).not_to be_valid
        expect(user.errors).to have_key(:name)
      end
    end

    context 'with valid attributes' do
      it 'should be valid with no name errors' do
        user = create(:user)
        expect(user).to be_valid
      end
    end
  end

  describe 'User dependency' do
    it "belongs to gruop" do
      assc = described_class.reflect_on_association(:group)
      expect(assc.macro).to eq :belongs_to
    end

    it 'has many subscribers user mapping' do
      assc = described_class.reflect_on_association(:subscriber_user_mappings)
      expect(assc.macro).to eq :has_many
    end

    it 'has many subscribers' do
      assc = described_class.reflect_on_association(:subscribers)
      expect(assc.macro).to eq :has_many
    end
  end
end