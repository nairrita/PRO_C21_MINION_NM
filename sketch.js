
function setup(){
  createCanvas (500,200);
}

function draw(){
  background("blue");
  
minion(110,110);
minion(180,110);
minion(300,110)
minion(370,110);

}


function minion(x,y){
  push();
  translate(x,y);
  stroke("yellow");
  strokeWeight(70);
  line(0,-35,0,-65);
  noStroke();
  fill(255);
  ellipse(-17.5,-65,35,35);
  ellipse(17.5,-65,35,35);
  arc(0,-65,70,70,0,PI);
  fill("black");
  ellipse(-14,-65,8,8);
  ellipse(14,-65,8,8);
  fill("red");
  rect(-15,-30,30,10)
  pop();

}