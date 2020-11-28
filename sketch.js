const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,dustbin2,dustbin3,ground,paper;

function setup() {
	createCanvas(1200,700);


	engine = Engine.create();
	world = engine.world;

	dustbin1 = new Dustbin(985,630,20,100);
	dustbin2 = new Dustbin(1165,630,20,100);
	dustbin3 = new Dustbin(1075,680,200,20);
	ground = new Ground(600,690,1200,20);
	paper = new Paper(50,600,20)

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  paper.display();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
   Matter.Body.applyForce(paper.body,paper.body.position,{x:0.5,y:-0.5});
  }
}