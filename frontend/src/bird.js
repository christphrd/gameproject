
class Bird {
  constructor(speed = random(-5,5), scalar = random(10,70), angle = random(2,5), randomBird = floor(random(0,2))){
    this.x = random(width)
    this.y = random(40, 100)
    this.birdSpeed = speed
    this.scalar = scalar
    this.angle = angle
    this.origAngle = angle
    this.image1 = loadGif("img/bird.gif")
    this.image2 = loadGif("img/bird2.gif")
    this.randomBird = randomBird
  }

  show(){
    if(this.randomBird===0){
      image(this.image1, this.x, this.y + (this.scalar * sin(this.angleToRadians())), 90, 50);
    }else if(this.randomBird===1){
      image(this.image2, this.x, this.y + (this.scalar * sin(this.angleToRadians())), 90, 50);
    }
    if(this.x>width+50 && this.x >1){
      this.x = -50
    } else if(this.x<-50 && this.x < -1) {
      this.x = width-50
    }
  }

  angleToRadians() {
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
