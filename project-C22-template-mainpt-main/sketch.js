const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  var options={
    isStatic:true,


  }

  //criar corpo da base do jogador
  playerBase=Bodies.rectangle(width/9,height-300,100,100,options);
  World.add(world,playerBase);



  //criar corpo do jogador
  player=Bodies.rectangle(width/7.5,height-393,40,100,options);
  World.add(world,player);



}

function draw() {
  background(backgroundImg);

  //exibir a imagem do jogador usando a função image()
  push();
  image(playerimage,player.position.x,player.position.y,40,100);
  rectMode(CENTER);
  noStroke();
  pop();




  //exibir a imagem da base do jogador usando a função image()
  push();
  image(baseimage,playerBase.position.x,playerBase.position.y,100,100);
  rectMode(CENTER);
  noStroke();
  pop()


  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}
