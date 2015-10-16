class SessionsController < ApplicationController

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.find_by_credentials(user_params[:username],
                                     user_params[:password]) # need username and password.

    if @user
      log_in!(@user)
      payload = {id: current_user.id, username: current_user.username}
      token = JWT.encode payload, nil, 'none'
      render json: {id_token: token}
    else
      flash.now[:errors] = ['Wrong username or password.']
      @user = User.new
      render json: "failed"
    end
  end

  def show
    @user = current_user

    render json: @user
  end

  def destroy
    log_out!
    redirect_to new_session_url
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
