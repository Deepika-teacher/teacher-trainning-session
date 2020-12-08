class Ground{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,1600,40,options);
        this.width=1600;
        this.height=40;
        World.add(myWorld,this.body);
    }

    display(){
        var posX=this.body.position.x;
        var posY=this.body.position.y;

        fill("brown")
        rectMode(CENTER);
        rect(posX,posY,this.width,this.height);
    }
}