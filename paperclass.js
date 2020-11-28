class Paper {
    constructor(x,y,radius){
      var options={
          isStatic:false,
          restitution:0.5,
          friction:0.5,
          density:0.8
        }
      this.x = x;
      this.y = y;
      this.radius = radius; 
      this.body = Bodies.circle(this.x,this.y,this.radius,options)
      World.add(world,this.body)
    }
    display(){
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      ellipseMode(RADIUS);
      strokeWeight(3);
      fill("Purple");
      ellipse(0,0,this.radius,this.radius);
      pop();
    }
  
}