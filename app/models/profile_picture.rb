# == Schema Information
#
# Table name: profile_pictures
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  picture_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ProfilePicture < ActiveRecord::Base
<<<<<<< HEAD
  belongs_to(
    :user
  )

  belongs_to(
    :picture
  )
=======
>>>>>>> 38f886d2d6c348d183e3ee7da574b6c8aef68f94
end
