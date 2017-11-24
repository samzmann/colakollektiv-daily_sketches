function module(x, y, s, c, h, n){
   this.x = x;
   this.y = y;
   this.size = s;
   this.corner = c;
   this.h = h;
   this.numLayers = n;

   var rotateStart = 0;

   this.show = function(){
      fill(0);
      noStroke();


      rect(this.x, this.y, this.size, this.size);

      if (this.corner == 1) {
         this.x += this.size;
         rotateStart = 90;
      }
      else if (this.corner == 2) {
         this.x += this.size;
         this.y += this.size;
         rotateStart = 180;
      }
      else if (this.corner == 3) {
         this.y += this.size;
         rotateStart = 270;
      }
      else {

      }

      for (var i = 0; i < this.numLayers; i++) {
         fillHsluv(random(0.3*this.h, 1.8*this.h), 100, 50);
         this.h += 25;

         push();
         translate(this.x, this.y);

         beginShape();

         var radius = (this.size - i * (this.size/this.numLayers));

         for (var y = rotateStart; y < rotateStart + 90; y++) {
            var px = cos(radians(y)) * radius;
            var py = sin(radians(y)) * radius;
            vertex(px, py);
         }
         endShape(CLOSE);
         pop();

      }

   }
}
