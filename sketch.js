var pineapple;
var pineapple2;

var pine;
var pine1;
var pine2;
var melon2;

var edge;

function preload(){ 
pineapple = loadImage("pinapple.png");
pine1 = loadImage("Pineapple1.png");
pine2 = loadImage("pineapple2.png");
melon2 = loadAnimation("melon1.png","melon2.png","melon3.png");
}
function setup(){
createCanvas(600,600);
edge = createEdgeSprites();
}
function draw(){
background("yellow");

pineapple2 = createSprite(300,500,10,10);
pineapple2.addImage("pineapple",pineapple);
pineapple2.scale = 0.45;

fruit();

drawSprites();
}
function fruit(){
 pine = createSprite(300,200,10,10);
    var rand = Math.round(random(1,3));
switch(rand){
 case 1: pine.addImage("pine",pine1);
         break;
 case 2: pine.addImage("pine",pine2);
         break;
 case 3: pine.addAnimation("pine",melon2);
         break;
}
pine.scale = 0.3;
//pine.velocityX = -3;
}