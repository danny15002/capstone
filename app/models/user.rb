class User < ActiveRecord::Base
  extend UsersHelper
  attr_reader :password
  attr_reader :password_confirmation

  validates :username, uniqueness: true, presence: true
  validates :password_digest, presence: true
  validates :session_token, presence: true
  validates :password, confirmation: true, length: { minimum: 6, allow_nil: true}
  validates :password_confirmation, presence: true, allow_nil: true

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
