class User < ApplicationRecord
  has_one :group
  validates_presence_of :name
end