class Api::MessagesController < ApplicationController

  def index
    @messages = current_user.receivedMessages

    render json: @messages
  end
end
