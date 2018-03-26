class Poop {
  constructor(x, y){
    this.x = x
    this.y = y
    this.poopSpeed = random(1,4)
  }

  poopDrop() {
    fill(240,242,240)
    ellipse(this.x, this.y, 10, 10);
    this.y+=this.poopSpeed
  }

}
