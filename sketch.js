let Bottle;
let BottleGif;
let value;
let playState = 0;

function preload(){
  Bottle = loadImage('images/BOTTLE.01.png',0,0,width/18000,height/18000);
  BottleGif = loadImage('images/bottle.gif');
}

function setup() {
  showDebug();
  createCanvas(windowWidth, windowHeight);
  // Enable device sensors in p5-phone
  enableGyroTap();  // Enables accelerometer/gyro
  lockGestures();
  
  // Note: User must grant permission on first interaction
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
} 

function deviceShaken() {
  if (window.sensorsEnabled) {
    playState = playState + 2;
  }
}