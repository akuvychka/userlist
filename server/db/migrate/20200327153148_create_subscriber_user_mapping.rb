class CreateSubscriberUserMapping < ActiveRecord::Migration[6.0]
  def change
    create_table :subscriber_user_mappings do |t|
      t.integer :user_id
      t.integer :subscriber_id
    end
  end
end
