let paused = false;

function resetGame(){

  allBirds = [];
  allEggs = [];
  dude = new Dude();
  dude.resetDude();
  for(i = 0; i < 4; i++){
    let bird = new Bird()
    allBirds.push(bird)
  }
  paused = false;
  togglePopup();

  loop();


}

function checkGameStatus(){
  if(dude.hp === 0){
    paused = true;
    togglePopup();
    popup.children[0].style.display = 'block'
    popup.children[1].style.display = 'block'
    popup.children[1].addEventListener('click', resetGame)
  }
}

function pauseGame(){
  if(keyIsDown(80)) {
    paused = true;
    togglePopup();
  }
}

function togglePopup(){
  let popup = document.getElementById('popup')
  if (paused){
    popup.style.display = 'block'
    noLoop();
  }else{
    popup.style.display = ''
    for(let i=0; i<4; i++){
      popup.children[i].style.display = ''
    }
  }
  return popup
}
