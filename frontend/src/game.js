let paused = false;
let currentLevel = 1;
let eggDropChance = 80;
let powerupDropChance = 1000;
let birdLevel2 = false;
let birdLevel3 = false;
let birdLevel4 = false;


function resetGame(){
  allBirds = [];
  allEggs = [];
  allPowerups = [];
  timeSlowState = false;
  speedTimeout = null;
  timeSlowTimeout = null;
  sizeStateTimeout = null;
  rainbowTimeout = null;
  dude = new Dude();
  dude.resetDude();
  for(i = 0; i < 2; i++){
    let bird = new Bird()
    allBirds.push(bird)
  }
  eggDropChance = 80;
  powerupDropChance = 1000;
  currentLevel = 1;
  paused = false;
  togglePopup();
  loop();
}

function checkGameStatus(){
  if(dude.hp === 0){
    paused = true;
    togglePopup();
    popup.children[0].innerText = 'Game Over!'
    popup.children[2].addEventListener('click', resetGame)
    popup.children[3].style.display = 'block'
  }
}

function increaseLevel(){
  if(dude.score >= 15){
    currentLevel = 4
    eggDropChance = 5;
    powerupDropChance = 20;
    if(birdLevel4 === false){
      birdLevel4 = true
      createBirds(currentLevel)
    }
  }else if(dude.score >= 10){
    currentLevel = 3
    eggDropChance = 20;
    powerupDropChance = 100;
    if(birdLevel3 === false){
      birdLevel3 = true
      createBirds(currentLevel)
    }
  }else if(dude.score >= 5){
    currentLevel = 2
    eggDropChance = 50;
    powerupDropChance = 500;
    if(birdLevel2 === false){
      birdLevel2 = true
      createBirds(currentLevel)
    }
  }
}

function createBirds(level, birdlevel){
  for(i = 0; i < level; i++){
    let bird = new Bird()
    allBirds.push(bird)
  }
}

function togglePopup(){

  let popup = document.getElementById('popup')
  if (paused){
    document.getElementById('tips').style.display = ''
    popup.children[1].addEventListener('click', unpause)
    popup.children[3].addEventListener('click', getScores)
    popup.children[4].addEventListener('click', readTips)
    popup.children[0].style.display = 'block'
    popup.children[2].style.display = 'block'
    popup.style.display = 'block'
    noLoop();
  }else{
    popup.style.display = ''
    for(let i=0; i<5; i++){ popup.children[i].style.display = ''}
  }
  // return popup
}

function readTips(){
  popup.style.display = ''
  // for(let i=0; i<5; i++){ popup.children[i].style.display = ''}
  let tips = document.getElementById('tips')
  tips.style.display = 'block'
  tips.children[8].addEventListener('click', togglePopup)
}

function pauseGame(){
  if(keyIsDown(80)) {
    paused = true;
    togglePopup();
    popup.children[0].innerText = 'Paused'
    popup.children[2].addEventListener('click', resetGame)
    popup.children[1].style.display = 'block'
    popup.children[4].style.display = 'block'
  }
}

function unpause(){
  paused = false;
  togglePopup();
  loop();
}

function welcomeScreen(){
  document.getElementById('welcome').style.display = 'block'
  document.getElementById('game-window').style.display = 'none'
  document.getElementById('username-form').addEventListener('submit',function(event){
    event.preventDefault()
    userInitials = event.target.children[0].value
    loadGame()
  })
}

function loadGame(){
  document.getElementById('welcome').style.display = 'none'
  document.getElementById('game-window').style.display = 'block'
  resetGame();
}
