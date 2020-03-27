# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
groups_list = [
    'Test Group 1',
    'Test Group 2',
    'Test Group 3',
    'Test Group 4',
    'Test Group 5'
]

users_list = [
    ['User name 1', 'Test Group 1'],
    ['User name 2', 'Test Group 1'],
    ['User name 3', 'Test Group 2'],
    ['User name 4', 'Test Group 2'],
    ['User name 5', 'Test Group 3'],
    ['User name 6', 'Test Group 3'],
    ['User name 7', 'Test Group 4'],
    ['User name 8', 'Test Group 4'],
    ['User name 9', 'Test Group 5'],
    ['User name 10', 'Test Group 5']
]

groups_list.each do |name|
  begin
    Group.create(name: name)
  rescue ActiveRecord::RecordNotUnique
    puts 'Group Record already exists'
  end
end

users_list.each do |user_name, group_name|
  group = Group.find_by_name(group_name)
  User.create(name: user_name, group_id: group.id)
end