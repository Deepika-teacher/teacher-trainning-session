class Ball{
    constructor(x,y){
        var options={
           friction : 1,
           density : 3,
           restitution : 0.8
        }
        this.body=Bodies.circle(x,y,50,options);
        this.radius=50;
        World.add(myWorld,this.body);
    }

    display(){
        var pos=this.body.position;
        var ang=this.body.angle;

        //pos.x=mouseX;
        //pos.y=mouseY;

        push();
        translate(pos.x,pos.y);
        rotate(ang);

        fill("yellow");
        stroke("green");
        strokeWeight(5);
        
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}