class User < ApplicationRecord
  belongs_to :group
  validates_presence_of :name
end