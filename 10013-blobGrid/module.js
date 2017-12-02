function module(x, y, r, h){
   this.x = x;
   this.y = y;
   this.r = r;
   this.hu = h;
   this.center = createVector(x + (r/2), y + (r/2));

   this.offset = random(1000);
   this.inc = random(0.02, 0.01);

   this.show = function(){

      fillHsluv(this.hu, 100, 50);
      noStroke();

      push()
      translate(this.center.x, this.center.y);

      beginShape();

      for (var i = 0; i < 360; i++) {
         var radius = noise(this.offset) * this.r/2;
         var px = cos(i) * radius;
         var py = sin(i) * radius;
         this.offset += this.inc;
         vertex(px, py);
      }

      endShape(CLOSE);

      pop();
   }
}
