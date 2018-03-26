let allEggs = []
let dudePosition = 100;
let allBirds = []

function setup() {
  createCanvas(windowWidth-10, windowHeight-20);

  for(i = 0; i < 4; i++){
    let bird = new Bird()
    console.log(bird)
    allBirds.push(bird)
  }
  // bird1 = new Bird();
  // bird2 = new Bird();
  // bird3 = new Bird();
  // bird4 = new Bird();

  // let allBirds = [bird1, bird2, bird3, bird4]

  // allBirds.forEach(bird => {
  //   let eggy = new Egg(500, 400)
  //   allEggs.push(eggy)
  // })

  //try setInterval to make create more instances
  // setInterval(dropAll, 3000)
  // egg1 = bird1.renderEgg()
  // egg2 = bird2.renderEgg()
  // egg3 = bird3.renderEgg()

}


// function dropIt() {
//   console.log("trying to drop an egg");
// }


function draw(){
  // background
  background(175, 225, 255);
  dude();
  for(let i = 0; i < allBirds.length; i++){
    allBirds[i].show()
    allBirds[i].update()
  }

  for(let i = 0; i < allEggs.length; i++){
    // console.log(allEggs)
    if (allEggs.length > 0){
      allEggs[i].show()
      allEggs[i].update()
    }
    if(allEggs[i].y > height){
      allEggs.splice(i, 1)
    }
  }
  console.log(allEggs.length)

  if(frameCount % 120 === 0){
    // console.log('hello')
    let bird = allBirds[Math.floor(random(0, 4))]
    // console.log(bird)
    let egg = new Egg(bird.x, bird.y)
    allEggs.push(egg)
  }
  // allEggs.forEach(egg => {
  //   setInterval(egg.eggDrop, 2000)
  // })
  // if (bird1.x === windowWidth) {
  //   bird1 = new Bird();
  //   bird1.renderBird()
  // }
  // egg1.eggDrop();
  // egg2.eggDrop();
  // egg3.eggDrop();
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
