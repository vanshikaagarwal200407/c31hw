var raindrop;

function preload(){
    
}

function setup(){
    createCanvas(1300, 600);
    
}

function draw(){
   for (var i =0;i < raindrop;i++){
       Drop(i).display();
       Drop(i).update();
   }
   drawSprites();
}   

