# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base
  extend UsersHelper
  DEFAULT_PROFILE_PIC = "http://vectorlogofree.com/wp-content/uploads/2014/09/21426-instagram-logo-silhouette-icon-vector-icon-vector-eps.png"

  has_many(
    :received_messages,
    primary_key: :id,
    foreign_key: :to_id,
    class_name: "Message"
  )

  has_many(
    :sent_messages,
    primary_key: :id,
    foreign_key: :from_id,
    class_name: "Message"
  )

  has_many(
    :friendships,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "Friendship"
  )

  has_many :friends, through: :friendships, source: :friend

  has_many(
    :created_events,
    primary_key: :id,
    foreign_key: :creator_id,
    class_name: "Event"
  )

  has_many :friends_events, through: :friends, source: :created_events

  has_many :pictures

  has_many(
    :pending_friendships,
    primary_key: :id,
    foreign_key: :accepter_id,
    class_name: "PendingFriendship"
  )

  has_many(
    :pending_requests,
    primary_key: :id,
    foreign_key: :accepter_id,
    class_name: "PendingFriendship"
  )

  has_one(
    :profile_pic,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "ProfilePicture"
  )

  has_one(:profile_picture, through: :profile_pic, source: :picture)

  def get_statuses
    sent_messages.where("to_id = from_id")
  end

  def profile_pict
    pic = self.profile_picture
    if pic
      return pic.pic_url
    elsif self.pictures
      if self.pictures.first
        return self.pictures.first.pic_url
      end
    else
      return DEFAULT_PROFILE_PIC
    end
  end

  attr_reader :password
  attr_reader :password_confirmation

  validates :username, uniqueness: true, presence: true
  validates :password_digest, presence: true
  validates :session_token, presence: true
  validates :password, confirmation: true, length: { minimum: 6, allow_nil: true}
  validates :password_confirmation, presence: {on: :create}

  after_initialize :ensure_session_token

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

  def reset_session_token
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

  def password_confirmation=(password_confirmation)
    @password_confirmation = password_confirmation
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end
end
