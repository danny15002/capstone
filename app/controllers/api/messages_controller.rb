class Api::MessagesController < ApplicationController

  def index
    p params
    if params[:user_id].nil?
      @messages = current_user.received_messages.includes(:user_to).where(public: params[:public])
    else
      @messages = current_user.received_messages.includes(:user_to, :user_from).where(public: params[:public]).where("from_id = #{params[:user_id]}")
      @messages += current_user.sent_messages.includes(:user_to, :user_from).where(public: params[:public]).where("to_id = #{params[:user_id]}")
    end

    render :index
  end
end
