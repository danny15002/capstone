class UsersController < ApplicationController
  # before_action :check_login, except: :destroy

  # def check_login
  #   unless current_user
  #     flash.now[:errors] = "You must log in."
  #     redirect_to new_session_url
  #   end
  # end

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params) # need username and password.

    if @user.save
      log_in!(@user)
      redirect_to user_url(@user)
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
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
