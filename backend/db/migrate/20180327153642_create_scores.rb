class CreateScores < ActiveRecord::Migration[5.1]
  def change
    create_table :scores do |t|
      t.integer :points
      t.string :user_initial
      t.integer :level_id

      t.timestamps
    end
  end
end
