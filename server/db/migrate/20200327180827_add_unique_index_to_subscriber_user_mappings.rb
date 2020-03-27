class AddUniqueIndexToSubscriberUserMappings < ActiveRecord::Migration[6.0]
  def change
    add_index :subscriber_user_mappings, [:user_id, :subscriber_id], unique: true
  end
end
