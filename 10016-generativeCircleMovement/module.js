function module(x, y, r){
   this.x = x;
   this.y = y;
   this.r = r;
   this.red = 255;

   var rad = 100;
   var i = 1;
   var offset = 0;
   var inc = 0.005;
   var sizeNoise;
   var redNoise;

   this.update = function(){
      rad = noise(offset) * rad;
      sizeNoise = noise(offset) * this.r;
      redNoise = noise(offset) * this.red;
      this.x += cos(i) * rad;
      this.y += sin(i) * rad;
      offset += inc;
      rad += 2;
      i += 2;
   }

   this.show = function(){
      stroke(0,40);
      fill(random(0.9*redNoise, 1.1*redNoise), 0, 0, 50);
      ellipse(this.x, this.y, sizeNoise*2);
   }
}
