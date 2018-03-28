
class Bird {
  constructor(birdSpeed = random(2,8), scalar = random(10,70), angle = random(2,7)){
    this.x = random(width)
    this.y = random(40, 100)
    this.birdSpeed = birdSpeed
    this.scalar = scalar
    this.angle = angle
    this.origAngle = angle
  }

  show(){
    fill(0,255,255);
    ellipse(this.x, this.y + (this.scalar * sin(this.angFunc())), 50, 50);

    if(this.x>width){
      this.x = 0
    }
  }

  angFunc() {
    this.angle += this.origAngle
    return radians(this.angle)
  }

  update(){
    this.x+=this.birdSpeed
  }

}
