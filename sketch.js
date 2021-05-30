const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var superhero;
var box1;
var flag = 0;

function preload() {
//preload the images here
backgroundImg = loadImage("images/GamingBackground.png")

}

function setup() {
  createCanvas(4000, 1500);
  engine = Engine.create();
  world = engine.world;

  // create sprites here
superhero=new Superhero(200,250,250,60)
ground=new Ground(600,450,800,10)
ground2=new Ground(1300,1000,500,10)
enemy=new Enemy(900,200,100,200)




//block row 1
block1=new Block(600,200,50,50)
block2=new Block(600,200,50,50)
block3=new Block(600,200,50,50)
block4=new Block(600,200,50,50)
block5=new Block(600,200,50,50)
block6=new Block(600,200,50,50)

//block row 2
block7=new Block(660,200,50,50)
block8=new Block(660,200,50,50)
block9=new Block(660,200,50,50)
block10=new Block(660,200,50,50)
block11=new Block(660,200,50,50)
block12=new Block(660,200,50,50)
block13=new Block(660,200,50,50)
block14=new Block(660,400,50,50)

//block row 3
block15=new Block(720,200,50,50)
block16=new Block(720,200,50,50)
block17=new Block(720,200,50,50)
block18=new Block(720,200,50,50)
block19=new Block(720,200,50,50)
block20=new Block(720,200,50,50)
block21=new Block(720,200,50,50)

//block row 4
block22=new Block(780,200,50,50)
block23=new Block(780,200,50,50)
block24=new Block(780,200,50,50)
block25=new Block(780,200,50,50)
block26=new Block(780,200,50,50)




box1=new Box(200,250,10,10)
wing = new Wing(superhero.body,box1.body)
}

function draw() {
  

  Engine.update(engine);
  background("sky blue")
  background(backgroundImg);

superhero.display();
ground.display();
enemy.display();
ground2.display();

  //block row 1
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();

  //block row 2
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display()

  //block row 3
block15.display()
block16.display()
block17.display()
block18.display()
block19.display()
block20.display()
block21.display()

//block row 4
block22.display()
block23.display()
block24.display()
block25.display()
block26.display()





box1.display()
wing.display()




var collision = Matter.SAT.collides(ground2.body,enemy.body)
console.log(collision);
if(collision.collided===true){
  flag=1
}
if(flag===1){
textSize(40)
stroke(7)
fill("green");
text("## WON ##",700,100)
}
}
function mouseDragged(){
  Matter.Body.setPosition(superhero.body,{x:mouseX,y:mouseY})
}
