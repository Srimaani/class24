const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var box1
var ground1
var engine,world
function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  
  box1=new box(200,200,50,50)
  ground1=new ground(400,380,800,20)
}

function draw() {
  background(255,255,255); 
  Engine.update(engine)
  box1.display()
  ground1.display()
}