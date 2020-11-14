const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, ground, box2;

function setup(){
    createCanvas(400,400);
    engine=Engine.create();
    world=engine.world;

    box1=new Box(180,200,50,100);
    box2=new Box(200,250,40,40);
    ground=new Ground(200,380,400,20);
    
}

function draw(){
    background("yellow");
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
}