class Api::EventsController < ApplicationController

  def index
    @events = Event.all
    render :index
  end

  def create
    p params
    @event = Event.create(event_params)

    if @event.save
      render json: "success"
    else
      render json: "failed"
    end
  end

  private
  def event_params
    params.require(:event).permit(:creator_id, :description, :date, :location)
  end

  end
