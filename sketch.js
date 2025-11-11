let Bottle;
let BottleGif;
let value;
let playState = 0;
let waterRefill;
let water = 0;
let frustration = 0;

function preload(){
  Bottle = loadImage('images/BOTTLE.01.png',0,0);
  BottleGif = loadImage('images/bottle.gif');
  waterRefill = loadImage('images/waterrefill.gif')
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
  if (water == 1){
    image(waterRefill,0,0)
  }
  if (frustration == 10){
    //some kind of frustration interaction maybe a colour filter to show red anger. 
  }
} 
function deviceShaken() {
  if (window.sensorsEnabled) {
    playState = playState + 2;
    frustration = frustration + 1
  }
}
function touchStarted(){
  if (window.sensorsEnabled){
    water = 1 
  }
}
function touchEnded(){
  water = 0
}