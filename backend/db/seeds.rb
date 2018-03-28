# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
lvl1 = Level.create(level_difficulty: "easy")
lvl2 = Level.create(level_difficulty: "medium")
lvl3 = Level.create(level_difficulty: "hard")

score1 = Score.create(points: 12, user_initial: "CD", level_id: lvl1.id)
score2 = Score.create(points: 10, user_initial: "IC", level_id: lvl1.id)
score3 = Score.create(points: 3, user_initial: "AL", level_id: lvl1.id)

med_score1 = Score.create(points: 123, user_initial: "CD", level_id: lvl2.id)
med_score2 = Score.create(points: 101, user_initial: "IC", level_id: lvl2.id)
med_score3 = Score.create(points: 323, user_initial: "AL", level_id: lvl2.id)

hard_score1 = Score.create(points: 40, user_initial: "CD", level_id: lvl3.id)
hard_score2 = Score.create(points: 50, user_initial: "IC", level_id: lvl3.id)
hard_score3 = Score.create(points: 20, user_initial: "AL", level_id: lvl3.id)
hard_score4 = Score.create(points: 50, user_initial: "AL", level_id: lvl3.id)
