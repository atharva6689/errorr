const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var ball2,wall;

function setup() {
  createCanvas(400,400);
  engine= Engine.create();
  world= engine.world;
  
   
  var options= {
    restitution:0.95,
    frictionAir:0.01
  }
  ball=Bodies.circle(100,10,20,options);
  World.add(world,ball);
  
  var b2_opt= {
    restitution:0.85,
    frictionAir:0.01
  }

  ball2=Bodies.circle(230,10,20,b2_opt);
  World.add(world,ball2);

  var g_options = {
  isStatic:true
  }
   
  ground= Bodies.rectangle(200,380,400,20,g_options);
  World.add(world,ground);

  wall = Bodies.rectangle(300,200,200,10,g_options);
  World.add(world,wall);

  rectMode(CENTER);
  ellipseMode(CENTER);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);

  ellipse(ball2.position.x,ball2.position.y,20);  
  rect(wall.position.x,wall.position.y,200,20);
}