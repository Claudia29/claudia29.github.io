document.ontouchmove = function(event){
  event.preventDefault();
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  ellipseMode(CENTER);
  stroke(0);
  noFill();
  strokeWeight(5);
}

function draw() {
  background(255);
  
  for(var i=0;i<touches.length;i++){
    ellipse(touches[i].x,touches[i].y,150,150);
    
    fill(255,0,0);
    if((i+1)<touches.length){
    beginShape();
      vertex(touches[i].x,touches[i].y);
       endShape(CLOSE);
    }
  else{ 
         
    beginShape();
     vertex(touches[0].x,touches[0].y);
    endShape(CLOSE);
    }
 
   
   
  }
}

