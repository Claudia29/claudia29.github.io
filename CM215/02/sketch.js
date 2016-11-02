var ballSize;
var vX, vY;
var pX, pY, pX1,pX2, pY1, pY2, pX3, pY3;
var aX, aY;
var f;
function setup() {
 createCanvas(windowWidth,windowHeight);
 ellipseMode(CENTER);
 ballSize = 50;
pX = windowWidth/2;
 pY = windowHeight/2;
 pX1 = windowWidth/2 - 50;
 pY1 = windowHeight/2;
 pX2 = windowWidth/2 + 50;
 pY2 = windowHeight/2;
 pX3 = windowWidth/2 ;
 pY3 = windowHeight/2 + 50;
 vX = 0;
 vY = 0;
 f = 0.01;
 
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
 
 aY = rotationX  * f;
 vY += aY;
 pY += vY;

 if (pX + ballSize/2 >= windowWidth || pX - ballSize/2 <= 0  ){
   vX = -vX;
 }
 
 if (pY + ballSize/2 > windowHeight || pY - ballSize/2 < 0  ){
   vY = -vY;
 }
 
}

function drawBall(){
  fill(125);
  ellipse(pX, pY, ballSize,ballSize);
  fill(255,0,0);
  ellipse(pX1, pY1, ballSize,ballSize);
  fill(0,0,255);
  ellipse(pX2, pY2, ballSize,ballSize);
  fill(0,255,0);
  ellipse(pX3, pY3, ballSize,ballSize);
}