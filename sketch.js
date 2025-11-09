let Bottle;
let BottleGif;
let value;
let playState = 0;

function preload(){
  Bottle = loadImage('images/BOTTLE.01.png');
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
  
  if(playState == 0)
    {
    image(Bottle,0,0)  
    }
  else if(playState>=1)
    {
    image(BottleGif,0,0)
    }
}

// p5-phone provides deviceShaken() callback
function deviceShaken() {
  
 
  // Only works if sensors are enabled
  if (window.sensorsEnabled) {
    playState = playState + 255;
    if (playState > 255) {
      debug.log('YESSSSS');
      
      }
  }
}