function module(x, y, s, h){
   this.x = x;
   this.y = y;
   this.s = s;

   this.center = createVector(this.x + this.s/2, this.y + this.s/2);

   this.hu = h;

   var numLayers = floor(random(1,10));

   var radStart = this.s/numLayers/2;

   this.show = function(){

      /*
      Here, really no need to use this complicated way to make circles.
      Could have just used ellipse();
      Only using this way because I am thinking to expand the sketch in a way where custom shapes will be necessary;
      */

      push()
      translate(this.center.x, this.center.y);

      for (var i = 0; i < numLayers; i++) {

         noFill();
         // stroke(255);
         strokeHsluv(random(0.8*this.hu, 1.2*this.hu), 100, 50);
         strokeWeight(random(2, 5));

         beginShape();
         for (var j = 0; j < 360; j++) {
            var px = cos(radians(j)) * (radStart - this.s/10);
            var py = sin(radians(j)) * (radStart - this.s/10);
            vertex(px, py);
         }
         endShape();

         radStart += this.s/numLayers/2;
      }

      pop();

   }
}
