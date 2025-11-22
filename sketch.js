let Bottle;
let BottleGif;
let value;
let playState = 0;
let waterRefill;
let water = 0;
let frustration = 20;
let frustrationAmount = 0;
let angryBottle;
let park;
let beach;
let timer2 = 0;
let timer1 = 5;
let button;
let button1;
let button2;
let button3;
let location1 = true;

/* create classes in different sketch.js's because that will make it 
so much easier to manage and keep track of everything. storing the talking
function, locations, and interactions in different files*/
/*interactions I need to work on: conversational bubbles,singing 
first location and second location, second location is water tower:
writing on notepad 
*/

function preload(){
  Bottle = loadImage('images/BOTTLE.01.png');
  BottleGif = loadImage('images/bottle.gif');
  waterRefill = loadImage('images/waterrefill.gif');
  angryBottle = loadImage('images/angry_bottle.gif');
  park = loadImage('images/Park_stock.png');
  beach = loadImage('images/Better_beach_stock.jpg');
}

function setup() {
 // showDebug();
  createCanvas(windowWidth, windowHeight);
  enableGyroTap();
  lockGestures();
 // loadValuesFromStorage();
}

function draw() {
  background(220);
  if(location1 == true){
    image(park,0,0,width,height)
  }
  else if(location1 == false){
    image(beach,0,0,width,height) 
  }
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
  if (window.sensorsEnabled && timer1 >0){
   textAlign(CENTER, CENTER);
   textSize(100);
   text(timer1, width/2, height/2); 
   if (frameCount % 60 == 0 && timer1 > 0) { 
     timer1 --;
   }
   if (timer1 == 0) {
     location1 = false 
     timer2 = 10
   }
  }
   if (window.sensorsEnabled && timer2 >0){
   textAlign(CENTER, CENTER);
   textSize(100);
   text(timer2, width/2, height/2); 
   if (frameCount % 60 == 0 && timer2 > 0) { 
     timer2 --;
   }
   if (timer2 == 0) {
     timer2 = 0
   }
  }
  textAlign(CENTER, CENTER);
  textSize(100);
  text(frustration, 400, 100); 
  
  button = createButton('talk');
  button.touchStarted(startConversation);
  
 /* if (speech == true){
    startConversation()
  }
*/
  frustration = frustration - frustrationAmount
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
    frustrationAmount = 1
  }
}

function touchEnded(){
  water = 0
}

function startConversation(){
  button1 = createButton('What do you like to do?')
  button1.touchStarted(one)
  
  if (one){
    textSize(32);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text('I love to go surfing! Its my favourite thing to do. The ocean is the most magnificent place to be. The clear blue water, the seaweed and coral reefs give me great peace!', 15, 425);
  }
  button2 = createButton()
}