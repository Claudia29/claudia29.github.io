var ballSize;
var vY, vY;
var pX, pY;
var aY, aY;
var f;
function setup() {
 createCanvas(windowWidth,windowHeight);
 ellipseMode(CENTER);
 ballSize = 50;
pX = windowWidth/2;
 pY = windowHeight/2;
 vX = 0;
 vY = 0;
 f = 0.00001;
 
}

function draw() {
  
 background(255);
 drawBall();
 textSize(40);
 text("Rx: " + floor(rotationX), 100, 100);
 text("Ry: " + floor(rotationY), 100, 150);
 text("Rz: " + floor(rotationZ), 100, 200);
 
 aX = rotationY * f;
 vX += aX;
 pX += vX;
 
 aY = rotationX;
 vY += aY;
 pY += vY;

 if ((pX + ballSize/2) >= windowWidth ||(pX + ballSize/2) <= 0  ){
   vX = -vX;
 }
 
 
 
}

function drawBall(){
  fill(125);
  ellipse(pX, pY, ballSize,ballSize);
  
}