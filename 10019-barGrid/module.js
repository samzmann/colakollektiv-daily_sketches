function module(x, y, w, h, c){
   this.x = x;
   this.y = y;
   this.w = w;
   this.h = h;
   this.c = map(this.h, 0, w, 0, 360);

   var offset = h;
   var inc = 0.02;

   this.update = function(){
      this.h = noise(offset) * this.w;
      this.c = map(this.h, 0, w, 0, 360);
      offset += inc;
   }

   this.show = function(){
      noStroke();
      fillHsluv(this.c, 100, 50);
      rect(this.x, this.y + this.w, this.w, -this.h);
   }
}
