var garden,gardenImg
var cat,catImg
var mouse,mouseImg
var mouseTeasing



function preload() {
           gardenImg=loadImage("garden.png");
           catImg=loadAnimation("cat1.png","cat2.png","cat3.png")
           mouseImg=loadAnimation("mouse1.png","mouse2.png","mouse3.png")
}

function setup(){
           createCanvas(800,600);
           
           garden=addImage(gardenImg)
           garden=createSprite(800,600)        

           mouse=createSprite(200,200,50,50)
           mouse=addImage(mouseImg)

           cat=createSprite(100,200,50,50)
           cat=addImage(catImg)                                                           

}

function draw() {

    background(255);

   
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width-mouse.width/2)){


}
        drawSprites();
}


function keyPressed(){


  if(keyCode===LEFT_ARROW){
    mouse.addAnimation("mouseTeasing,mouseimg2");
    mouse.changeAnimaton("mouseTeasing");
    mouse.framedelay=25
  }
  if (keyCode===RIGHT_ARROW){
    cat.addAnimation("catImg")
    cat.changeAnimaton("catImg")
    cat.framedelay=25
  }  

  
