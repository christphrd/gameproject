function getScores() {
  return fetch('http://localhost:3000/levels/1')
  .then(res => res.json())
  .then(json => displayScores(json))
}

function displayScores(data) {

  document.getElementById('highscores').style.display = 'block'
  document.getElementById('highscores').children[2].addEventListener('click', resetGame)
  document.getElementById('game-window').style.display = 'none'

  let highScoreList = document.getElementById('high-score-list')
  highScoreList.innerText = " "

  let topTenScores = data.scores.slice(0,10)

  for(let i=0; i< topTenScores.length; i++){
    let scoreElement= document.createElement('li')
    scoreElement.innerText = `${topTenScores[i].user_initial}: ${topTenScores[i].points}`
    highScoreList.append(scoreElement)
  }
}
