# == Schema Information
#
# Table name: events
#
#  id          :integer          not null, primary key
#  creator_id  :integer
#  title       :string           not null
#  description :string
#  date        :date             not null
#  location    :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
