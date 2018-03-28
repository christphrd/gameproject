class Dude {
  constructor(x=350, y=height-26, score = 0, color = 0, speed = 4, hp = 1, size = 50, rainbow = false){
    this.x = x
    this.y = y
    this.size = size
    this.color = color
    this.speed = speed

    this.score = score
    this.hp = hp
    this.rainbow = rainbow
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
    if(this.rainbow === true){
      setInterval(function(){ this.color = floor(random(0,4)) }, 300);
    }
  }

  update(){
    if (keyIsDown(LEFT_ARROW) && this.x>=(this.size/2)) { this.x -= this.speed }
    if (keyIsDown(RIGHT_ARROW) && this.x<=(width-this.size/2)) { this.x += this.speed }
    if (keyIsDown(65)){
      this.color = 1
    }else if(keyIsDown(83)){
      this.color = 2
    }else if(keyIsDown(68)){
      this.color = 3
    }else if(keyIsDown(70)){
      this.color = 0;
    }

    if(this.sizeState === 1){
      this.size = 50
      this.y = height-26
    }else if(this.sizeState === 2){
      this.size = 20
      this.y = height-11
    }else if(this.sizeState === 3){
      this.size = 100
      this.y = height-49
    }


  }

  updateScore(amount){
    let showScore = document.getElementById('show-score')
<<<<<<< HEAD
    dude.score += amount
    showScore.innerText = "Current Score: " + dude.score
=======
    showScore.innerText = "Eggs: " + ++dude.score
>>>>>>> master
  }

  updateHp(amount){
    let showHp = document.getElementById('show-hp')
<<<<<<< HEAD
    dude.hp += amount
    showHp.innerText = "Current Hp: " + dude.hp
=======
    showHp.innerText = "HP: " + --dude.hp
>>>>>>> master
  }

  resetDude(){
    let showScore = document.getElementById('show-score')
    showScore.innerText = "Eggs: 0"
    let showHp = document.getElementById('show-hp')
    showHp.innerText = "HP: " + dude.hp
  }
}
