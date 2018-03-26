function setup() {
  createCanvas(windowWidth-10, windowHeight-20);
  smooth();

  bird1 = new Bird();
  bird2 = new Bird();
  bird3 = new Bird();

  //try setInterval to make create more instances
  // setInterval(dropAll, 3000)
  egg1 = bird1.renderEgg()
  egg2 = bird2.renderEgg()
  egg3 = bird3.renderEgg()
}

let dudePosition = 100;


function draw(){
  // background
  background(175, 225, 255);
  dude();
  bird1.renderBird();
  bird2.renderBird();
  bird3.renderBird();
  egg1.eggDrop();
  egg2.eggDrop();
  egg3.eggDrop();

}

function dude(){
  if (keyIsDown(LEFT_ARROW) && dudePosition>=40) { dudePosition -= 10 }
  if (keyIsDown(RIGHT_ARROW) && dudePosition<=windowWidth-45) { dudePosition += 10 }
  fill(255,255,100);
  if (keyIsDown(32)){ fill(255,0,0)}
  ellipse(dudePosition, windowHeight-50, 50, 50);
}

// function bird(){
//   fill(0,255,255);
//   ellipse(birdPosition, 50, 50, 50);
//
//   if(birdPosition>windowWidth){
//     birdPosition = 0
//   }
//
//   birdPosition+=5
//   egg(birdPosition)
// }
//
// function egg(birdPosition){
//   fill(240,242,240);
//   const eggX = birdPosition
//   console.log(String(eggX))
//   ellipse(55, eggPosition, 10, 10);
//   eggPosition++;
//
// }
