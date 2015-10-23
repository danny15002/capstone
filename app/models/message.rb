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

  has_many :comments, as: :commentable
  has_many :likes, as: :likeable

<<<<<<< HEAD
  def self.in_network(user)
    # requires user's friends to be pre-fetched
    self.where("from_id IN (:network_ids) AND to_id IN (:network_ids)", network_ids: user.friend_ids)
  end

=======
>>>>>>> 38f886d2d6c348d183e3ee7da574b6c8aef68f94
  def format_message_time
    time = Time.now - created_at

    if time > 86400
      return "#{(time/86400).round} days ago"
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
