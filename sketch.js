var car, carX, carW;
var wall, deformation;


function setup() {
  createCanvas(800,400);
  car = createSprite(150, 250, 50, 50);
  carX = random(55,90);
  car.velocityX = carX;
  carW = Math.round(random(400,1500))

  wall = createSprite(725,height/2,60,height/2)

  deformation = (0.5*carW*carX*carX)/22500

}

function draw() {
  background("skyBlue");
  //wall.debug = true;
  //car.debug = true;
  car.depth = wall.depth +2;
  if(wall.x - car.x < wall.width/2 + car.width/2 && car.x - wall.x < wall.width/2 + car.width/2 && wall.y - car.y < wall.height/2 + car.height/2 && car.y - wall.y < wall.height/2 + car.height/2){
    car.velocityX = 0;
    if(deformation <= 80){
      car.shapeColor = "green";
      car.velocityX = 0;
    }

    if(deformation > 80 && deformation <= 180){
      car.shapeColor = "yellow";
      car.velocityX = 0;
    }

    if(deformation >= 180){
      car.shapeColor = "red";
      car.velocityX = 0;
    }

  }
  console.log(deformation)

  
  drawSprites();
}