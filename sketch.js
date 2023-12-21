var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg;
var zombieGroup;
var heart1, heart2, heart3;
var heart1Img, heart2Img, heart3Img;
var bullets = 70;
var gameState = "fight";


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  zombieImg = loadImage("assets/zombie.png")
  heart1Img = loadImage("assets/heart_1.png")
  heart2Img = loadImage("assets/heart_2.png")
  heart3Img = loadImage("assets/heart_3.png")
  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {
createCanvas(windowWidth,windowHeight);
bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 2.3
  


player = createSprite(displayWidth-1150, displayHeight-200, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.25



heart1 = createSprite(displayWidth-150, 40, 20, 20);
heart1.visible = false
heart1.addImage("heart1", heart1Img)
heart1.scale = 0.4

heart2 = createSprite(displayWidth-150, 40, 20, 20);
heart2.visible = false
heart2.addImage("heart2", heart2Img)
heart2.scale = 0.4

heart3 = createSprite(displayWidth-150, 40, 20, 20);
heart3.visible = true
heart3.addImage("heart3", heart3Img)
heart3.scale = 0.4



}
function draw() {
background(0); 
drawSprites();

}


