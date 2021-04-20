
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	gro1=new Ground(750,670)
      stone1=new Stone(235,420)
	boy=new Boy(235,530)
    tree = new Tree(600,300)
   m1=new Mango(500,250)
   m2=new Mango(600,160)
   m3=new Mango(500,170)
   m4=new Mango(600,50)
   m5=new Mango(700,170)
   m6=new Mango(700,50)
   slingshot=new SlingShot(this.stone1.body,{x:235,y:420})
}


function draw() {

  background("lightblue");
//  console(this.mouse.position.x,this.mouse.position.y)
  rectMode(CENTER);
	Engine.update(engine);
  //drawSprites();
 stone1.display();
 gro1.display();
 boy.display();
 tree.display();
 m1.display();
m2.display();
m3.display();
m4.display();
m5.display();
m6.display();
slingshot.display();
}
function mouseDragged() {
    Matter.Body.setPosition(this.stone1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingshot.fly()
    
}




