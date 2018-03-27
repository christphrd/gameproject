let dudePosition = 100;
let allBirds = []
let allEggs = []

function setup() {
  createCanvas(windowWidth-10, windowHeight-20);

  for(i = 0; i < 4; i++){
    let bird = new Bird()
    allBirds.push(bird)
  }
}

let dude = new Dude();

let hit = false;

function draw(){
  // background
  background(175, 225, 255);

  dude.show();
  dude.update();

  for(let i = 0; i < allBirds.length; i++){
    allBirds[i].show()
    allBirds[i].update()
  }

  for(let i = 0; i < allEggs.length; i++){
    if (allEggs.length > 0){
      allEggs[i].show()
      allEggs[i].update()
    }

    hit = collideCircleCircle(dude.x, windowHeight-50, 50, allEggs[i].x, allEggs[i].y, 10)
    print("colliding? " + hit);
    if(hit === true){
      allEggs.splice(i, 1)
      dude.score++
      console.log(dude.score)

    } else {
    //Remove eggs so that it doesn't slow down
      if(allEggs[i].y > height){
        allEggs.splice(i, 1)
      }
    }
  }

  //modulo to have eggs drop at an interval in draw function
  if(frameCount % 120 === 0){
    let bird = allBirds[Math.floor(random(0, 4))]
    let egg = new Egg(bird.x, bird.y)
    allEggs.push(egg)
  }
}

// function dude(){
//   if (keyIsDown(LEFT_ARROW) && dudePosition>=40) { dudePosition -= 10 }
//   if (keyIsDown(RIGHT_ARROW) && dudePosition<=windowWidth-45) { dudePosition += 10 }
//   fill(255,255,100);
//   if (keyIsDown(32)){ fill(255,0,0)}
//   ellipse(dudePosition, windowHeight-50, 50, 50);
// }
