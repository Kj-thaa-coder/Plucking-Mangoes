class Ground
{
    constructor(x,y,width,height)
    {
        

        
        
        
        var options={
            isStatic:true,
            restitution:0.3,
            friction:0.3,
            density:1.2
    
    }



this.x=x;
this.y=y;
this.width = width;
this.height = height;
this.body=Bodies.rectangle(this.x, this.y, this.width,this.height, options)

World.add(world, this.body);




}
display()
{
    
    var grpos=this.body.position;

    push()
    translate(grpos.x, grpos.y);
    rotate(this.body.angle)
    rectMode(CENTER)
    fill("green")
    strokeWeight(3);
    pop()
    
    }


}
