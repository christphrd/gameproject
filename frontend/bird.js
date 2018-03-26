
class Bird {
  constructor(){
    this.x = random(windowWidth)
    this.y = random(20, 200)
    this.birdSpeed = random(2,8)
  }

  show(){
    fill(0,255,255);
    ellipse(this.x, this.y, 50, 50);

    if(this.x>windowWidth){
      this.x = 0
    }
  }

  update(){
    this.x+=this.birdSpeed
  }



  // renderEgg() {
  //   console.log("render egg triggered");
  //   console.log("------");
  //   let egg = new Egg(this.x, this.y)
  //   return egg
  // }

}
