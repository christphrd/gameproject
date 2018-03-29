function getScores() {
  return fetch('http://localhost:3000/levels/1')
  .then(res => res.json())
  .then(json => displayScores(json))
}

function displayScores(data) {
  //post to db with fetch
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
  document.getElementById('highscores').children[2].addEventListener('click', hideScores)
  document.getElementById('game-window').style.display = 'none'

  let highScoreTable = document.getElementById('high-score-table')
  highScoreTable.innerHTML = "<tr><th>Rank</th><th>Score</th><th>Initials</th></tr>"

  //optimistic rendering
  copiedScoreFromDb = data.scores.slice()
  copiedScoreFromDb.push(newScore)
  pushedData = copiedScoreFromDb
  // debugger;
  //1. sorting arr of obj
  function compare(a, b) {
    const pointsA = a.points;
    const pointsB = b.points;

    let comparison = 0;
    if (pointsA > pointsB) {
      comparison = 1;
    } else if (pointsA < pointsB) {
      comparison = -1;
    }
    return comparison * -1;
  }
  pushedData.sort(compare)

  let topTenScores = pushedData.slice(0,10)

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
