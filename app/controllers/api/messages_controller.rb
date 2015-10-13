class API::MessagesController < ApplicationController

  def index
    @messages = Message.all

    render @messages
  end
end
