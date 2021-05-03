class Stone{
	constructor(x,y,width,height)
	{
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		//this.r=r
         var options={
             restitution:0.8,friction:0.9,density:12
         }
		this.body=Bodies.rectangle(this.x, this.y,width,height , options)
        this.width=width
        this.height=height
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
            rotate(this.body.angle)
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill(0);
			//draw the ellipse here to display the rubber ball
       rect(0,0,this.width,this.height)
			pop()
	}

}