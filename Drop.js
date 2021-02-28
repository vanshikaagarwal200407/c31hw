class Drop{
    constructor(x,y){
        var options={
            restitution :0.1,
            friction :0.01,
        }
        this.body=bodies.circle(x,y,5,options);
        this.radius=5;
        world.add(world,this.body)
    }
    update(){
        if(this.body.position.y>height){
            Matter.body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
        }
    }
    display(){
        noStroke();
        fill(0,0,225);
        ellipseMode(radius);
ellipse(this.body.position.x,this.position.y,this.radius,this.radius)
    }
}