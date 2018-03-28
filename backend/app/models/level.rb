class Level < ApplicationRecord
  has_many :scores, -> { order("points DESC") }
end
