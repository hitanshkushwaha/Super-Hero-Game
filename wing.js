class Wing {
    constructor(bodyA,bodyB) {
      var options = {
          bodyA:bodyA,
          bodyB:bodyB,
          stiffness:0.5
      }
      this.wing = Constraint.create(options);
      World.add(world, this.wing);
    }
    display(){



    var pointA =this.wing.bodyA.position;
    var pointB =this.wing.bodyB.position;
     
      strokeWeight(0)
      line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
  };