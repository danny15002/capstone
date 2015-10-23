json.array! @user do |user|

  json.id user.id
  json.name user.username
  json.profPic user.profile_pict
end
