function theta(p1,p2,p3,c,h,f){

   this.h = h;
   this.c = c;
   this.f = f;

   this.distSource;

   this.show = function(){
      fillHsluv(this.h, 100, this.f);
      triangle(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
   }
}
