json.array! @pictures do |picture|
  json.username picture.user.username
  json.pic_url picture.pic_url
end
