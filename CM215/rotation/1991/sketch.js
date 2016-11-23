var ballSize, AX, VX, PX, F, obstacle, obstacle1, obstacle2, opX, opY, op1X, op2Y, op1X, op2Y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  ballSize = 20;
  obstacle = 50;
  opX = random(5, windowWidth);
  opY = random(5, windowHeight)

  obstacle1 = 50;
  op1X = random(5, windowWidth);
  op1Y = random(5, windowHeight)

  obstacle2 = 50;
  op2X = random(5, windowWidth);
  op2Y = random(5, windowHeight)


  PX = windowWidth / 2;
  VX = 0;
  F = 0.01;

}

function draw() {
  background(250);

  AX = (rotationY * F);
  VX += AX;
  PX += VX;
  if (PX >= windowWidth) {
    VX = -VX;
    VX = -VX;
  }
  if (PX >= windowWidth || PX <= 0) {
    VX = -VX;
  }
  drawBall();
  bomaye();

  textSize(45);

  text("Rx: " + floor(rotationX), 100, 100);
  text("Ry: " + floor(rotationY), 100, 150);
  text("Rz: " + floor(rotationZ), 100, 200);




}

function drawBall() {
  fill(100);
  ellipse(PX, windowHeight / 2, ballSize, ballSize);
}

function bomaye() {
  fill(97, 0, 250);
  ellipse(opX, opY, obstacle, obstacle);

  fill(255, 255, 60);
  ellipse(op1X, op1Y, obstacle1, obstacle1);

  fill(200);
  ellipse(op2X, op2Y, obstacle2, obstacle2);
}