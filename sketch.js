//The setup function only happens once
var cat= 0;

function setup() {
	createCanvas(1450, 1000); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(mouseY,157,12); //an RGB color for the canvas' background
  //circle
  stroke(1,72,148); 
  strokeWeight(4);
  fill(12,126,247); 
  ellipse(cat,100,75,cat);
  ellipse(cat,100,75,cat); 
  ellipse(50,150,cat,75); 
  ellipse(50,200,75,cat); 
  ellipse(50,250,cat,75); 
  ellipse(50,300,75,cat); 
  ellipse(random(width),random(height),5,5)
  

stroke(232,227,231);
strokeWeight(1);
fill(143,cat,140);
triangle(700,500,240,50,175,200);

  stroke(116,148,cat);
  strokeWeight(5);
  fill(148,1,23);
  rect(750,350,cat,1000);

  fill(90,83,cat);
  textSize(150);
  textFont("Helvetica");
  text('megan',300,300);
}

function mousePressed () {

if(cat >= 250) 
{cat=0;

} else {
  cat=cat+2000;
}

  cat= cat+100;
}

