function module(x, y, r, h){
   this.x = x;
   this.y = y;
   this.r = r;
   this.h = h;
   this.offset = r;

   var nVal;
   var nInc = 0.1;

   this.update = function(){
      nVal = noise(this.offset) * radius;
      this.r = nVal;
      this.h = map(this.r, 0, radius, 0, 360);
      this.offset += nInc;
   }

   this.show = function(){

      noStroke();
      fillHsluv(this.h, 100, 50);
      ellipse(this.x, this.y, this.r*2);

   }
}
