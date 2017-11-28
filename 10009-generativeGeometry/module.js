function module(x, y, r, h){
   this.x = x;
   this.y = y;
   this.r = r;
   this.h = h;
   this.offset = r;

   var i = 0;
   var rad = 1

   this.update = function(){
      this.x += cos(radians(i * 5)) * rad;
      this.y += sin(radians(i * 2)) * rad;
      rad+= 0.01;
      i+=2;
      this.h+=360/width;
   }

   this.show = function(){

      noStroke();
      fillHsluv(this.h, 100, 50);
      ellipse(this.x, this.y, this.r*2);

   }
}
