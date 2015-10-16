class Api::PicturesController < ApplicationController

  def index

    @pictures = current_user.pictures
    render :index
  end

  def create
    p params
    @message = Message.create(message_params)

    if @message.save
      render json: "success"
    else
      render json: "failed"
    end

  end

  private
  def message_params
    params.require(:picture).permit(:user_id, :pic_url)
  end
end
