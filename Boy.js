class Boy{
 //   class Ground{
        constructor(x,y){
            var options={
                isStatic:true
            }
            this.body=Bodies.rectangle(x,y,200,500,options);
            this.image=loadImage("boy.png")
            World.add(world,this.body)
        }
        display(){
            var pos=this.body.position
            push();
            translate(pos.x,pos.y)
            imageMode(CENTER)
            image(this.image,0,0,200,500)
            pop();
        }
    }
