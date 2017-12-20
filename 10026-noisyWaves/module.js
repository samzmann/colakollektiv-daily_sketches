function module(x, y, s, amp, hu){
   this.x = x;
   this.y = y;
   this.s = s;
   this.amp = amp;
   this.hu = hu;

   this.curve1 = [];
   this.curve2 = [];

   var offset = 0;
   var inc = random(0.002, 0.005);
   var inc2 = 0.005;

   var easing = 0.005;

   var distOrigin;

   this.computeCurve = function(){
      for (var i = 0; i < this.s; i++) {
         var noiseVal;
         noiseVal = noise(offset) * this.amp;
         offset += inc;
         var v = createVector(i, noiseVal);
         this.curve1.push(v);
      }
      for (var i = 0; i < this.curve1.length; i++) {
         var noiseVal = noise(offset) * this.curve1[i].y;
         offset += inc;
         var v = createVector(i, noiseVal);
         this.curve2.push(v);
      }
      distOrigin = this.curve2[0].y;
   }

   var temp = 0;
   var sinInc = random(100);

   this.update = function(){
      for (var i = 0; i < this.curve1.length; i++) {
         var noiseVal = noise(offset) * this.amp;
         offset += inc2;
         // var noiseVal = random(0.9 * this.curve1[i].y, 1.1 * this.curve1[i].y);
         // this.curve1[i].y = noiseVal;
         var d = noiseVal - this.curve1[i].y;
         this.curve1[i].y += d * easing;
      }
      for (var i = 0; i < this.curve2.length; i++) {
         var noiseVal = noise(offset) * this.amp * temp;
         offset += inc2;
         // var noiseVal = random(0.9 * this.curve2[i].y, 1.1 * this.curve2[i].y);
         // this.curve2[i].y = noiseVal;
         var d = noiseVal - this.curve2[i].y;
         this.curve2[i].y += d * easing;
      }
      temp = sin(radians(sinInc * 2)) * 10;
      temp = map(temp, -2, 2, -3, 5);
      // sinInc+=random();
      sinInc+=noise(offset);
   }

   this.show = function(){
      // this.computeCurve();

      noStroke();
      fillHsluv(this.hu, 100, 50);

      beginShape();
      for (var i = this.curve1.length - 1; i > -1; i--) {
         vertex(this.curve1[i].x, this.y + (this.curve1[i].y - distOrigin));
      }
      for (var i = 0; i < this.curve2.length; i++) {
         vertex(this.curve2[i].x, this.y + (this.curve2[i].y - distOrigin));
      }
      endShape();

   }
}
