class Ground{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,1600,20,options);
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        push();
        translate(pos.x,pos.y)
        rectMode(CENTER)
        rect(0,0,1600,20)
        pop();
    }
}