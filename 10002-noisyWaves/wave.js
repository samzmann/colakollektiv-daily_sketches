function wave(x, y, c, off, inc){
   this.start = x;
   this.y = y;
   this.offset = off;
   this.inc = inc;
   this.c = c;

   this.show = function(){
      noFill();
      strokeWeight(3);
      strokeHsluv(random(0.9*this.c,1.1*this.c), 100, 40, 10);

         beginShape();
         var noiseVal;
            for (var y = 0; y < width; y++) {
               noiseVal = noise(this.offset) * this.y;
               vertex(y, noiseVal);
               this.offset += this.inc;
            }
         endShape();

   }
}
