
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var angle=60;

var ground;

//Complete o código da linha 14, adicionando a fan2 e fan3 para os retângulos na tela
var fan,fan1,???,???;
var ball;

var btn1;
var btn2;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
  }
   
  var ground_options ={
    isStatic: true
  };
  ground = Bodies.rectangle(0,400,400,20,ground_options);
 World.add(world,ground); 
  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);  
  
  //Na linha 40, está sendo criado um novo objeto da classe Ground com as características definidas na linha 3 do arquivo 'ground.js'
 fan = new Ground(50,370,50,30);
 fan1 = new Ground(150,370,50,30);
 //Complete a linha 43 e 44 com 'new Ground'
  fan2 = ????(250,370,50,30);
  fan3 = ???? (350,370,50,30);

  ball = Bodies.circle(200,200,20,ball_options);
  World.add(world,ball);

    rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
 rect(ground.position.x,ground.position.y,750,20);
    fan.show();
fan1.show();
fan2.show();
  fan3.show();
 
  Engine.update(engine);
}


function vForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});
}
  


