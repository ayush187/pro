class Stone{
    constructor(x,y){
    var options={
        isStatic:false,
        restitution:0,
        friction:1,
    }
    this.body=Bodies.rectangle(x,y,20,20,options)
    this.image=loadImage("stone.png")
    World.add(world,this.body)
}
display(){
var pos=this.body.position
push();
translate(pos.x,pos.y)
imageMode(CENTER)
image(this.image,0,0,20,20)
pop();
}
}