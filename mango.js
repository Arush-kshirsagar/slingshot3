class Mango{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.image=loadImage("Plucking mangoes/mango.png");
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y,this.width,this.height);
        imageMode(CENTRE);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}