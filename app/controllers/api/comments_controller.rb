class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.all

    render :index
  end

  def create
    p params
    @comment = Comment.create(comment_params)

    if @comment.save
      render json: {}
    else
      render json: "failed"
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:body,
                                    :commentable_id,
                                    :commentable_type,
                                    :user_id)
  end

  end
