class Rock
{
    constructor(x,y,r)
    {
        

        
        
        
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.3,
            density:1.2
    
    }



this.x=x;
this.y=y;
this.r=r;
this.body=Bodies.circle(this.x, this.y, this.r/0.86, options)

World.add(world, this.body);

this.image = loadImage("sprites/stone.png");


}
display()
{
    
    var rockpos=this.body.position;

    push()
    translate(rockpos.x, rockpos.y);
    rotate(this.body.angle)
    imageMode(CENTER)
    image(this.image, 0,0, this.x=70, this.y=70, this.r= -0.0000000001)
    ellipseMode(RADIUS)
    strokeWeight(3);
    fill("orange")
    ellipse(0,0,this.r, this.r);
    pop()
    
    }


}
