require 'rails_helper'

RSpec.describe Group, type: :model do
  describe 'Group validations' do
    context 'without a name' do
      it 'should NOT be valid with a name error' do
        group = Group.create(name: nil)
        expect(group).not_to be_valid
        expect(group.errors).to have_key(:name)
      end
    end

    context 'with valid attributes' do
      it 'should be valid with no name errors' do
        group = create(:group)
        expect(group).to be_valid
      end
    end
  end
end