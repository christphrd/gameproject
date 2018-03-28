class ScoresController < ApplicationController
  def create
    @score = Score.create(score_params)
    render json: @score
  end

  private
  def score_params
    params.require(:score).permit(:points, :user_initial, :level_id)
  end
end
