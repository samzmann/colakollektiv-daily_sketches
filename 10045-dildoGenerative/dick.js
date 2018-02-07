function dick(x, y, file){
   this.x = width/2;
   this.y = height/2;
   this.file = file;

   this.targetX = random(width);
   this.targetY = random(height);

   var dirX = random(-10, 10);
   var dirY = random(-10, 10);
   console.log("dirX",dirX);
   console.log("dirY",dirY);

   var easing = 0.05;
   var rot = 0;
   var rotForce = 2;

   var offset = 0;
   var inc = 0.01;

   this.update = function(){

      // // Use this to have dildo bounce off walls:
      this.targetX += dirX;
      this.targetY += dirY;
      var dx = this.targetX - this.x;
      var dy = this.targetY - this.y;

      rot = noise(offset) * 360;
      // rot += rotForce;
      // rot += random(50);
      offset += inc;

      if (this.targetX >= width || this.targetX <= 0) {
         dirX *= -1;
         // rotForce = random(-30, 30);
      }
      if (this.targetY >= height || this.targetY <= 0) {
         dirY *= -1;
         // rotForce = random(-3, 3);
      }

      // // Use this to have dildo follow mouse:
      // var dx = mouseX - this.x;
      // var dy = mouseY - this.y;

      this.x += dx * easing;
      this.y += dy * easing;
   }

   this.show = function(){
      push();
      translate(this.x, this.y);
      rotate(rot);
      image(this.file, 0,0, this.file.width * 0.7, this.file.height * 0.7);
      pop();
   }
}
