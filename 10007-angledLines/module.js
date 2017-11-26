function module(x, y, w, o){
   this.x = x;
   this.y = y;
   this.w = w;
   this.offset = o;
   var inc = 0.0002;

   this.show = function(){

      noFill();
      strokeWeight(this.w);
      strokeHsluv(random(0,300), 100, 60, random(0, 0.2));

      beginShape();
      for (var i = 0; i < width*2; i++) {
         var noiseVal = noise(this.offset) * this.y;
         vertex(this.x + i, noiseVal);
         this.offset += inc;
      }
      endShape();
   }
}
