class LevelsController < ApplicationController
  def show
    @level = Level.find(params[:id])
    render json: @level, include: ['scores']
  end

  def test
    @level = Level.find(params[:id])
    render json: @level, include: ['scores']
  end

  def show
    @level = Level.find(params[:id])
    render json: @level, include: ['scores']
  end

  def test
    @level = Level.find(params[:id])
    render json: @level, include: ['scores']
  end
end
