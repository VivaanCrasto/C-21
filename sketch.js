var mrect,frect;





function setup() {
  createCanvas(800,400);
  frect = createSprite(400, 200, 50, 50);
  frect.shapeColor = "red";
  mrect = createSprite(200,200,80,30);
  mrect.shapeColor =  "red" ;
o1 = createSprite(100,200,50,50)
o1.shapeColor = "red"
o2 = createSprite(400,100,50,50)
o2.velocityY = 2
}

function draw() {
  background(255,255,255); 
mrect.x = World.mouseX;
mrect.y = World. mouseY;
if(istouching(o1,mrect)){
  o1.shapeColor = "blue"
  mrect.shapeColor = "blue"
}
else{
  o1.shapeColor = "red"
  mrect.shapeColor = "red"
  
} 
bounceOff(o2,frect)
drawSprites();
}
