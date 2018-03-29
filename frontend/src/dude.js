class Dude {
  constructor(x=350, y=height-37, score = 0, color = 0, speed = 4, hp = 1, size = 60, rainbow = false){
    this.x = x
    this.y = y
    this.size = size
    this.imgWidth = size*1.44
    this.imgHeight = size*1.2
    this.color = color
    this.speed = speed
    this.image = image
    this.score = score
    this.hp = hp
    this.rainbow = rainbow
  }

  show(){
    if(this.color === 0){
      image(this.image[0], this.x, this.y, this.imgWidth, this.imgHeight)
    }else if(this.color === 1){
      image(this.image[1], this.x, this.y, this.imgWidth, this.imgHeight)
    }else if(this.color === 2){
      image(this.image[2], this.x, this.y, this.imgWidth, this.imgHeight)
    }else if(this.color === 3){
      image(this.image[3], this.x, this.y, this.imgWidth, this.imgHeight)
    }
    noFill();
    ellipse(this.x, this.y, this.size, this.size);
    if(this.rainbow === true){
      image(this.image[4], this.x, this.y, this.imgWidth, this.imgHeight)
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
    dude.score += amount
    showScore.innerText = "Current Score: " + dude.score
  }

  updateHp(amount){
    let showHp = document.getElementById('show-hp')
    dude.hp += amount
    showHp.innerText = "Current Hp: " + dude.hp
  }

  resetDude(){
    let showScore = document.getElementById('show-score')
    showScore.innerText = "Eggs: 0"
    let showHp = document.getElementById('show-hp')
    showHp.innerText = "HP: " + dude.hp
  }
}
