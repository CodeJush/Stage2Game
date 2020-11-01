
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint= Matter.Constraint;

var child, childFriend,childImg;
var ground,racket;
var parent;

function preload(){

//childImg= loadImage("images/tennisboi.png");


}

function setup() {
	createCanvas(displayWidth-5, displayHeight-150);
	

	engine = Engine.create();
	world = engine.world;

	
	child= new PlayingCharacter(300,600);
	ground= new Ground(displayWidth/2,displayHeight-500, displayWidth-10,displayHeight-10);
	childFriend= new NonPlayingCharacter(700,300,120,130);
	parent= new NonPlayingCharacter(300,100,200,100);
	racket=new Racket(child.body,{x: 100, y:400});

Engine.run(engine);
  
}


function draw() {
  background(255);
  
  ground.display();
 child.display();



 racket.display();
 
 childFriend.display();
 parent.display();
 
  drawSprites();
 
}



