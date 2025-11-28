let BottleGif;
let playState = 0;
let waterRefill;
let happyBottle;
let water = 0;
let frustration = 20;
let frustrationAmount = 0;
let angryBottle;
let park;
let beach;
let timer1 = 0;
let button;
let location1 = true;
let fullBottle;
let confetti;
let timer = false

let characterLook = {
  x: 0,
  y: 0,
}

let charLookX = 0;
let charLookY = 0;

function preload(){
  BottleGif = loadImage('images/bottle.gif');
  waterRefill = loadImage('images/waterrefill.gif');
  angryBottle = loadImage('images/angry_bottle.gif');
  park = loadImage('images/Park_stock.png');
  beach = loadImage('images/Better_beach_stock.jpg');
  happyBottle = loadImage('images/happy_bottle.png');
  fullBottle = loadImage('images/full_bottle.png');
  confetti = loadImage('images/confetti.gif');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  enableGyroTap();
  lockGestures();
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
  
  if (frustration >= 200){
    frustration = 200
  }
  
  else if (frustration <= 0){
    frustration = 0
  }
  
  if (frustration <= 149){
   characterLook = image(angryBottle,charLookX,charLookY)
  }
  
  if (frustration >= 151){
    characterLook = image(fullBottle,charLookX,charLookY)
  }
  
  if (frustration == 150){
    timer = true 
   characterLook = image(happyBottle,charLookX,charLookY)
   if (timer1 >0){
   textAlign(CENTER, CENTER);
   textSize(100);
   text(timer1, width/2, height/2); 
   if (frameCount % 60 == 0 && timer1 > 0) { 
     timer1 --;
   }
   if (timer1 == 0) {
     timer1 = 0
     image(confetti,charLookX,charLookY)
   }
  }
  }
  frustration = frustration + frustrationAmount
  if (water == 1){
    image(waterRefill,charLookX,charLookY)
  }
  if(playState>=1)
    { 
    characterLook = image(BottleGif,charLookX,charLookY)
    }
  else if(playState <= 0)
    {
   // image(angryBottle,charLookX,charLookY)
    }
   stroke(10)
   fill('cyan')
   textSize(20);
   text('Tap or Shake the water bottle',20,450);
   text('to fill or empty it',80,500);
   text('until its happy',90,550);
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
 if (timer == true){
    timer1 = 5
  }