class Api::MessagesController < ApplicationController

  def index
    p params
    @messages = current_user.receivedMessages.includes(:user_to).where(public: params[:public])

    render :index
  end
end
