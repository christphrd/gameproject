class Powerup {
  constructor(x,y){
    this.x = x
    this.y = y
    this.powerupSpeed = random(1,3)
  }

  show(){
    fill(0);
    ellipse(this.x, this.y, 20, 20);
  }

  update(){ this.y+=this.powerupSpeed }

  checkCollision(){
    let hit = collideCircleCircle(dude.x, height-26, 48, this.x, this.y, this.size)
    if(hit){
      dude.color === this.color ? dude.updateScore() : dude.updateHp()
    }
    return hit
  }
}
