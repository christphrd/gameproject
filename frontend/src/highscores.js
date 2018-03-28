function getScores() {
  return fetch('http://localhost:3000/levels/1')
  .then(res => res.json())
  .then(json => displayScores(json))
}

function displayScores(data) {

  document.getElementById('highscores').style.display = 'block'
  document.getElementById('highscores').children[2].addEventListener('click', resetGame)
  document.getElementById('game-window').style.display = 'none'

  let highScoreTable = document.getElementById('high-score-table')
  highScoreTable.innerHTML = "<tr><th>Name</th><th>Score</th></tr>"

  let topTenScores = data.scores.slice(0,10)

  for(let i=0; i< topTenScores.length; i++){
    let row = document.createElement('tr')
    let username = document.createElement('td')
    username.innerText = topTenScores[i].user_initial
    row.append(username)

    let score = document.createElement('td')
    score.innerText =topTenScores[i].points
    row.append(score)

    highScoreTable.append(row)
  }
}
