

class Egg {
  constructor(x, y, speed = random(1,6)){
    this.x = x
    this.y = y
    this.eggSpeed = speed
    // this.eggOrigSpeed = speed
    // this.eggSlowSpeed = speed*0.2
    this.color = floor(random(4))
    this.size = floor(random(25,41))
    this.images = [loadGif('img/yellow-egg.gif'), loadGif('img/red-egg.gif'), loadGif('img/green-egg.gif'), loadGif('img/blue-egg.gif')]
  }

  show(){
    if(this.color === 0){
      image(this.images[0], this.x, this.y, this.size, this.size);
    }else if(this.color === 1){
      image(this.images[1], this.x, this.y, this.size, this.size);
    }else if(this.color === 2){
      image(this.images[2], this.x, this.y, this.size, this.size);
    }else if(this.color === 3){
      image(this.images[3], this.x, this.y, this.size, this.size);
    }
  }

  update(){
    if(timeSlowState === false){
      this.y+=this.eggSpeed
    }else if(timeSlowState === true){
      this.y+=(this.eggSpeed*0.2)
    }
  }

  checkCollision(){
    let hit = collideCircleCircle(dude.x, dude.y, dude.size, this.x, this.y, this.size)
    if(hit){
      if(dude.rainbow === false){
        dude.color === this.color ? dude.updateScore(1) : dude.updateHp(-1)
      }else if(dude.rainbow === true){
        dude.updateScore(1)
      }
    }
    return hit
  }
}
