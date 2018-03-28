class Dude {
  constructor(x=350, y=height-26, score = 0, color = 0, hp = 1, size = 50){
    this.x = x
    this.y = y
    this.size = size
    this.color = color
    this.speed = 4

    this.score = score
    this.hp = hp
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
    ellipse(this.x, this.y, this.size, this.size);
  }

  update(){
    if (keyIsDown(LEFT_ARROW) && this.x>=30) { this.x -= this.speed }
    if (keyIsDown(RIGHT_ARROW) && this.x<=674) { this.x += this.speed }
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

  updateScore(){
    let showScore = document.getElementById('show-score')
    showScore.innerText = "Current Score: " + ++dude.score
  }

  updateHp(amount){
    let showHp = document.getElementById('show-hp')
    dude.hp += amount
    showHp.innerText = "Current Hp: " + dude.hp
  }

  resetDude(){
    let showScore = document.getElementById('show-score')
    showScore.innerText = "Current Score: 0"

    let showHp = document.getElementById('show-hp')
    showHp.innerText = "HP: " + dude.hp
  }
}
