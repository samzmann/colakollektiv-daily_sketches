function module(x, y, s, hu){
   this.x = x;
   this.y = y;
   this.s = s;
   this.hu = hu;

   this.show = function(){

      fillHsluv(this.hu, 100, 50);
      noStroke();

      triangle(this.x, this.y, this.x + this.s, this.y, this.x + this.s, this.y + this.s);

      // fillHsluv(this.hu - 180, 100, 50);
      // fill(0);

      // triangle(this.x, this.y, this.x + this.s, this.y + this.s, this.x, this.y + this.s);

      // var rand = random();
      //
      // if (rand < 0.25){
      //    triangle(this.x + this.s/2, this.y, this.x + this.s, this.y + this.s, this.x, this.y + this.s);
      // }
      // else if (rand < 0.5) {
      //    triangle(this.x + this.s, this.y + this.s/2, this.x, this.y + this.s, this.x, this.y);
      // }
      // else if (rand < 0.75) {
      //    triangle(this.x, this.y, this.x + this.s, this.y, this.x + this.s/2, this.y + this.s);
      // }
      // else {
      //    triangle(this.x + this.s, this.y, this.x + this.s, this.y + this.s, this.x, this.y + this.s/2);
      // }

   }

}
