class UsersController < ApplicationController

  def index
    @users = User.all.limit(100)
    render :index
  end

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params) # need username and password.

    if @user.save
      log_in!(@user)
      payload = {id: current_user.id, username: current_user.username, prof_pic: current_user.profile_pict}
      token = JWT.encode payload, nil, 'none'

      Friendship.create(
        friend_id: 1000,
        user_id: current_user.id
      )

      Message.create(
        from_id: 1000,
        to_id: current_user.id,
        body: "Welcome to Friendz! Feel free to look around. Search for users in the search bar to add friends.",
        public: true
      )
      render json: {id_token: token}
    else
      flash.now[:errors] = @user.errors.full_messages
      render json: {error: flash.now[:errors]}, status: 422
    end
  end

  def show
    # fail
    @user = User.all.includes(:profile_picture, :pictures).where(id: params[:id])
    render :show
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
