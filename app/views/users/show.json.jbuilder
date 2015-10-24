json.array! @user do |user|

  json.id user.id
  json.name user.username
  json.profPic user.profile_pict
  json.friendship user.friendship_status(@current_user)
end
