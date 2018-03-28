window.addEventListener("keydown", function(e) {
  if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
    e.preventDefault();
  }
}, false);

function start() {
  window.addEventListener('keydown', createDude())
}

function createDude() {
  dude = new Dude();
}

function setup() {
  let canvas = createCanvas(700,475);
  canvas.parent('game-window')
  let resetButton = document.getElementById('new-game')
  resetButton.addEventListener('click', resetGame);
  resetGame();
  noStroke();
}

function draw(){
  background(175, 225, 255);
  if(dude) {
    dude.show();
    dude.update();
  }

  for(let i = 0; i < allBirds.length; i++){
    allBirds[i].show()
    allBirds[i].update()
  }

  for(let i = 0; i < allEggs.length; i++){
    allEggs[i].show()
    allEggs[i].update()
    if (allEggs[i].checkCollision() || allEggs[i].y > height){ allEggs.splice(i, 1) }
  }

  checkGameStatus();
  pauseGame();

  if(frameCount % 20 === 0){
    let bird = allBirds[Math.floor(random(0, 4))]
    if (bird.x > 10 && bird.x < 690){
      let egg = new Egg(bird.x, bird.y)
      allEggs.push(egg)
    }
  }
}

function checkGameStatus(){
  if(dude.hp === 0){
    showPopup();
    let gameOver = document.getElementById('game-over')
    gameOver.style.display = 'block'
    let highScores = document.getElementById('high-scores')
    highScores.style.display = 'block'
    noLoop();
  }
}

function resetGame(){
  allBirds = [];
  allEggs = [];
  dude = new Dude();
  dude.resetDude();
  for(i = 0; i < 8; i++){
    let bird = new Bird()
    allBirds.push(bird)
  }
  hidePopup();
  loop();
}

function pauseGame(){
  if(keyIsDown(80)) {
    showPopup();
    let resume = document.getElementById('resume-game')
    resume.style.display = 'block';
    noLoop();
  }
}

function showPopup(){
  let popup = document.getElementById('popup')
  popup.style.display = 'block';
  let newGame = document.getElementById('new-game')
  newGame.style.display = 'block';
}

function hidePopup(){
  let popup = document.getElementById('popup')
  popup.style.display = 'none';
}
