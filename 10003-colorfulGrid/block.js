function block(x, y, w, h, c){
   this.x = x;
   this.y = y;
   this.w = w;
   this.h = h;
   this.c = c;

   this.show = function(){
      noStroke();
      fillHsluv(this.c, 100, 50);
      rect(this.x, this.y, this.w, this.h);
   }
}
