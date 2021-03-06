var bg, bgImg
var player, playerImg
var bullets
var bulletImg;
var laserSound
var score ;
var obstGroup,  obst1, obst2, obst3;
var jumpSound;

function preload(){
bgImg = loadImage("assets/Background.png")

playerImg = loadImage("./assets/C2.png") 
bulletImg = loadImage("./assets/Glenos-G_160_bullet.png");
laserSound = loadSound("./assets/laser-gun-19sf.mp3")
obst1 = loadImage("./assets/obst1.png");
obst2 = loadImage("./assets/obst22.png")
jumpSound = loadSound("./assets/jump.mp3");
obst3 = loadImage("./assets/output-onlineimagetools.png")
}

function setup(){
laserSound.setVolume(0.2);
jumpSound.setVolume(0.2);

createCanvas(1400, 700);
bg = createSprite(100,100,1,1);
bg.addImage(bgImg);
bg.scale = 2.0
bg.x =bg.width/2;
      
player = createSprite(200, 343, 10, 10);
player.addImage(playerImg)
player.scale = 0.2;
bulletGroup = new Group();
obstGroup = new Group();
score = 0;
}

function draw() {
  text("Score : " + score, 1350, 50);
  

  score = score + 0.05
  if(bg.x < 0){
    bg.x = bg.width/2;
  }
background('white');   
drawSprites();
if(keyWentDown("UP_ARROW")&&(player.y > 55)){
  player.velocityY=-12;
}
if(player.y < 280){
  player.velocityY = player.velocityY + 1;
}
if(player.y > 280){
  player.y = 280;
}  

spawnObstacles();
obst();

bg.velocityX = bg.velocityX - 0.007;
if(keyWentDown('SPACE')){
  bullet = createSprite(player.x, player.y+4,20,7.5);
  bullet.velocityX = 80
  bullet.addImage(bulletImg);
  bullet.scale = 0.05
  bulletGroup.add(bullet)
  player.depth = bullet.depth
  player.depth = player.depth+2
  laserSound.play();

  }
}



function spawnObstacles(){
  if (frameCount % 100 === 0){
    var obstacle = createSprite(1400,Math.round(random(280, 100)),10,40);
    obstacle.velocityX = bg.velocityX*0.5;
    
     //generate random obstacles
     var rand = Math.round(random(1,2));
     switch(rand) {
       case 1: obstacle.addImage(obst1);
               obstacle.scale = 0.5
               break;
       case 2: obstacle.addImage(obst2);
               obstacle.scale = 0.2
               break;
       default : break;
              }
              obstacle.lifetime = 1400;

            }
            //obstGroup.add(obstacle);
            
          }
function obst(){
  if (frameCount % 300 === 0){
    var obstacle1 = createSprite(1400,Math.round(random(280, 100)),10,40);
    obstacle1.velocityX = bg.velocityX*0.9;
    
     //generate random obstacles
     var rand = Math.round(random(1,1));
     switch(rand) {
       case 1: obstacle1.addImage(obst3);
               obstacle1.scale = 0.1
               break;
       default : break;
              }
              obstacle1.lifetime = 1400;

            }
            //obstGroup.add(obstacle);
}
                    
                  
                