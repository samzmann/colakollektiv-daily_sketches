function module(x, y, w, h, f){
   this.x = x;
   this.y = y;
   this.w = w;
   this.h = h;
   this.f = f;

   this.offset = random(1000);
   this.inc = random(0.05, 0.01);
   
   this.show = function(){

      noStroke();
      fill(255);
      rect(this.x, this.y, this.w, this.h);

      fill(f);
      ellipse(this.x, this.y, this.w);

      noFill();
      stroke(255);
      strokeWeight(3);

      beginShape();

      for (var i = this.x; i < this.x+this.w; i++) {
         var noiseVal = noise(this.offset) * this.h;
         this.offset += this.inc;
         vertex(i, noiseVal + this.y);
      }

      endShape();
   }
}
