function getScores() {
  return fetch('http://localhost:3000/levels/1')
  .then(res => res.json())
  .then(json => displayScores(json))
}

function displayScores(data) {
  //dude.score is the score & userInitials is the score
  newScore = {
    points: dude.score,
    user_initial: userInitials,
    level_id: 1
  }
  fetch('http://localhost:3000/scores', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(newScore)
  })

  document.getElementById('highscores').style.display = 'block'
  document.getElementById('highscores').children[2].addEventListener('click', resetGame)
  document.getElementById('game-window').style.display = 'none'

  let highScoreTable = document.getElementById('high-score-table')
  highScoreTable.innerHTML = "<tr><th>Rank</th><th>Score</th><th>Initials</th></tr>"

  debugger;
  let topTenScores = data.scores.slice(0,10)

  for(let i=0; i< topTenScores.length; i++){
    let row = document.createElement('tr')
    let rank = document.createElement('td')
    let username = document.createElement('td')
    let score = document.createElement('td')

    rank.innerText = i+1
    username.innerText = topTenScores[i].user_initial
    score.innerText =topTenScores[i].points

    row.append(rank)
    row.append(score)
    row.append(username)
    highScoreTable.append(row)
  }
}
