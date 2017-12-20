function module(x, y, s, hu, li){
   this.x = x;
   this.y = y;
   this.s = s;
   this.hu = hu;
   this.li = li;

   var pts = [];

   var offset = random(1000);
   var inc = 0.05;

   this.show = function(){

      for (var i = this.x; i < this.x + this.s; i++) {
         var noiseVal = noise(offset) * this.s/2 + this.s/2;
         var d = this.x - noiseVal;
         offset += inc;
         pts.push(createVector(i, noiseVal));
      }
      var d = pts[0].y;

      fillHsluv(this.hu, 100, this.li);
      noStroke();

      beginShape();
      vertex(this.x, this.y + this.s);
      for (var i = 0; i < pts.length; i++) {
         vertex(pts[i].x, (this.y + this.s/2) + (pts[i].y - d));
      }
      vertex(this.x + this.s, this.y + this.s);
      endShape(CLOSE);
   }
}
