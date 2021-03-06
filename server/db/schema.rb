# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_03_27_180827) do

  create_table "groups", force: :cascade do |t|
    t.string "name"
    t.index ["name"], name: "index_groups_on_name", unique: true
  end

  create_table "subscriber_user_mappings", force: :cascade do |t|
    t.integer "user_id"
    t.integer "subscriber_id"
    t.index ["user_id", "subscriber_id"], name: "index_subscriber_user_mappings_on_user_id_and_subscriber_id", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.integer "group_id"
    t.index ["group_id"], name: "index_users_on_group_id"
  end

  add_foreign_key "users", "groups"
end
