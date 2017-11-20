function hill(x, y, c, off, inc){
   this.start = x;
   this.y = y;
   this.offset = off;
   this.inc = inc;
   this.c = c;

   this.show = function(){
      fillHsluv(c, 100, 50);
      strokeHsluv(c, 100, 40);

      beginShape();
         vertex(0, height);
         vertex(0, this.y);
         var noiseVal;
         for (var i = 0; i < width; i++) {
            noiseVal = noise(this.offset) * this.y;
            vertex(i, noiseVal);

            this.offset += this.inc;
         }
         vertex(width, noiseVal);
         vertex(width, height);
      endShape(CLOSE);

   }
}
