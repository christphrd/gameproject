class Egg {
  constructor(x, y){
    this.x = x
    this.y = y
    this.eggSpeed = random(1,10)
    this.color = floor(random(3))
  }

  show(){
    if(this.color === 0){
      fill(255,255,100)
    }else if(this.color === 1){
      fill(255,0,0)
    }else if(this.color === 2){
      fill(0,255,0)
    }else if(this.color === 3){
      fill(0,0,255)
    }
    ellipse(this.x, this.y, 10, 10);
  }

  update(){
    this.y+=this.eggSpeed
  }

  checkCollision(){
    let hit = collideCircleCircle(dude.x, height-26, 48, this.x, this.y, 10)
    if(hit === true){
      if(dude.color === this.color){
        let showScore = document.getElementById('show-score')
        dude.score++
        showScore.innerText = "Current Score: " + dude.score
      }else{
        let showHp = document.getElementById('show-hp')
        dude.hp--
        showHp.innerText = "Current Hp: " + dude.hp
      }
      return hit
    }
  }
}
