class Api::MessagesController < ApplicationController

  def index
    @messages = current_user.receivedMessages.includes(:user_to)

    render :index
  end
end
