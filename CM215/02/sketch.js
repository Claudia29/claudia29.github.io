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
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  ballSize = 50;
  pX = windowWidth / 2;
  pY = windowHeight / 2;
  vX = 0;
  vY = 0;
  f = 0.01;
  R = ballSize / 2;
  score = 0;
  bN = 0.8;

  toto = 0;
  for (var i = 0; i < 3; i++) {
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

  function draw() {

    background(255);
    drawBall();

    textSize(40);
    //text("Rx: " + floor(rotationX), 100, 100);
    //text("Ry: " + floor(rotationY), 100, 150);
    //text("Rz: " + floor(rotationZ), 100, 200);
    fill(255, 0, 0);
    text("Score:" + score, windowWidth / 2, 30);
    //text(score, 100, 200);

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


    for (var i = 0; i < 3; i++) {

      if (dist(pX, pY, obstacles[i].xPos, obstacles[i].yPos) <= (R + obstacles[i].radius)) {
        
        if(obstacle[i].colision === false){
          obstacle[i].colision === true;
          score += obstacles[i].valeur;
        }
        
      }else{
        obstacle[i].colision === false;
      }
      obstacles[i].display();
    }
  }

  function drawBall() {
    fill(125);
    ellipse(pX, pY, ballSize, ballSize);


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
      this.valeur = 2;
    }

    this.display = function() {
      fill(this.color);
      ellipse(this.xPos, this.yPos, this.size, this.size);
    }
  }