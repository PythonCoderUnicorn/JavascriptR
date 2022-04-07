

// this Javascript is for p5.js code  

// boolean
var on = false;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  //background(0);
  
  if(on){ 
    background(0, 102, 204)
  }
  else {
    background(102)
  }
  
  if (mouseIsPressed){
    background(122, 0, 153) // r g b
  }
  
  
  stroke(255)
  strokeWeight(3)
  noFill()
  rect(200,150,100,100)
  
  
}

function mousePressed(){
  if(mouseX > 250 && mouseX < 250){
    if (on) {
      on = false;
    }
    on = !on
  }
  
}

