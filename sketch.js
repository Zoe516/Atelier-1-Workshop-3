let BottleGif;
let playState = 0;
let waterRefill;
let happyBottle;
let water = 0;
let frustration = 0;
let frustrationAmount = 0;
let angryBottle;
let park;
let beach;
let timer1 = 0;
let button;
let location1 = true;
let fullBottle;
let confetti;
let timer = false;
let timer2 = 0; 
let timer2Set = false;
let explosion;

let characterLook = {
  x: 0,
  y: 0,
}

let charLookX = -40;
let charLookY = -280;

function preload(){
  BottleGif = loadImage('images/bottle.gif');
  waterRefill = loadImage('images/waterrefill.gif');
  angryBottle = loadImage('images/angry_bottle.gif');
  park = loadImage('images/Park_stock.png');
  beach = loadImage('images/Better_beach_stock.jpg');
  happyBottle = loadImage('images/happy_bottle.gif');
  fullBottle = loadImage('images/full_bottle.gif');
  confetti = loadImage('images/confetti.gif');
  explosion = loadImage('images/explosion.gif');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  enableGyroTap();
  lockGestures();
  waterRefill.resize(waterRefill.width/2,waterRefill.height/2)
  angryBottle.resize(angryBottle.width/2,angryBottle.height/2)
  happyBottle.resize(happyBottle.width/2,happyBottle.height/2)
  fullBottle.resize(fullBottle.width/2,fullBottle.height/2)
  explosion.resize(explosion.width/2,explosion.height/2)
  BottleGif.resize(BottleGif.width/2,BottleGif.height/2)
}

function draw() {
  background(220);
  if(location1 == true){
    image(park,0,0,width,height)
  }
  else if(location1 == false){
    image(beach,0,0,width,height) 
  }
  if (playState <= 0){
  playState = 0
  }
  if (playState >= 4){
    playState = 4
  }
  
  playState = playState - 1

  if (frustration >= 325 && timer2Set == false){
    timer2Set = true
    timer2 = 3
  }
  
  if (timer2Set == true && timer2 >0){ 
   if (frameCount % 60 == 0 && timer2 > 0) { 
     timer2 --;
   }
    characterLook = image(explosion,charLookX,charLookY)
  }
  
  if (timer2Set == true && timer2 <= 0){
    timer2Set = false
    frustration = 0
    explosion.reset()
  }
  
  if (timer2Set == false){
  
  if (frustration <= 0){
    frustration = 0
  }
  
  if (frustration <= 274 && playState <= 0){
   characterLook = image(angryBottle,charLookX,charLookY)
    timer = false
  }
  
  if (frustration >= 276 && playState <= 0){
    characterLook = image(fullBottle,charLookX,charLookY)
    timer = false
  }
  
  
  
  if (frustration == 275){
    characterLook = image(happyBottle,charLookX,charLookY)
  }
  if (frustration == 275 && timer == false){
    timer = true 
    timer1 = 3
  }
  
   if (timer1 >0 && timer == true){
   //textAlign(CENTER, CENTER);
   //textSize(100);
   text(timer1, width/2, height/2); 
   if (frameCount % 60 == 0 && timer1 > 0) { 
     timer1 --;
   }
  }
  
   if (timer1 == 0 && timer == true) {
     timer1 = 0
     image(confetti,charLookX,charLookY)
   }
  
  frustration = frustration + frustrationAmount
  if (water == 1){
    image(waterRefill,charLookX,charLookY)
  }
  if(playState>=1)
    { 
    characterLook = image(BottleGif,charLookX,charLookY)
    }
   strokeWeight(5)
   stroke(20)
   fill('white')
   textSize(30);
   text('Tap to fill the water bottle.',20,650);
   text('Shake to empty it.',20,675);
   text('Keep doing this until its happy!',20,700);
  }
} 

function deviceShaken() {
  if (window.sensorsEnabled) {
    playState = playState + 2;
    frustration = frustration - 1
  }
}

function touchStarted(){
  if (window.sensorsEnabled){
    water = 1 
    frustrationAmount = 1
  }
  return false;
}

function touchEnded(){
  water = 0
  frustrationAmount = 0
  return false;
}