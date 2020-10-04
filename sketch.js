var sling1;
var hit;
var platform1, platform2, platform3;
var polygon;
var block1,block2,block3,block4,block5;
function setup() {
  createCanvas(800,400);
 
 
  hit = new Hit(400, 200, 50, 50);

 polygon = Bodies.circle(50,200,20);
 World.add(world,polygon);
 // sling1 = new SlingShot();




}

function draw() {
  background(255,255,255);  
  hit.display();
  drawSprites();
}