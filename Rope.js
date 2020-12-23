class Rope{
    constructor(body,point){
        var options={
            bodyA : body,
            pointB : point,
            stiffness : 2,
            length : 400
        }

        this.rope=Constraint.create(options)
        World.add(myWorld,this.rope);
    }

    fly(){
      //  this.rope.bodyA=null;
    }

    display(){
        if(this.rope.bodyA){
            var pointA=this.rope.bodyA.position;
            var pointB=this.rope.pointB;
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}