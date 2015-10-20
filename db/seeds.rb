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


1000.times do
  Comment.create(
    body: Faker::Hacker.adjective,
    commentable_id: rand(301..600),
    commentable_type: "Message",
    user_id: rand(1..25)
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

30.times do
  Event.create(
    creator_id: rand(1..25),
    title: Faker::Hacker.adjective + " " + Faker::Hacker.noun,
    description: Faker::Lorem.paragraph,
    date: Faker::Date.forward(60),
    location: Faker::Address.street_address
  )
end

base = "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/"

25.times do |i|
  num = sprintf '%03d', i + 1
  Picture.create(
    user_id: i,
    pic_url: base + num + ".png"
  )
end

100.times do
  user = rand(1..25)
  pic = rand(1..720)
  num = sprintf '%03d', pic
  Picture.create(
    user_id: user,
    pic_url: base + num + ".png"
  )
end
