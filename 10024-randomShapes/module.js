function module(x, y, s, pts, hu){
   this.x = x;
   this.y = y;
   this.s = s;
   this.pts = pts;
   this.hu = hu;

   this.show = function(){

      noStroke();
      // fill(255);
      fillHsluv(this.hu, 100, 50);

      beginShape();
      for (var i = 0; i < this.pts; i++) {
         var pX = random(this.x, this.x + this.s);
         var pY = random(this.y, this.y + this.s);
         vertex(pX, pY);
      }
      endShape();
   }
}
