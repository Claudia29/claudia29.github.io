var ballSize;
var vX, vY;
var pX, pY;
var aX, aY;
var f;
var R, ri;
var score;
var obstacles = [];
function setup() {
 createCanvas(windowWidth,windowHeight);
 ellipseMode(CENTER);
 ballSize = 50;
pX = windowWidth/2;
 pY = windowHeight/2;
 /*pX1 =random(10,windowWidth);
 pY1 = random(10,windowHeight);
 pX2 = random(10,windowWidth);
 pY2 = random(10,windowHeight);
 pX3 = random(10,windowWidth);
 pY3 = random(10,windowHeight);*/
 vX = 0;
 vY = 0;
 f = 0.01;
 R = ballSize/2;
 /*r1 = (ballSize/2)/2;
 r2 = (ballSize/2)/2;
 r3 = (ballSize/2)/2;*/
 score = 0;
 for (var i=0;i<3; i++){
  obstacles[i] = new Obstacle("malus");
  }
}

function draw() {
  
 background(255);
 drawBall();
 textSize(40);
 text("Rx: " + floor(rotationX), 100, 100);
 text("Ry: " + floor(rotationY), 100, 150);
 //text("Rz: " + floor(rotationZ), 100, 200);
 text("Score:" + score, 100, 200);
 //text(score, 100, 200);
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
 
if (dist(pX,pY, this.xPos,this.yPos) <= (R + this.rayon)) {
   //text("s!", width / 2, height / 2, 200, 50);
   score += 10;
 }
 
 /*if(dist(pX,pY, pX2,pY2) <= (R + r2)){
   //text("GA!", width / 2, height / 2, 200, 50);
   score += -10;
 }
 if(dist(pX,pY, pX3,pY3) <= (R + r3)){
   //text("GAME!", width / 2, height / 2, 200, 50);
   score += 1;
 }*/
 
}

function drawBall(){
  fill(125);
  ellipse(pX, pY, ballSize,ballSize);
  /*fill(0,255,0);
  ellipse(pX1, pY1, ballSize/2,ballSize/2);
  fill(255,255,0);
  ellipse(pX2, pY2, ballSize/2,ballSize/2);
  fill(255,0,0);
  ellipse(pX3, pY3, ballSize/2,ballSize/2);*/
  
  for (var i=0;i<3; i++){
  obstacles[i].display();
  }
}

function Obstacle(kind){
 this.type = kind;
 this.xPos = random(0,windowWidth);
 this.yPos = random(0,windowHeight);
 this.size = random(20,50);
 this.color = color(random(0,255),random(0,255),random(0,255));
 this.rayon = random(20,50)/2;
 
 this.display = function(){
   fill(this.color);
   ellipse(this.xPos,this.yPos,this.size,this.size);
 }
}