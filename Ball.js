class Ball{
    constructor(x,y){
        var options={
           friction : 1,
           density : 3,
           restitution : 0.8
        }
        this.body=Bodies.circle(x,y,40,options);
        this.radius=40;
        World.add(myWorld,this.body);
    }

    display(){
        var posX=this.body.position.x;
        var posY=this.body.position.y;
        var angle=this.body.angle;
        posX=mouseX;
        posY=mouseY;

        push();
        translate(posX,posY);
        rotate(angle);

        fill("yellow");
        stroke("green");
        strokeWeight(5);
        
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}