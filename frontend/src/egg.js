class Egg {
  constructor(x, y){
    this.x = x
    this.y = y
    this.eggSpeed = random(1,10)
    this.color = floor(random(4))
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
    ellipse(this.x, this.y, 25, 25);
  }

  update(){ this.y+=this.eggSpeed }

  checkCollision(){
    let hit = collideCircleCircle(dude.x, height-26, 48, this.x, this.y, 10)
    if(hit){
      dude.color === this.color ? dude.updateScore() : dude.updateHp()
    }
    return hit
  }
}
