json.array! @user do |user|

  json.id user.id
  json.name user.username
  json.prof_pic user.profile_pict
end
