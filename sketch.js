var starImg,bgImg;
var star, starBody;
var sound,splay
//create variable for fairy sprite and fairyImg
var fairy,fairy2;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fairy = loadImage("fairyImage1.png");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	fairy2 = createSprite(100,515);
	fairy2.addImage(fairy);
	fairy2.scale=0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
	if(star.y >470 && starBody.position.y > 470){
		Matter.Body.setStatic(starBody,true);
	}
	  if (keyDown("left")){
	fairy2.x=fairy2.x-3
	}else if (keyDown("right")){
	fairy2.x=fairy2.x+3
	}
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right

}
