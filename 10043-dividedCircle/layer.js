function layer(c, rad, th, h){
   this.center = c;
   this.rad = rad;
   this.thick = th;
   this.peri = random(10, 300);
   this.rot = random(360);
   this.rotForce = random(-1, 1);

   this.hu = h;

   this.update = function(){
      this.rot += this.rotForce;
      this.hu +=random(2);
   }

   this.show = function(){

      // noStroke();
      strokeHsluv(this.hu, 100, 50);
      fillHsluv(this.hu, 100, 50);

      push();
      translate(this.center.x, this.center.y);
      rotate(this.rot)

      beginShape();
      for (var i = 0; i < this.peri; i++) {
         var px = cos(i) * this.rad;
         var py = sin(i) * this.rad;
         vertex(px, py);
      }
      for (var i = this.peri-1; i > -1; i--) {
         var px = cos(i) * (this.rad - this.thick);
         var py = sin(i) * (this.rad - this.thick);
         vertex(px, py);
      }
      endShape(CLOSE);

      pop();

   }
}
