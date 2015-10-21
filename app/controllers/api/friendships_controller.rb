class Api::FriendshipsController < ApplicationController

  def index

    if params[:id]
      @friends = Friendship.all.where(user_id: params[:id])
    else
      @friends = Friendship.all.where(user_id: current_user.id).includes(:user, :friend)
    end

    render :index
  end

  def create
    p params
    @friendship = Friendship.create(friend_params)
    @inverse_friendship = Friendship.create(user_id: @friendship.friend_id, friend_id: @friendship.user_id)

    if @friendship.save && @inverse_friendship.save
      render json: {}
    else
      render json: status: 420
    end
  end

  def delete
    @friendship = Friendship.find(params[:id])
    @inverse_friendship = Friendship.where(user_id: @friendship.friend_id, friend_id: @friendship.user_id)
    @friendship.destroy
    @inverse_friendship.destroy
    render json: {}
  end

  private
  def friend_params
    params.require(:friendship).permit(:user_id, :friend_id)
  end

  end
