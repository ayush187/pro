class Mango{
    //   class Ground{
           constructor(x,y){
               var options={
                   isStatic:true
               }
               this.body=Bodies.rectangle(x,y,600,60,options);
               this.image=loadImage("mango.png")
               World.add(world,this.body)
           }
           display(){
               var pos=this.body.position
               push();
               translate(pos.x,pos.y)
               imageMode(CENTER)
               image(this.image,0,0,40,40)
               pop();
           }
       }
   