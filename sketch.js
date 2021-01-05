var canvas;
var music;
var surface1,surface2,surface3,surface4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(900,750);
    surface1=createSprite(100,520,150,50);
    surface1.shapeColor = "blue";
    surface2=createSprite(300,520,150,50);
    surface2.shapeColor = "orange";
    surface3=createSprite(500,520,150,50);
    surface3.shapeColor = "brown";
    surface4=createSprite(700,520,150,50);
    surface4.shapeColor = "green";
  //create box sprite and give velocity
 ball=createSprite(random(20,550),1,50);
 ball.shapeColor="white"
 ball.velocityY=4;
}

function draw() {
    background(rgb(169,169,169));
   
    //create edgeSprite
createEdgeSprites();
if(surface1.isTouching(ball)){
    ball.shapeColor="blue";
    ball.velocityY=0;
}
if(surface2.isTouching(ball)){
    ball.shapeColor="orange";
    ball.velocityY=0;
}
if(surface3.isTouching(ball)){
    ball.shapeColor="brown";
    ball.velocityY=0;
}
if(surface4.isTouching(ball)){
    ball.shapeColor="green";
    ball.velocityY=0;
}

drawSprites();
    //add condition to check if box touching surface and make it box
}
