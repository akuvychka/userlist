class User < ApplicationRecord
  belongs_to :group
  has_many :subscriber_user_mappings, foreign_key: :subscriber_id
  has_many :subscribers, through: :subscriber_user_mappings
  validates_presence_of :name

  def self.get_list
    User.joins(:group).select('users.id as id, users.name as name, groups.name as group_name, ((select count(*) from subscriber_user_mappings where subscriber_user_mappings.user_id = users.id)) as sub_count')
  end
end