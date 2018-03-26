class Bird {
  constructor(){
    this.x = random(windowWidth)
    this.y = random(20, 200)
    this.birdSpeed = random(2,8)
  }

  renderBird() {
    fill(0,255,255);
    ellipse(this.x, this.y, 50, 50);

    if(this.x>windowWidth){
      this.x = 0
    }

    this.x+=this.birdSpeed
  }

  renderPoop() {
    let poop = new Poop(this.x, this.y)
    return poop
    // poop.poopDrop()
  }
}
