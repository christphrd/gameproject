function setup() {
  createCanvas(windowWidth-10, windowHeight-20);
  smooth();

  bird1 = new Bird();
  bird2 = new Bird();
  bird3 = new Bird();
  poop1 = bird1.renderPoop()
  poop2 = bird2.renderPoop()
  poop3 = bird3.renderPoop()
}

let dudePosition = 100;


function draw(){
  // background
  background(175, 225, 255);
  dude();
  bird1.renderBird();
  bird2.renderBird();
  bird3.renderBird();
  poop1.poopDrop();
  poop2.poopDrop();
  poop3.poopDrop();

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
//   poop(birdPosition)
// }
//
// function poop(birdPosition){
//   fill(240,242,240);
//   const poopX = birdPosition
//   console.log(String(poopX))
//   ellipse(55, poopPosition, 10, 10);
//   poopPosition++;
//
// }
