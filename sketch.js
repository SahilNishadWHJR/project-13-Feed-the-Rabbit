var garden,rabbit,apple,orangeleaf;
var gardenImg,rabbitImg,appleImg,orangeleafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeleafImg = loadImage("orangeleaf.png");
}

function setup(){
  
createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg)

apple = createSprite(150,50,10,10);
      apple.velocityY=3
      apple.addImage(appleImg);
      apple.scale=0.08
orangeleaf = createSprite(250,80,10,10);
      orangeleaf.velocityY=3
      orangeleaf.addImage(orangeleafImg);
      orangeleaf.scale=0.08
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

 
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=mouseX ;
  var select_sprite = Math.round(random(1,2));
  if(frameCount% 80==0){
    if(select_sprite ==1){
      apple = createSprite(150,50,10,10);
      apple.velocityY=3
      apple.addImage(appleImg);
      apple.scale=0.08
    }
    else{
      orangeleaf = createSprite(250,80,10,10);
      orangeleaf.velocityY=3
      orangeleaf.addImage(orangeleafImg);
      orangeleaf.scale=0.08
    }
  }
   drawSprites();
 
}