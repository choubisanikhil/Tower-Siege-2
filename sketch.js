const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

function setup() {
  createCanvas(1000,480);

  engine = Engine.create();
  world = engine.world;

  box1  = new BlueBox(600,440,20,30);
  box2  = new YellowBox(620,440,20,30);
  box3  = new GreenBox(640,440,20,30);
  box4  = new RedBox(660,440,20,30);
  box5  = new GreenBox(680,440,20,30);
  box6  = new YellowBox(700,440,20,30);
  box7  = new RedBox(610,400,20,30);
  box8  = new YellowBox(630,400,20,30);
  box9  = new BlueBox(650,400,20,30);
  box10 = new GreenBox(670,400,20,30);
  box11 = new RedBox(690,400,20,30);
  box12 = new YellowBox(620,370,20,30);
  box13 = new BlueBox(640,370,20,30);
  box14 = new RedBox(660,370,20,30);
  box15 = new GreenBox(680,370,20,30);
  box16 = new YellowBox(630,340,20,30);
  box17 = new RedBox(650,340,20,30);
  box18 = new GreenBox(670,340,20,30);
  box19 = new BlueBox(640,310,20,30);
  box20 = new RedBox(660,310,20,30);
  box21 = new GreenBox(650,280,20,30);

  box22 = new GreenBox(600,135,20,30);
  box23 = new BlueBox(620,135,20,30);
  box24 = new YellowBox(640,135,20,30);
  box25 = new RedBox(660,135,20,30);
  box26 = new GreenBox(680,135,20,30);
  box27 = new YellowBox(700,135,20,30);
  box28 = new BlueBox(610,105,20,30);
  box29 = new RedBox(630,105,20,30);
  box30 = new YellowBox(650,105,20,30);
  box31 = new GreenBox(670,105,20,30);
  box32 = new RedBox(690,105,20,30);
  box33 = new YellowBox(620,75,20,30);
  box34 = new BlueBox(640,75,20,30);
  box35 = new RedBox(660,75,20,30);
  box36 = new GreenBox(680,75,20,30);
  box37 = new YellowBox(630,45,20,30);
  box38 = new BlueBox(650,45,20,30);
  box39 = new GreenBox(670,45,20,30);

  ball = new Ball(0,0,50);

  spring = new Projectile(ball.body,{x:200,y:200});

  ground = new Platform(500,450,1000,20);

  groundHovering = new Platform(650,160,150,20);
  
}

function draw() {
  background("orange");
  Engine.update(engine);  

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
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();
  box37.display();
  box38.display();
  box39.display();

  ball.display();
  spring.display();
  ground.display();
  groundHovering.display();
   
  textSize(23);
  fill("Black");
  text("Drag The Ball And Release It,", 10, 30);
  
  textSize(23);
  fill("Black");
  text("To Launch It Towards The Block", 10, 70);

  textSize(20);
  fill("Black");
  text("Press 'Space' To Play Second Chance", 10, 430); 
  
} 

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  spring.release();
}

function keyPressed(){
  if(keyCode === 32){
    spring.attach(ball.body);
  }
}