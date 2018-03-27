
let allBirds = []
let allEggs = []
let dude = new Dude();
let hit = false;


window.addEventListener("keydown", function(e) {
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
    }
}, false);

function setup() {
  let canvas = createCanvas(700,500);
  canvas.parent('game-window')

  for(i = 0; i < 4; i++){
    let bird = new Bird()
    allBirds.push(bird)
  }
}

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

    hit = collideCircleCircle(dude.x, height-26, 48, allEggs[i].x, allEggs[i].y, 10)
    if(hit === true){

      if(dude.color === allEggs[i].color){
        let showScore = document.getElementById('show-score')
        dude.score++
        showScore.innerText = "Current Score: " + dude.score
      }else{
        let showHp = document.getElementById('show-hp')
        dude.hp--
        showHp.innerText = "Current Hp: " + dude.hp
      }
      allEggs.splice(i, 1)

    } else {
    //Remove eggs so that it doesn't slow down
      if(allEggs[i].y > height){ allEggs.splice(i, 1) }
    }

    checkGameStatus();

  }

  //modulo to have eggs drop at an interval in draw function
  if(frameCount % 120 === 0){
    let bird = allBirds[Math.floor(random(0, 4))]
    if (bird.x > 10 && bird.x < 690){
      let egg = new Egg(bird.x, bird.y)
      allEggs.push(egg)
    }
  }
}

function checkGameStatus(){
  let navbar = document.getElementById('navbar')
  if(dude.hp === 0){
    noLoop();
    navbar.innerHTML = '<p>Play Again?</p>'
    navbar.children[0].id = "game-over-text"
    let navbarText = document.getElementById('game-over-text')

    navbarText.addEventListener('click', function(event){
      navbar.innerHTML = `  <div id='navbar'>
          <p>New Game</p>
          <p>High Scores</p>
          <p id="show-score">Current Score: </p>
          <p id="show-hp">HP: 10</p>
        </div>`
      dude.hp = 10
      loop()
      // debugger;
    })



  }
}
