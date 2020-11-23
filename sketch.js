
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mango,tree,stone,boy,slingshot;

function preload()
{treeImg=loadImage("Plucking mangoes/tree.png")
  stoneImg=loadImage("Plucking mangoes/stone.png")
  boyImg=loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(800, 700);

tree=createSprite(200,400,50,100)
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
mango=new Mango(200,500,50,50);
tree=createSprite(600,300,50,100)
tree.addImage("tree", treeImg);
stone=new Stone(200,200,100,100);
stone.addImage("stone",stoneImg);
boy=createSprite(150,150,100,100);
boy.addImage("boy", boyImg);
slingshot=new Slingshot(stone.body,{x:200,y:200});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  stone.display();
  boy.display();
  mango.display();
  tree.display();
  slinshot.display();
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
  
  }
  function mouseReleased(){
      slingshot.fly();
  }





