window.addEventListener("keydown", function(e) {
  if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
    e.preventDefault();
  }
}, false);

function setup() {
  let canvas = createCanvas(700,475);
  canvas.parent('game-window')
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
