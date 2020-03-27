FactoryBot.define do
  factory :group, class: 'Group' do
    name  { 'Test Group ' + rand(10000).to_s }
  end
end
