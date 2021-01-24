class Tree
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
this.height= height;
this.body=Bodies.rectangle(this.x, this.y, this.width, this.height, options)

World.add(world, this.body);

this.image = loadImage("sprites/tree.png");


}
display()
{
    
    var treepos=this.body.position;

    push()
    translate(treepos.x, treepos.y);
    rotate(this.body.angle)
    imageMode(CENTER)
    image(this.image, 0,0, this.x=800, this.y=800, this.width, this.height)
    // rectMode(CENTER)
    strokeWeight(3);
    fill(255,0,255)
    pop()
    
    }


}
