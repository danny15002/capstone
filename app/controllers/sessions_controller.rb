class SessionsController < ApplicationController
  # before_action :check_login, only: :new

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.find_by_credentials(user_params[:username],
                                     user_params[:password]) # need username and password.

    if @user
      log_in!(@user)
      redirect_to user_url(@user)
    else
      flash.now[:errors] = ['Wrong username or password.']
      @user = User.new
      render :new
    end
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
