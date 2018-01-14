function module(x, y, s){
   this.pos = createVector(x, y);

   var moveAmp = random(3);
   var moveX = random(-moveAmp, moveAmp);
   var moveY = random(-moveAmp, moveAmp);

   this.update = function(){
      this.pos.x += moveX;
      this.pos.y += moveY;

      if (this.pos.x >= width || this.pos.x <= 0) {
         moveX *= -1;
      }
      if (this.pos.y >= height || this.pos.y <= 0) {
         moveY *= -1;
      }
   }

   this.show = function(){
      fill(255);
      noStroke();
      ellipse(this.pos.x, this.pos.y, 10);
   }
}
