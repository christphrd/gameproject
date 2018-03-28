class Score < ApplicationRecord
  validates :user_initial, presence: true
  validates :points, presence: true
  belongs_to :level
end
