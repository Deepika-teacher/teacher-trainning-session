const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

var ground,box1,box2,box3,box4,box5,box6,box7,box7,box8,box9,ball1;

function setup() {
  createCanvas(1600,800);
  myEngine=Engine.create();
  myWorld=myEngine.world;

  ground=new Ground(800,780);

  

  box1= new Box(800,500);
  box2= new Box(902,500);
  box3= new Box(1000,500);
  box4= new Box(805,400);
  box5= new Box(900,400);
  box6= new Box(1001,400);
  box7= new Box(805,300);
  box8= new Box(900,300);
  box9= new Box(1005,300);
  box10= new Box(805,200);
  box11= new Box(900,200);
  box12= new Box(1001,200);
  box13= new Box(805,100);
  box14= new Box(900,100);
  box15= new Box(1005,100);

  ball=new Ball(100,100);

}

function draw() {
  background(255,255,255); 
  Engine.update(myEngine);

  ball.display();
 
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  

}