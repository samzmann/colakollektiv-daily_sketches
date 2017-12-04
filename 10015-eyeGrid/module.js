function module(x, y, r, h){
   this.x = x;
   this.y = y;
   this.r = r;
   this.hu = h;
   this.center = createVector(x + (r/2), y + (r/2));

   var numLayers = 10;

   this.show = function(){

      this.r *= 0.95;

      fillHsluv(this.hu - 10, 100, 50);
      ellipse(this.center.x, this.center.y, this.r);

      this.r *= 0.95;

      noStroke();

      push()
      translate(this.center.x, this.center.y);

      for (var z = 0; z < numLayers; z++) {

         fillHsluv(this.hu, 100, 50 - (z*40/numLayers));
         beginShape();

         for (var i = 0; i < 360; i++) {
            var radius = this.r/2 - (z * this.r/2/numLayers) + random(z*this.r/4/numLayers);
            var px = cos(i) * radius;
            var py = sin(i) * radius;
            vertex(px, py);
         }

         endShape(CLOSE);

      }

      pop();

      fill(0);
      var pupil = r*0.3;
      ellipse(this.center.x, this.center.y, pupil);
   }
}
