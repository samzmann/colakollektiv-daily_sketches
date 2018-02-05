function ball(boxX, boxY, s, h){
   this.boxX = boxX;
   this.boxY = boxY;
   var rad = 5;
   this.x = random(boxX + rad, boxX + s - rad);
   this.y = random(boxY + rad, boxY + s - rad);;
   this.hu = h;
   var speed = 5;
   this.dir = createVector(random(-speed, speed), random(-speed, speed));

   var offsetx = random(1000);
   var offsety = random(1000);
   var inc = 0.05;

   this.update = function(){
      this.x += noise(offsetx) * (this.dir.x);
      offsetx += inc;
      this.y += noise(offsety) * (this.dir.y);
      offsety += inc;
      if ((this.x < this.boxX + rad) || (this.x > this.boxX + s - rad)) {
         this.dir.x *= -1;
         this.hu += 100;
      }
      if ((this.y < this.boxY + rad) || (this.y > this.boxY + s - rad)) {
         this.dir.y *= -1;
         this.hu += 100;
      }
   }

   this.show = function(){
      noStroke();
      fillHsluv(this.hu, 100, 50);
      ellipse(this.x, this.y, rad);
   }
}
