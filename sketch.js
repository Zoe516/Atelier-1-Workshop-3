let Bottle;
let BottleGif;
let value;
let playState = 0;
let waterRefill;
let water = 0;
let frustration = 0;
let angryBottle;

function preload(){
  Bottle = loadImage('images/BOTTLE.01.png');
  BottleGif = loadImage('images/bottle.gif');
  waterRefill = loadImage('images/waterrefill.gif')
  angryBottle = loadImage('images/angry_bottle.gif')
}

function setup() {
  showDebug();
  createCanvas(windowWidth, windowHeight);
  enableGyroTap();
  lockGestures();
}

function draw() {
  background(220);
  if(playState>=1)
    { 
    image(BottleGif,0,0)
    }
  else if(playState <= 0)
    {
    image(Bottle,0,0) 
    }
  if (playState <= 0){
  playState = 0
  }
  if (playState >= 4){
    playState = 4
  }
  playState = playState - 1
  if (frustration >= 75){
    image(angryBottle,0,0)
  }
  if (frustration >= 100){
    frustration = 100
  }
  else if (frustration <= 0){
    frustration = 0
  }
  if (water == 1){
    image(waterRefill,0,0)
  }
  if (frustration <= 74){
    textSize(32);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text('Dont shake the bottle!', 15, 425);
  }
  if (frustration >= 75){
    textSize(32);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text(':(, now tap to make her feel better.', 15, 425);
  }
} 

function deviceShaken() {
  if (window.sensorsEnabled) {
    playState = playState + 2;
    frustration = frustration + 1
  }
}