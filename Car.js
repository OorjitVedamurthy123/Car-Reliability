class Car {
    constructor(weight,speed){
      this.x = 50;
      this.y = 200;  
      this.sprite = createSprite(this.x,this.y,20,20);
      this.weight = weight;
      this.speed = speed;
      this.sprite.velocityX = this.speed;
      this.sprite.shapeColor = color(255);
      this.deformValue = 0;
    }
    calculateDeformValue(){
  this.deformValue = (0.5 * this.weight * this.speed * this.speed )/ 22500;
  return this.deformValue;
    }
}