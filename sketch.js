var movingRec, fixedRec;
function setup() {
  createCanvas(800,400);
  fixedRec = createSprite(400, 200, 50, 50);
  movingRec = createSprite(200,100,40,40);

  movingRec.shapeColor = "red";
  fixedRec.shapeColor = "red";
}

function draw() {
  background(255,255,255);  
  drawSprites();
  movingRec.x = World.mouseX;
  movingRec.y = World.mouseY;

  console.log(movingRec.x - fixedRec.x );

  if(movingRec.x - fixedRec.x < movingRec.width/2 + fixedRec.width/2 && fixedRec.x - movingRec.x < movingRec.width/2 + fixedRec.width/2 && movingRec.y - fixedRec.y < movingRec.width/2 + fixedRec.width/2 && fixedRec.y - movingRec.y < movingRec.width/2 + fixedRec.width/2){
    movingRec.shapeColor = "blue";
    fixedRec.shapeColor = "blue";
  }

  else{
    movingRec.shapeColor = "red";
    fixedRec.shapeColor = "red";
  }
}