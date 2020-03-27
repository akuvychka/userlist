FactoryBot.define do
  factory :user, class: 'User' do
    name  { 'Test User' }
    group { create(:group) }
  end
end
