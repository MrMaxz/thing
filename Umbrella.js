class Umbrella {
      
    constructor(){
         var options = {
              isStatic: true,
              restitution: 0.5
         };
         var radius = 25;
         this.body = Matter.Bodies.circle(100,350, radius, options);
         this.width = radius;
         this.man_image = loadAnimation("Walking Frame/walking_1.png","Walking Frame/walking_2.png","Walking Frame/walking_3.png","Walking Frame/walking_4.png","Walking Frame/walking_5.png","Walking Frame/walking_6.png","Walking Frame/walking_7.png","Walking Frame/walking_8.png");
         this.height = radius;
         World.add(world, this.body);
    }
    display(){
         var pos = this.body.position;
         var man = createSprite(pos.x-30, pos.y-20)
         man.addAnimation("man",this.man_image)
       man.scale = 0.5;
    }
}
