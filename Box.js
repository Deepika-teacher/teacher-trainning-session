class Box{
    constructor(x,y){
        var options={
            restitution:0.8,
            friction :1.0,
            density : 0.1
        }
        this.body=Bodies.rectangle(x,y,100,100,options);
        this.width=100;
        this.height=100;
        World.add(myWorld,this.body);
    }

    display(){
        var posX=this.body.position.x;
        var posY=this.body.position.y;
        var angle=this.body.angle;

        push();
        translate(posX,posY);
        rotate(angle);

        fill("white");
        stroke("green");
        strokeWeight(5);
        
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}