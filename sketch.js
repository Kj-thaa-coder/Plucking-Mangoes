const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint

var rock
var boy
var tree
var sling
var ground


var mango1
var mango2
var mango3
var mango4
var mango5
var mango6
var mango7
var mango8
var mango9
var mango10
var mango11
var mango12




function preload()
{
	
}

function setup() {
	createCanvas(1500, 720);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango1 = new Mango(700,300,10)
	mango2 = new Mango(800,200,10)
	mango3 = new Mango(1100,200,10)
	mango4 = new Mango(1200,300,10)
	mango5 = new Mango(900,300,10)
	mango6 = new Mango(1000,100,10)
	mango7 = new Mango(800,300,10)
	mango8 = new Mango(1300,200,10)
	mango9 = new Mango(1000,100,10)
	mango10= new Mango(900,200,10)
	mango11= new Mango(800,100,10)
	mango12= new Mango(1200,100,10)
	ground = new Ground(750,715,1500,70)
	rock = new Rock(100,500,5)
	boy = new Boy(260,600,50,50)
	tree = new Tree(1000,350) 
	sling = new SlingShot(rock.body,{x:130,y:490})



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");



  ground.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  boy.display();
  rock.display();
  sling.display();
  
  
 collision(rock, mango1)
 collision(rock, mango2)
 collision(rock, mango3)
 collision(rock, mango4)
 collision(rock, mango5)
 collision(rock, mango6)
 collision(rock, mango7)
 collision(rock, mango8)
 collision(rock, mango9)
 collision(rock, mango10)
 collision(rock, mango11)
 collision(rock, mango12)


textSize(40)
 strokeWeight(3);
 stroke(1);
 fill(255);
 text('Press Space To Play Again!!!', 235, 100);


 
}


function mouseDragged(){      
	Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY})
	}
	
	
	function mouseReleased(){
	sling.fly()
	}


	function collision(a,b){
		var d = dist(a.body.position.x,a.body.position.y,b.body.position.x,b.body.position.y)
		if(d <= 50){
			Body.setStatic(b.body,false);
		}
	}



	

	function keyPressed(){
		if (keyCode === 32){
			Matter.Body.setPosition(rock.body, {x:100, y:500})
			sling.attach(rock.body)
		}
	}
