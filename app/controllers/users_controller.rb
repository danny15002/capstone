class UsersController < ApplicationController

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params) # need username and password.

    if @user.save
      log_in!(@user)
      payload = {id: current_user.id, username: current_user.username}
      token = JWT.encode payload, nil, 'none'
      render json: {id_token: token}
    else
      flash.now[:errors] = @user.errors.full_messages
      render json: {error: flash.now[:errors]}, status: 422
    end
  end

  def index
    if params[:id]
      @users = User.find(params[:id]).friends + User.find(params[:id]).friends2
    elsif params[:all]
      @users = User.all
    else
      @users = current_user.friends + current_user.friends2
    end

    render :index
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:username, :password, :password_confirmation)
    end
end
