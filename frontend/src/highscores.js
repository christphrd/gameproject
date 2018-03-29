function getScores() {
  return fetch('http://localhost:3000/levels/1')
  .then(res => res.json())
  .then(json => displayScores(json))
}

function displayScores(json) {

  document.getElementById('highscores').style.display = 'block'
  document.getElementById('highscores').children[2].addEventListener('click', hideScores)
  document.getElementById('game-window').style.display = 'none'

  let highScoreTable = document.getElementById('high-score-table')
  highScoreTable.innerHTML = "<tr><th>RANK</th><th>NAME</th><th>SCORE</th></tr>"

  let topTenScores = json.scores.slice(0,10)

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

function hideScores(){
  document.getElementById('game-window').style.display = 'block'
  document.getElementById("highscores").style.display = 'none'
  resetGame();
}
