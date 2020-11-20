function setup() {
  createCanvas(600, 600, WEBGL);
  
}

function draw() {
   rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
  let value;
  if (mouseIsPressed) {
    value = 1;
  } else {
    value = 0;
    fill(240);
  }
  if(keyIsPressed){
    background(255)
    
  }
  background(255)
  
  push();
  if(value==0){
    line(-600, 0, 600, 0);
    line(0, -600, 0, 600); 
    line(0,0, -600, 0,0,600);

  }else{
    
  }
  
  stroke(126);
  translate(mouseX-300, mouseY-300);
  box(100);
  pop();
  
 // ellipse(mouseX, mouseY, 40, 40);
}


