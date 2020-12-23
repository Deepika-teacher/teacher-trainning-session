const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;

var ground,box1,box2,box3,box4,box5,box6,box7,box7,box8,box9,ball1;
var rope;

var gameState="onLaunch";
var visibility=[];
var boxArray=[];
var boxX=[];
var boxY=[];

function preload(){
  backgroundImg=loadImage("backgroundImg.png");
}

function setup() {
  createCanvas(1600,800);
  myEngine=Engine.create();
  myWorld=myEngine.world;

  ground=new Ground(800,780,width,20);
   
  box1= new Box(800,310);
  box2= new Box(900,310);
  box3= new Box(1000,310);
  box4= new Box(800,410);
  box5= new Box(900,410);
  box6= new Box(1000,410);
  box7= new Box(800,510);
  box8 = new Box(900,510);
  box9 = new Box(1000,510);
  box10= new Box(800,610);
  box11= new Box(900,610);
  box12= new Box(1000,610);
  box13= new Box(800,710);
  box14= new Box(900,710);
  box15= new Box(1000,710);

  pushArray();
  
  for(var i=0;i<15;i++){
    boxX[i]=boxArray[i].body.position.x;
    boxY[i]=boxArray[i].body.position.y;
    visibility[i]=255;
  }
  
  ball=new Ball(400,200);

 rope=new Rope(ball.body,{ x: 400,y: 200});

}

function draw() {
  background(backgroundImg); 
  Engine.update(myEngine);
 
  ball.display();
  ground.display();
  rope.display();

  //Refreshing the box positions
  boxArray=[];
  pushArray();

  if(ball.body.speed<1 && gameState=="released"){
      gameState="end";
  }

  if(gameState==="end"){
    for(var i=0;i<15;i++){
      //Checking boxes displaced or not
      if(boxX[i]-boxArray[i].body.position.x>50 || boxY[i]-boxArray[i].body.position.y>50||
        boxX[i]-boxArray[i].body.position.x<-50 || boxY[i]-boxArray[i].body.position.y<-50){
        push();
        //Vanishing displaced boxes
        visibility[i] -= 5;
        tint(255,visibility[i]);
        boxArray[i].display();

         //Removing the  completely vanished boxes from world
         if(visibility[i]<0){
           World.remove(myWorld,boxArray[i]);
         }
        pop();
      }
      //Displaying boxes which are not displaced
      else{
        boxArray[i].display();
      }
    }
  }
  else{
    for(var i=0;i<15;i++){
      boxArray[i].display();
    }
  }
 
}

function mouseDragged(){
  Body.setPosition (ball.body,{x: mouseX, y:mouseY});
}

function mouseReleased(){
  rope.fly(ball.body);
  gameState="released";
}

function pushArray(){
  boxArray.push(box1);
  boxArray.push(box2);
  boxArray.push(box3);
  boxArray.push(box4);
  boxArray.push(box5);
  boxArray.push(box6);
  boxArray.push(box7);
  boxArray.push(box8);
  boxArray.push(box9);
  boxArray.push(box10);
  boxArray.push(box11);
  boxArray.push(box12);
  boxArray.push(box13);
  boxArray.push(box14);
  boxArray.push(box15);
}