class Ball{
    constructor(x,y){
        var options={
           friction : 1,
           density : 3,
           restitution : 0.8
        }
        this.body=Bodies.circle(x,y,50,options);
        this.radius=50;
        this.image=loadImage("ball.png");
        World.add(myWorld,this.body);
    }

    display(){
        var pos=this.body.position;

        push();
        translate(pos.x,pos.y);        
        imageMode(CENTER);
        image(this.image,0,0,150,150);
        pop();
    }
}