var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var packageHold;
var leftBox , rightBox , bottomBox ;
var leftBoxBody , rightBoxBody , bottomBoxBody ;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageHold = "held"
	
	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 80, 200,200);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

leftBox = createSprite(300,600,20,100);
leftBox.shapeColor = "red";
leftBoxBody = Bodies.rectangle(300,610,20,100,{isStatic:true});
World.add(world,leftBoxBody)

rightBox = createSprite(450,600,20,100);
rightBox.shapeColor = "red";
rightBoxBody = Bodies.rectangle(600,660,20,100,{isStatic:true});
World.add(world,leftBoxBody)

bottomBox = createSprite(375,650,150,20);
bottomBox.shapeColor = "red";
bottomBoxBody = Bodies.rectangle(375,630,150,20,{isStatic:true});
World.add(world,bottomBoxBody)

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4,isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}

function draw() {

	

  rectMode(CENTER);
  background(0);
  keyPressed();
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
  /*if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	
	matter.body.setStatic(packageBody , false)  
 
}*/
packageSprite.display();
helicopterSprite.display();

function keyPressed() {

	if(keyCode === DOWN_ARROW){

Matter.Body.setStatic(packageBody,false)


	}
 
  }
}



