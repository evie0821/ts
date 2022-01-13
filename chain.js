class Chain{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.04
        }
        this.pointB = pointB
        this.chain= Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        if(this.chain.bodyA){
            var pointA=this.chain.bodyA.position;
            var pointB=this.pointB;
            strokeWeight(3);
            stroke("green");
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
        
    }
    atach(a){
        this.chain.bodyA = a
    }
    fly(){
        this.chain.bodyA = null
    }
}