var a,b;
function setup() {
  createCanvas(800,400);
  a= createSprite(200, 200, 50, 80);
  b= createSprite(400, 200, 80, 30);

}

function draw() 
{
  background("pink");  
  a.x=World.mouseX;
  a.y=World.mouseY;

 if(om(a,b))
 {
  a.shapeColor="black";
  b.shapeColor="black";
 }
 else{
  a.shapeColor="green";
  b.shapeColor="green";
 }



drawSprites();
}
