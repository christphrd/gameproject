class Powerup {
  constructor(x,y){
    this.x = x
    this.y = y
    this.powerupSpeed = random(1,3)
    this.color = floor(random(5))
  }

  show(){
    if(this.color === 0){
      fill('white')
    }else if(this.color === 1){
      fill('black')
    }else if(this.color === 2){
      fill('brown')
    }else if(this.color === 3){
      fill('purple')
    }else if(this.color === 4){
      fill('orange')
    }
    ellipse(this.x, this.y, 20, 20);
  }

  update(){ this.y+=this.powerupSpeed }

  checkCollision(){
    let hit = collideCircleCircle(dude.x, height-26, 48, this.x, this.y, 18)
    if(hit){
      if(this.color === 0){
        this.fasterDude()
      } else if (this.color === 1){
        this.timeSlow()
      } else if (this.color === 2){
        this.gainLife()
      } else if (this.color === 3){
        this.miniDude()
      } else if (this.color === 4){
        this.fatDude()
      }
    }
    return hit
  }

  fasterDude(){
    dude.speed = 9
    setTimeout(function(){ dude.speed = 4 }, 5000);
  }

  timeSlow(){
    slowState = true;
    setTimeout(function(){ slowState = false }, 5000);
  }

  gainLife(){
    dude.updateHp(1)
  }

  miniDude(){
    dude.size = 20
    dude.y = height-11
    setTimeout(function(){
      dude.size = 50,
      dude.y = height-26
    }, 5000);
  }

  fatDude(){
    dude.size = 100
    dude.y = height-49
    setTimeout(function(){
      dude.size = 50,
      dude.y = height-26
    }, 5000);
  }
}
