FactoryBot.define do
  factory :subscriber_user_mapping, class: 'SubscriberUserMapping' do
    user  { create(:user) }
    subscriber { create(:user) }
  end
end
