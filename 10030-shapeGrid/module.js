function module(x, y, s){
   this.x = x;
   this.y = y;
   this.center = createVector(x + s/2, y + s/2);
   this.s = s;

   var rand = random();

   this.rand = random();

   this.show = function(){
      noFill();
      // fill(random(255), 0, random(255));
      stroke(255);
      strokeWeight(2);
      strokeCap(SQUARE);
      if (rand < 0.5){
         line(this.x + this.s/2, this.y, this.x + this.s/2, this.y + this.s);
         line(this.x, this.y + this.s/2, this.x + this.s, this.y + this.s/2);
      }
      else if (rand < 0.7) {
         line(this.x, this.y + this.s/2, this.x + this.s, this.y + this.s/2);
      }
      else if (rand < 0.9) {
         line(this.x + this.s/2, this.y, this.x + this.s/2, this.y + this.s);
      }
      else {
         ellipse(this.center.x, this.center.y, this.s * 0.6);
         noStroke();
         fill(random(255), 0, random(255));
         ellipse(this.center.x, this.center.y, this.s * 0.25);
      }
   }
}
