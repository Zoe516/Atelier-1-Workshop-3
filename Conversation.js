function Setup(){

}

function Draw(){
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