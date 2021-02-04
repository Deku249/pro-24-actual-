
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper,bin1,bin2,bin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground (400,690,800,50)
	paper = new Paper (100,600,50,50) 

	bin1 = new Bin(390,600,20,100)
	bin2 = new Bin(450,660,100,20)
	bin3 = new Bin(510,600,20,100)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  paper.display();

  bin1.display();
  bin2.display();
  bin3.display();
  
  drawSprites();
 
}

function keyPressed()
{
  keyCode=== UP_ARROW
  {
    Matter.Body.applyForce(paper.body,paper.body.postion,{x:300,y:-250})

  }
}


