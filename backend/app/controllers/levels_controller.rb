class LevelsController < ApplicationController
  def show
    @level = Level.find(params[:id])
    render json: @level, include: ['scores']
  end

end
