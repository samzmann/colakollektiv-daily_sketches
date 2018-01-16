function module(x, y, s, h){
   this.x = x;
   this.y = y;
   this.s = s;

   this.center = createVector(this.x + this.s/2, this.y + this.s/2);

   var h = h;
   var sat;

   var offset1 = random(1000);
   var offset2 = random(1000);
   var inc = 0.007;

   var angleRotate = random(360);
   var radius = this.s/3;

   this.update = function(){
      var angVal = noise(offset1) * 360;
      offset1 += inc;
      angleRotate = angVal;
      sat = map(angleRotate, 0, 360, 0, 100);

      var radVal = noise(offset2) * this.s/3 + this.s/10;
      offset2 += inc;
      radius = radVal;

      h +=1;
   }

   this.show = function(){

      noStroke();
      fillHsluv(h, 100, sat);

      push();
      translate(this.center.x, this.center.y);

      rotate(radians(angleRotate));

      beginShape();
      for (var i = 0; i < 180; i++) {
         var px = cos(radians(i)) * radius;
         var py = sin(radians(i)) * radius;
         vertex(px, py);
      }
      endShape(CLOSE);

      pop();
   }
}
