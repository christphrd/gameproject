class Powerup {
  constructor(x, y, size=20){
    this.x = x
    this.y = y
    this.size = size
    this.powerupSpeed = random(1,3)
    this.color = floor(random(6))
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
    }else if(this.color === 5){
      fill('pink')
    }
    ellipse(this.x, this.y, this.size, this.size);
  }

  update(){ this.y+=this.powerupSpeed }

  checkCollision(){
    let hit = collideCircleCircle(dude.x, dude.y, dude.size, this.x, this.y, this.size)
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
      } else if (this.color === 5){
        this.rainbowDude()
      }
    }
    return hit
  }

  fasterDude(){
    dude.speed = 9;
    clearTimeout(speedTimeout);
    speedTimeout = setTimeout(function(){ dude.speed = 4 }, 10000);
    dude.updateScore(1);
  }

  timeSlow(){
    timeSlowState = true;
    clearTimeout(timeSlowTimeout);
    timeSlowTimeout = setTimeout(function(){ timeSlowState = false }, 5000);
    dude.updateScore(1);
  }

  gainLife(){
    dude.updateHp(1);
    dude.updateScore(1);
  }

  miniDude(){
    dude.sizeState = 2;
    clearTimeout(sizeStateTimeout);
    sizeStateTimeout = setTimeout(function(){ dude.sizeState = 1 }, 5000);
    dude.updateScore(1);
  }

  fatDude(){
    dude.sizeState = 3;
    clearTimeout(sizeStateTimeout);
    sizeStateTimeout = setTimeout(function(){ dude.sizeState = 1 }, 5000);
    dude.updateScore(1);
  }

  rainbowDude(){
    dude.rainbow = true;
    clearTimeout(rainbowTimeout);
    rainbowTimeout = setTimeout(function(){ dude.rainbow = false }, 10000);
    dude.updateScore(1);
  }

}
