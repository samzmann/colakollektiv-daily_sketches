function module(x, y, s){
   this.x = x;
   this.y = y;
   this.s = s;

   this.nw = createVector(this.x, this.y);
   this.ne = createVector(this.x + this.s, this.y);
   this.se = createVector(this.x + this.s, this.y + this.s);
   this.sw = createVector(this.x, this.y + this.s);

   var type = random();

   this.show = function(){
      noStroke();
      fill(0);
      if (type < 0.25){
         triangle(this.nw.x, this.nw.y, this.ne.x, this.ne.y, this.sw.x, this.sw.y);
      }
      else if (type < 0.5) {
         triangle(this.nw.x, this.nw.y, this.ne.x, this.ne.y, this.se.x, this.se.y);
      }
      else if (type < 0.75) {
         triangle(this.ne.x, this.ne.y, this.se.x, this.se.y, this.sw.x, this.sw.y);
      }
      else {
         triangle(this.se.x, this.se.y, this.sw.x, this.sw.y, this.nw.x, this.nw.y);
      }
   }
}
