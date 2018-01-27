function character(x, y, s){
   this.x = x;
   this.y = y;
   this.s = s;

   this.type = random();


   this.show = function(){

      noFill();
      stroke(51, 255, 51);
      strokeWeight(2);
      strokeCap(SQUARE);

      if (this.type < 0.2) {
         line(this.x, this.y, this.x + this.s, this.y + this.s);
      }
      else if (this.type < 0.4) {
         line(this.x + this.s, this.y, this.x, this.y + this.s);
      }
      else if (this.type < 0.6) {
         line(this.x, this.y + this.s/2, this.x + this.s, this.y + this.s/2);
      }
      else if (this.type < 0.8) {
         line(this.x + this.s/2, this.y, this.x + this.s/2, this.y + this.s);
      }
      else if (this.type < 0.9) {
         noStroke();
         fill(51, 255, 51);
         rect(this.x + this.s*0.25, this.y + this.s*0.25, this.s/2, this.s/2)
      }
      else {

      }
   }
}
