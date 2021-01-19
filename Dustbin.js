class DustBin{
constructor(x,y,width,height){
var options={
isStatic:true
}
this.image=loadImage("Dustbin.png");
this.body1=Bodies.rectangle(x,y,width,height,options);
World.add(world,this.body1);
this.body2=Bodies.rectangle((x-(width/2)),(y-(height*2)),height,width/2,options);
World.add(world,this.body2);
this.body3=Bodies.rectangle((x+(width/2)),(y-(height*2)),height,width/2,options);
World.add(world,this.body3);
this.body1.width=width;
this.body1.height=height;
}
display(){
fill("blue");
rect(this.body1.position.x,this.body1.position.y,this.body1.width,this.body1.height);
rect((this.body1.position.x-(this.body1.width/2)),(this.body1.position.y-(this.body1.height*(2*(this.body1.width/100)))),this.body1.height,this.body1.width/2);
rect((this.body1.position.x+(this.body1.width/2)),(this.body1.position.y-(this.body1.height*(2*(this.body1.width/100)))),this.body1.height,this.body1.width/2);
imageMode(CENTER);
image(this.image,720,370,this.width,this.height);
}
}