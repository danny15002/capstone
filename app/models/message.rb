# == Schema Information
#
# Table name: messages
#
#  id         :integer          not null, primary key
#  from_id    :integer          not null
#  to_id      :integer          not null
#  body       :text             not null
#  public     :boolean          default(FALSE)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Message < ActiveRecord::Base
  belongs_to(
    :user_to,
    primary_key: :id,
    foreign_key: :to_id,
    class_name: "User"
  )
end
