# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create(username: "daniel", password: "password" , password_confirmation: "password")
User.create(username: "bob", password: "password", password_confirmation: "password")
User.create(username: "johhny", password: "password", password_confirmation: "password")
User.create(username: "harry", password: "password", password_confirmation: "password")

Message.create(from_id: 1, to_id: 2, body: " sent from 1 to 2", public: true)
Message.create(from_id: 1, to_id: 2, body: " sent from 1 to 2", public: true)
Message.create(from_id: 2, to_id: 3, body: " sent from 2 to 3", public: true)
Message.create(from_id: 3, to_id: 4, body: " sent from 3 to 4", public: true)
Message.create(from_id: 4, to_id: 1, body: " sent from 4 to 1", public: true)
