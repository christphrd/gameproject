function setup() {
  createCanvas(windowWidth, windowHeight);
  smooth();
}

let x = 100;

function draw(){
  // background
  background(175, 225, 255);
  ellipseMode(CENTER);
  rectMode(CENTER);
  // position
  if (keyIsDown(LEFT_ARROW) && x>50) { x -= 10 }
  if (keyIsDown(RIGHT_ARROW) && x<windowWidth-50) { x += 10 }

  // head
  fill(255,255,100);
  ellipse(x, 100, 50, 50);
  // body
  rect(x, y+100, 80, 100);
  // eyes

  fill(255, 175, 255);
  if (keyIsDown(32)){fill(255,0,0)}
  ellipse(x-25, y, 25, 25);
  ellipse(x+25, y, 25, 25);
  ellipse(x, y-25, 25, 25);
  // mouth
  line(x-25, y+25, x+25, y+25);
  // legs
  line(x+40, y+150, x+40, y+250);
  line(x-40, y+150, x-40, y+250);
  // arms
  line(x+40, y+50, x+55, y+150);
  line(x-40, y+50, x-55, y+150);
}
