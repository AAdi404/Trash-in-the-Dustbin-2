class Paper{
constructor(x,y,radius){
var options={
'restitution':0.8,
'friction':1.0,
'density':1.0,
isStatic:false
}
this.radius=radius
this.body=Bodies.circle(x,y,radius,options);
World.add(world,this.body);
this.image=loadImage("Trash.png")
}
display(){
var pos=this.body.position;
push();
fill("red");
ellipseMode(RADIUS);
ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
pop()
imageMode(CENTER);
image(this.image,pos.x,pos.y,this.width,this.height);
}
}