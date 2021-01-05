const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bob1,bob2,bob3,bob4,bob5;
var sling1,sling2,sling3,sling4,sling5;
function setup(){
    createCanvas(windowWidth/2,windowHeight/1.5)
    engine=Engine.create();
    world=engine.world

    let canvasmouse=Mouse.create(canvas.elt);
    canvasmouse.pixelRatio=pixelDensity();
    let options={
        mouse:canvasmouse
    }

    mConstraint=MouseConstraint.create(engine,options)
    World.add(world,mConstraint);

    bob1=new Pendulum(200,300,"red");
    bob2=new Pendulum(250,300,"red");
    bob3=new Pendulum(300,300,"red");
    bob4=new Pendulum(350,300,"red");
    bob5=new Pendulum(400,300,"red");
}

function draw(){
    Engine.update(engine);
    drawSprites()
    bob1.dispaly();
    bob2.dispaly();
    bob3.dispaly();
    bob4.dispaly();
    bob5.dispaly();

}

function mouseDragged(){
    Matter.body.setPosition(pendulum1.body,{x:mouseX,y:mouseY});
}