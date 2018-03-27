class Dude {
  constructor(x=100, y=0, score = 0){
    this.x = x
    this.y = y
    this.score = score
  }

  show(){
    fill(255,255,100);
    ellipse(this.x,height-26, 50, 50);
    if (keyIsDown(32)){fill(255,0,0)}
  }

  update(){
    if (keyIsDown(LEFT_ARROW) && this.x>=40) { this.x -= 10 }
    if (keyIsDown(RIGHT_ARROW) && this.x<=width-45) { this.x += 10 }
  }

}
