class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(myWorld,this.body);
    }

    display(){
        var posX=this.body.position.x;
        var posY=this.body.position.y;

        push();
        fill("brown")
        rectMode(CENTER);
        rect(posX,posY,this.width,this.height);
        pop();
    }
}