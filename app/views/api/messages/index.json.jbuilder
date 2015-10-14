json.array! @messages do |message|
  json.id message.id
  json.body message.body
  json.recipient_name message.user_to.username
  json.sender_name message.user_from.username
  json.created_at message.created_at
end