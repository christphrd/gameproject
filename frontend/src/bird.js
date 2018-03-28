
class Bird {
  constructor(speed = random(-8,8), scalar = random(10,70), angle = random(2,6)){
    this.x = random(width)
    this.y = random(40, 100)
    this.birdSpeed = speed
    this.birdOrigSpeed = speed
    this.birdSlowSpeed = speed*0.2
    this.scalar = scalar
    this.angle = angle
    this.origAngle = angle
  }

  show(){
    fill(0,255,255);
    ellipse(this.x, this.y + (this.scalar * sin(this.angFunc())), 50, 50);

    if(this.x>width+50 && this.x >1){
      this.x = -50
    } else if(this.x<-50 && this.x < -1) {
      this.x = width-50
    }
  }

  angFunc() {
    this.angle += this.origAngle
    return radians(this.angle)
  }

  update(){
    if(timeSlowState === false){
      this.x+=this.birdSpeed
    }else if(timeSlowState === true){
      this.x+=(this.birdSpeed*0.2)

    }
  }

}
