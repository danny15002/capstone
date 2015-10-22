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

  def show
    # @messages = User.where(id: 1).includes(friends: [:sent_messages]).where('messages.public = true').references(:messages).select('users.username', 'messages.*')
    sql_query = (<<-SQL)
      SELECT DISTINCT
        messages.id,
        messages.to_id,
        messages.from_id,
        messages.body,
        users.id as usersid, users.username,
        messages.created_at
      FROM
        messages
      JOIN
        users ON users.id = messages.to_id
      JOIN
        friendships ON friendships.user_id = users.id
      WHERE
        ((messages.to_id = #{current_user.id} OR
        messages.from_id = #{current_user.id}) OR (
        messages.to_id IN (
          SELECT
            friendships.friend_id
          FROM
            friendships
          JOIN
            users ON friendships.user_id = users.id
          WHERE
            #{current_user.id} = friendships.user_id
        ) AND
        messages.from_id IN (
          SELECT
            friendships.friend_id
          FROM
            friendships
          JOIN
            users ON friendships.user_id = users.id
          WHERE
            #{current_user.id} = friendships.user_id
        ))) AND messages.public = true
      ORDER BY
        messages.created_at
      SQL

    @messages = Message.find_by_sql(sql_query)

    render :show
  end

  def create
    p params
    @message = Message.create(message_params)

    if @message.save
      Message.activity(@message)
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
