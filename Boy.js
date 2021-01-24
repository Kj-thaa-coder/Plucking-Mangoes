class Boy
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

this.image = loadImage("sprites/boy-1.png");


}
display()
{
    
    var boypos=this.body.position;

    push()
    translate(boypos.x, boypos.y);
    rotate(this.body.angle)
    imageMode(CENTER)
    image(this.image, 0,0, this.x=400, this.y=400, this.width,this.height)
    rectMode(RADIUS)
    strokeWeight(3);
    pop()
    
    }


}
