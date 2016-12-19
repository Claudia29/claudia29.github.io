var ballSize;
var vX, vY;
var pX, pY;
var aX, aY;
var f;
var R;
var bN;
var score, timer, img, imgBalle, imgObst;
var obstacles = [];
var level;
var scoreLevel =[0,30,60];

function preload() {
  img = loadImage("ocean.png");
  imgBalle = loadImage("Bulle.png");
  imgObst = loadImage("bulle1.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  imgBalle = loadImage("Bulle.png");
  imgObst = loadImage("bulle1.png");
  ballSize = 50;
  pX = windowWidth / 2;
  pY = windowHeight / 2;
  vX = 0;
  vY = 0;
  f = 0.01;
  R = ballSize / 2;
  score = 0;
  timer = 1800;
  bN = 0.8;

level = 1;
  newObstacles(level);
}

function draw() {
  background(img, width / 2, height / 2);

  drawBall();
  displayTimer();
  displayScore();
  colision();
  newLevel();

}
function newLevel(){
  if(score >= scoreLevel[level]){
    level++;
    newObstacles(level);
  }
}
/* ******************************************** */
function newObstacles(newLevel) {
  var toto = 0;
  for (var i = 0; i < 3*newLevel; i++) {
    if (toto === 0) {
      obstacles[i] = new Obstacle("bonus");
      toto++;
    } else if (toto == 1) {
      obstacles[i] = new Obstacle("malus");
      toto++;
    } else if (toto == 2) {
      obstacles[i] = new Obstacle("neutre");
      toto = 0;
    }
  }
}
/* ******************************************** */

function colision() {

  for (var i = 0; i < 3; i++) {

    if (dist(pX, pY, obstacles[i].xPos, obstacles[i].yPos) <= (R + obstacles[i].radius)) {

      if (obstacles[i].colision === false) {
        obstacles[i].colision = true;
        score += obstacles[i].valeur;
      }

    } else {
      obstacles[i].colision = false;

    }
    obstacles[i].display();
  }
}

function drawBall() {
  //fill(125);
  //ellipse(pX, pY, ballSize, ballSize);
  image(imgBalle, pX, pY, ballSize, ballSize);
  aX = rotationY * f;
  vX += aX;
  pX += vX;

  aY = rotationX * f;
  vY += aY;
  pY += vY;

  if (pX + R > windowWidth) {
    vX = -vX * bN;
    pX = windowWidth - R;
  } else if (pX - R <= 0) {
    vX = -vX * bN;
    pX = R;
  }

  if (pY + R > windowHeight) {
    vY = -vY * bN;
    pY = windowHeight - R;
  } else if (pY - R < 0) {
    vY = -vY * bN;
    pY = R;
  }


}

function displayScore() {
  textSize(10);

  fill(255, 0, 0);
  text("Score:" + level + "/" + score, windowWidth / 2, 30);
}

function displayTimer() {
  fill(255);
  ellipse(windowWidth / 2 + 110, 22, 30, 30);
  noStroke();
  textSize(20);
  fill(0);
  text(int(timer / 60), width / 2 + 100, 30);


  if (timer <= 0) {
    obstacles[i] = false;

  }
  timer--;
}

function displayMessage() {
  fill(0, 200, 255);
  noStroke(0);
  //strokeWeight(5);
  rect(width / 2, height / 2, 400, 150, 10);
  fill(255);
  noStroke(0);
  textSize(30);
  text("GAME OVER!", width / 2, height / 2, 200, 50);

  rect(width / 2, height / 2 + 40, 200, 45, 10);
  fill(255, 125, 0);
  textSize(20);
  text("EAT AGAIN?", width / 2, height / 2 + 45, 200, 20);
}

function Obstacle(kind) {
  this.type = kind;
  this.xPos = random(0, windowWidth);
  this.yPos = random(0, windowHeight);
  this.size = random(20, 50);
  this.color = color(random(0, 255), random(0, 255), random(0, 255));
  this.radius = this.size / 2;
  this.colision = false;

  if (kind == "bonus") {
    this.valeur = 10;
  }

  if (kind == "malus") {
    this.valeur = -10;
  }

  if (kind == "neutre") {
    this.valeur = 0;
  }






this.display = function() {
  fill(this.color);
  //ellipse(this.xPos, this.yPos, this.size, this.size);
  image(imgObst, this.xPos, this.yPos, this.size, this.size);
}
}