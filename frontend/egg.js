class Egg {
  constructor(x, y){
    this.x = x
    this.y = y
    this.eggSpeed = random(1,4)
  }

  show(){
    fill(240,242,240)
    ellipse(this.x, this.y, 10, 10);
  }

  update(){
    this.y+=this.eggSpeed
  }

  // eggDrop() {
  //   console.log("eggDrop triggered");
  //
  //
  //   console.log("this is", this);
  //   console.log("-----");
  // }

  // renderEgg() {
  //   console.log("render egg triggered");
  //   console.log("------");
  //   let egg = new Egg(this.x, this.y)
  //   return egg
  // }

  // setInterval(eggDrop, 2000)
}
