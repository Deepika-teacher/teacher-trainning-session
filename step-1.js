const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

function setup() {
  createCanvas(800,400);
  myEngine=Engine.create();
  myWorld=myEngine.world;

  ground=Bodies.rectangle(400,390,800,20,{isStatic:true});
  World.add(myWorld,ground);
  Body.setStatic(ground,true);

  ball=Bodies.circle(100,100,25);
  World.add(myWorld,ball);
  Body.setStatic(ball,true);

}

function draw() {
  background(255,255,255); 
  Engine.update(myEngine);
  fill("red");
  ellipse(ball.position.x,ball.position.y,50,50); 
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1600,20);
  drawSprites();
}