class Dude {
  constructor(x=350, y=0, score = 0, color = 0, hp = 1){
    this.x = x
    this.y = y
    this.score = score
    this.hp = hp
    this.color = color
  }

  show(){
    if(this.color === 0){
      fill(255,255,100)
    }else if(this.color === 1){
      fill(255,0,0)
    }else if(this.color === 2){
      fill(0,255,0)
    }else if(this.color === 3){
      fill(0,0,255)
    }
    ellipse(this.x,height-26, 50, 50);
  }

  update(){
    if (keyIsDown(LEFT_ARROW) && this.x>=30) { this.x -= 10 }
    if (keyIsDown(RIGHT_ARROW) && this.x<=674) { this.x += 10 }
    if (keyIsDown(65)){
      this.color = 1
    }else if(keyIsDown(83)){
      this.color = 2
    }else if(keyIsDown(68)){
      this.color = 3
    }else if(keyIsDown(70)){
      this.color = 0;
    }
  }

}
