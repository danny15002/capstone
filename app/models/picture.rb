# == Schema Information
#
# Table name: pictures
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  pic_url    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Picture < ActiveRecord::Base
  has_many :comments, as: :commentable
  belongs_to :user
end
