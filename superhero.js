class Superhero {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          restitution:0.5
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
     this.image = loadImage("images/Superhero-01.png")
      World.add(world, this.body);
    }
    display(){

      var pos =this.body.position;
      imageMode(CENTER);
      fill("brown");
      image(this.image,pos.x, pos.y, this.width, this.height);
    }
  };