window.addEventListener("keydown", function(e) {
  if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
    e.preventDefault();
  }
}, false);

function setup() {
  let canvas = createCanvas(700,475);
  canvas.parent('game-window')
  welcomeScreen();
  noStroke();
  bg = loadImage('img/bg.png')
}

function draw(){
  background(bg);
  imageMode(CENTER)
  if(typeof dude !== "undefined" && typeof allBirds !== "undefined" && typeof allEggs !== "undefined" && typeof allPowerups !== "undefined") {
    dude.show();
    dude.update();

    for(let i = 0; i < allBirds.length; i++){
      allBirds[i].show()
      allBirds[i].update()
    }

    checkGameStatus();
    pauseGame();
    increaseLevel();

    if(frameCount % eggDropChance === 0){
      let bird = allBirds[floor(random(0, allBirds.length))]
      if (bird.x > 10 && bird.x < 690){
        let egg = new Egg(bird.x, bird.y, bird.color)
        allEggs.push(egg)
      }
    }

    for(let i = 0; i < allEggs.length; i++){
      allEggs[i].show()
      allEggs[i].update()
      if (allEggs[i].checkCollision() || allEggs[i].y > height){ allEggs.splice(i, 1) }
    }

    if(frameCount % powerupDropChance === 0){
      let bird = allBirds[floor(random(0, allBirds.length))]
      if (bird.x > 10 && bird.x < 690){
        let powerup = new Powerup(bird.x, bird.y)
        allPowerups.push(powerup)
      }
    }

    for(let i = 0; i < allPowerups.length; i++){
      allPowerups[i].show()
      allPowerups[i].update()
      if (allPowerups[i].checkCollision() || allPowerups[i].y > height){ allPowerups.splice(i, 1) }
    }
  }
}
