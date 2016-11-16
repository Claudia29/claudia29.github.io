var ballSize;
var vX, vY;
var pX, pY;
var aX, aY;
var f;
var R;
var score;
var obstacles = [];


function setup() {
 createCanvas(windowWidth,windowHeight);
 ellipseMode(CENTER);
 ballSize = 50;
pX = windowWidth/2;
 pY = windowHeight/2;
 vX = 0;
 vY = 0;
 f = 0.01;
 R = ballSize/2;
 score = 0;
 for (var i=0;i<3; i++){
   var typeObstacle = 3;
   if (typeObstacle < 2){
      typeObstacle = "bonus";
      this.valeur = 10;
   } else if (typeObstacle < 1){
     typeObstacle = "malus";
     this.valeur = -10;
   } else{
     typeObstacle = "neutre";
     this.valeur = 2;
   }
   obstacles[i] = new Obstacle("typeObstacle");
  }
}

function draw() {
  
 background(255);
 drawBall();
for (var i=0;i<3; i++){
   obstacles[i].display();
  }

 textSize(20);
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
 
if (dist(pX,pY, this.xPos,this.yPos) <= (R + this.radius)) {
   //text("s!", width / 2, height / 2, 200, 50);
   score += this.valeur;
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
  
 
}

function Obstacle(kind){
 this.type = kind;
 this.xPos = random(0,windowWidth);
 this.yPos = random(0,windowHeight);
 this.size = random(20,50);
 this.color = color(random(0,255),random(0,255),random(0,255));
 this.radius = 25;
 
 
 this.display = function(){
   fill(this.color);
   ellipse(this.xPos,this.yPos,this.size,this.size);
 }
}