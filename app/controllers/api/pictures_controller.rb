class Api::PicturesController < ApplicationController

  def index

    @pictures = current_user.pictures
    render :index
  end

  def create
    p params
    @picture = Message.create(picture_params)

    if @picture.save
      render json: "success"
    else
      render json: "failed"
    end

  end

  private
  def picture_params
    params.require(:picture).permit(:user_id, :pic_url)
  end
end
