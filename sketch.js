
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var player

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
	player.scale = 0.3
	player.debug = true
	player.setCollider("rectangle",0,0,300,300)
   
   
   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  if(keyDown("UP_ARROW")||touches.length>0){
	player.y = player.y-30
  }
  if(keyDown("DOWN_ARROW")||touches.length>0){
   player.y = player.y+30
  }
  
 
}



