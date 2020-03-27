class SubscriberUserMapping < ApplicationRecord
  belongs_to :user
  belongs_to :subscriber, class_name: 'User'
  validates_presence_of :user_id
  validates_presence_of :subscriber_id
end