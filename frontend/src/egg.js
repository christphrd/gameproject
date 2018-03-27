class Egg {
  constructor(x, y){
    this.x = x
    this.y = y
    this.eggSpeed = random(1,10)
    this.color = floor(random(3))
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
    ellipse(this.x, this.y, 10, 10);
  }

  update(){
    this.y+=this.eggSpeed
  }

  checkCollision(){
    
  }
}
