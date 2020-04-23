var wall,car;
var weight,speed;
var deform;


 

function setup() {
    createCanvas(1368,400);
   wall =  createSprite(1268, 200, 20, 400);
   wall.shapeColor = (80,80,80);
   weight = random(400,1500);
   speed = random(30,125);
   car = new Car(weight,speed)
   car.sprite.shapeColor = "white";
   
   
   
}

function draw() {
  background("black");
  
  
if(car.sprite.collide(wall)){
 deform =  car.calculateDeformValue();
console.log(deform);
}
if(deform > 180){
  car.sprite.shapeColor = "red"
}
if(deform < 80){
  car.sprite.shapeColor = "green"
}
if(deform > 80 && deform < 180){
  car.sprite.shapeColor = "yellow"
}
  
  
  
 
  
  
  drawSprites();
}

