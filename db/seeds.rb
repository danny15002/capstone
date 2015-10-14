# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


25.times do
  User.create(
    username: Faker::Name.first_name,
    password: "password",
    password_confirmation: "password"
  )
end

300.times do
  Message.create(
    from_id: rand(1..25),
    to_id: rand(1..25),
    body: (Faker::Hacker.say_something_smart + " " + Faker::Hacker.say_something_smart)
  )
end
300.times do
  Message.create(
    from_id: rand(1..25),
    to_id: rand(1..25),
    body: (Faker::Hacker.say_something_smart + " " + Faker::Hacker.say_something_smart),
    public: true
  )
end

friendArray = [];

100.times do |i|
  friendArray.push([rand(1..25),rand(1..25)])
end
friendArray = friendArray.sort
friendArray.each do |el|
  Friend.create(requester_id: el[0],accepter_id: el[1])
end
