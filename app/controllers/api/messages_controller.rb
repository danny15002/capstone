class Api::MessagesController < ApplicationController

  def index


    if params[:user_id].nil?
      @messages = current_user.received_messages.includes(:user_to,:user_from, comments: [:user , comments: [:user]]).where(public: params[:public]).order(:created_at).reverse_order
    elsif params[:public] == 'true'
      @messages = User.find(params[:user_id]).received_messages.includes(:user_to, :user_from, comments: [:user, comments: [:user]]).where(public: params[:public]).order(:created_at).reverse_order
    else
      @messages = Message.where(public: params[:public]).where("(to_id = #{current_user.id} AND from_id = #{params[:user_id]}) OR (to_id = #{params[:user_id]} AND from_id = #{current_user.id})").includes(:user_to, :user_from).order(:created_at)
    end
    render :index
  end

  def create
    p params
    @message = Message.create(message_params)

    if @message.save
      render json: {} #must return an object for AJAX success callback to trigger
    else
      render json: "failed"
    end

  end

  private
  def message_params
    params.require(:message).permit(:to_id, :from_id, :body, :public)
  end
end
