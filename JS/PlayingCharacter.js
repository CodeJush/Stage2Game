class PlayingCharacter{

    constructor (x,y){
    
        var options = {
            restitution : 0,
            friction : 1,
            density: 0.004
        }

        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width= 50;
        this.height=100; 
        this.image=loadImage("images/boy1.png");
    

        
    
       
    
        World.add(world,this.body);
    }

    





display(){

    if (keyDown(UP_ARROW)){
        this.body.position.y-=10;
        
         }

    if (keyDown(RIGHT_ARROW)){
    this.body.position.x+=10;
            
     }

     if (keyDown(LEFT_ARROW)){
        this.body.position.x-=10;
        
         }


if (keyDown(DOWN_ARROW)){
    this.body.position.y+=10;
    
     }

     var pos = this.body.position;
push();
translate(pos.x,pos.y);
imageMode(CENTER);
image(this.image,0,0,this.width,this.height);
pop();

}
}