var ballSize;
var Vx;
var Px, Py;
var Ax, Ay;
var F;
function setup() {
 createCanvas(windowWidth,windowHeight);
 ellipseMode(CENTER);
 ballSize = 50;
 Px = windowWidth/2;
 Vx = 0;
 F = 0,01;
 
}

function draw() {
  
 background(255);
 drawBall();
 textSize(40);
 text("Rx: " + floor(rotationX), 100, 100);
 text("Ry: " + floor(rotationY), 100, 150);
 text("Rz: " + floor(rotationZ), 100, 200);
 
 Ax = rotationY * F;
 Vx = Vx + Ax;
 Px = Px + Vx;
 ellipse(Px, ballSize,ballSize);
 
 

 
 
 
}

function drawBall(){
  fill(125);
  ellipse(windowWidth/2, rotationX+windowHeight/2, ballSize,ballSize);
  
}