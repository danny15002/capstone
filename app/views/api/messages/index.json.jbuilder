json.array! @messages do |message|
  json.id message.id
  json.body message.body
  json.author message.user_from.username
  json.recipient message.user_to.username
  json.created_at message.format_message_time
  json.prof_pic message.user_from.profile_pict

  json.type "Message"
  json.comments message.comments do |comment|
    json.id comment.id
    json.body comment.body
    json.commentable_id comment.commentable_id
    json. commentable_type comment.commentable_type
    json.created_at comment.format_comment_time
    json.author comment.user.username
    json.prof_pic comment.user.profile_pict
    json.type "Comment"

    json.comments comment.comments do |comment|
      json.id comment.id
      json.body comment.body
      json.commentable_id comment.commentable_id
      json. commentable_type comment.commentable_type
      json.created_at comment.format_comment_time
      json.author comment.user.username
      json.prof_pic comment.user.profile_pict

      json.type "Comment"
    end
  end
end
