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

require 'test_helper'

class ProfilePictureTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
