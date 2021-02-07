var man , manImg;
var doctor , doctorImg ;
var clinic ;
var covid , covidImg ;


function preload(){
 manImg = loadImage ("boy.png") ;
 doctorImg = loadImage("download.jpg") ;
}
function setup() {
  createCanvas(800,400);
  man = createSprite(100, 200, 50, 50);
  man.addImage(manImg) ;
  man.scale = 0.1 ;

  clinic = createSprite(700,20,100,100) ;
  clinic.shapeColor = "white" ;

  doctor = createSprite(700,50,20,20) ;
  doctor.addImage(doctorImg) ;
  doctor.scale = 0.5 ;

}

function draw() {
  background(0);  

  spawnCovid() ;
  drawSprites();
}

function spawnCovid(){
  if(frameCount%60===0){
    covid = createSprite(800,380,20,20) ;
    covid.velocityX = -3 ;
  }
  

}