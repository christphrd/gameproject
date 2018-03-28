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
  document.getElementById('game-window').style.display = 'block'
  document.getElementById("highscores").style.display = 'none'
  paused = false;
  togglePopup();
  loop();
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

function unpause(){
  paused = false;
  togglePopup();
  loop();
}

function togglePopup(){
  let popup = document.getElementById('popup')
  if (paused){
    popup.children[1].addEventListener('click', unpause)
    popup.children[2].addEventListener('click', resetGame)
    popup.children[3].addEventListener('click', getScores)
    popup.children[0].style.display = 'block'
    popup.children[2].style.display = 'block'
    popup.style.display = 'block'
    noLoop();
  }else{
    popup.style.display = ''
    for(let i=0; i<4; i++){ popup.children[i].style.display = ''}
  }
  return popup
}
