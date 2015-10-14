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

  belongs_to(
    :user_from,
    primary_key: :id,
    foreign_key: :from_id,
    class_name: "User"
  )

  def format_message_time
    time = Time.now - created_at

    if time > 86400
      return "#{(time/86400.round)} days ago"
    end
    if time > 3600
      return "#{(time/3600).round} hours ago"
    end
    if time > 60
      return "#{(time/60).round} minutes ago"
    end
    return "#{time.round} seconds ago"
  end

end
