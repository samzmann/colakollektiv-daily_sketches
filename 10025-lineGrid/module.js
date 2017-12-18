function module(x, y, s, hu){
   this.x = x;
   this.y = y;
   this.s = s;
   this.hu = hu;

   this.rand = random();

   this.show = function(){
      strokeHsluv(this.hu, 100, 50);
      strokeWeight(3);
      strokeCap(SQUARE);
      if (this.rand < 0.5){
         line(this.x + this.s/2, this.y, this.x + this.s/2, this.y + this.s);
      }
      else {
         line(this.x, this.y + this.s/2, this.x + this.s, this.y + this.s/2);
      }
   }
}
