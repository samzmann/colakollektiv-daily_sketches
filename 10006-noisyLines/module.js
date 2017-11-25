function module(x, y, w){
   this.x = x;
   this.y = y;
   this.w = w;
   this.offset = 0;
   var inc = 0.03;

   this.show = function(){

      noFill();
      strokeWeight(this.w);
      stroke(random(150,255));

      beginShape();
      for (var i = 0; i < width; i++) {
         var noiseVal = noise(this.offset) * this.y;
         vertex(i, noiseVal);
         this.offset += inc;
      }
      endShape();
   }
}
