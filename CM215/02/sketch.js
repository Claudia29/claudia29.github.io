var ballSize;
var vX, vY;
var pX, pY;
var aX, aY;
var f;
var R;
var bN;
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
 bN = 0.8;
 for (var i=0;i<3; i++){
   var typeObstacle = random(0,3);
   
   if (typeObstacle < 2){
      typeObstacle = "bonus";
   } else if (typeObstacle < 1){
     typeObstacle = "malus";
   } else{
     typeObstacle = "neutre";
   }
   obstacles[i] = new Obstacle(typeObstacle);
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
 

 if (pX + ballSize/2 >= windowWidth){
   vX = -vX * bN;
   pX = windowWidth - ballsize/2;
 } else if(pX - ballSize/2 <= 0){
   vX = -vX * bN;
   pX = ballSize/2;
 }
 aX = rotationY * f;
 vX += aX;
 pX += vX;
 
 if (pY + ballSize/2 > windowHeight){
   vY = -vY * bN;
   pY = windowHeight - ballsize/2;
 }else if(pY - ballSize/2 < 0){
   vY = -vY * bN;
   pY = ballSize/2;
 }
 aY = rotationX  * f;
 vY += aY;
 pY += vY;
 
  for (var i=0;i<3; i++){
    
    if (dist(pX,pY, obstacles[i].xPos,obstacles[i].yPos) <= (R + obstacles[i].radius)) {
      score += this.valeur;
    }
    obstacles[i].display();
  }
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
 this.radius = this.size/2;
 
 if(kind=="bonus"){
 this.valeur = 10;
 }
 
 if(kind=="malus"){
 this.valeur = -10;
 }
 
 if(kind=="neutre"){
 this.valeur = 2;
 }
 
 this.display = function(){    
   fill(this.color);
   ellipse(this.xPos,this.yPos,this.size,this.size);
 }
}