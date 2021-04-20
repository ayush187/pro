class Tree{
    //   class Ground{
           constructor(x,y){
               var options={
                   isStatic:true
               }
               this.body=Bodies.rectangle(x,y,50,400,options);
               this.image=loadImage("tree.png")
               World.add(world,this.body)
           }
           display(){
               var pos=this.body.position
               push();
               translate(pos.x,pos.y)
               imageMode(CENTER)
               image(this.image,0,0,400,800)
               pop();
           }
       }
     