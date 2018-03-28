let paused = false;

function resetGame(){
  allBirds = [];
  allEggs = [];
  allPowerups = [];
  dude = new Dude();
  dude.resetDude();
  for(i = 0; i < 4; i++){
    let bird = new Bird()
    allBirds.push(bird)
  }
  paused = false;
  togglePopup();
  loop();
  let highScores = document.getElementById("popup-scores")
  highScores.style.display = 'none'
}

function checkGameStatus(){
  if(dude.hp === 0){
    paused = true;
    togglePopup();
    popup.children[0].innerText = 'Game Over!'
    popup.children[3].style.display = 'block'
  }
}

function pauseGame(){
  if(keyIsDown(80)) {
    paused = true;
    togglePopup();
    popup.children[0].innerText = 'Paused'
    popup.children[1].style.display = 'block'
  }
}

//Display high scores and form to submit score
function toggleDisplayScores(data) {
  let highScores = document.getElementById("popup-scores")
  highScores.children[2].addEventListener('click', resetGame)
  highScores.style.display = 'block'
  let highScoreList = document.getElementById('high-score-title')
  highScoreList.innerText = "High Scores"
  let topTenScoreArr = data.scores.slice(0,10)
  for(let i=0; i< topTenScoreArr.length; i++){
    let scoreElement = document.createElement('p')
    scoreElement.innerText = `${topTenScoreArr[i].user_initial}: ${topTenScoreArr[i].points}`
    highScoreList.append(scoreElement)
  }
}

//clear out high scores and remove display scores window


//fetch request for getting scores
function getScores() {
  return fetch('http://localhost:3000/levels/1')
  .then(res => res.json())
  .then(json => toggleDisplayScores(json))
}

function unpause(){
  paused = false;
  togglePopup();
  loop();
}

function togglePopup(){
  let popup = document.getElementById('popup')
  if (paused){
    popup.style.display = 'block'
    popup.children[1].addEventListener('click', unpause)
    popup.children[2].addEventListener('click', resetGame)
    popup.children[0].style.display = 'block'
    popup.children[2].style.display = 'block'
    popup.children[3].addEventListener('click', getScores)
    noLoop();
  }else{
    popup.style.display = ''
    for(let i=0; i<4; i++){
      popup.children[i].style.display = ''
    }
  }
  return popup
}
