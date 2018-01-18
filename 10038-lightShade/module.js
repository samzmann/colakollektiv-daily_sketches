function module(x, y, s, h){
   this.x = x;
   this.y = y;
   this.s = s;
   this.h = h;

   var huShift = random(0.5, 0.8);

   this.thetas = [];

   this.center = createVector(this.x + this.s/2, this.y + this.s/2);
   this.nw = createVector(this.x, this.y);
   this.ne = createVector(this.x + this.s, this.y);
   this.sw = createVector(this.x, this.y + this.s);
   this.se = createVector(this.x + this.s, this.y + this.s);

   this.t1c = createVector(this.x + this.s*0.5, this.y + this.s*0.25);
   this.t2c = createVector(this.x + this.s*0.75, this.y + this.s*0.5);
   this.t3c = createVector(this.x + this.s*0.5, this.y + this.s*0.75);
   this.t4c = createVector(this.x + this.s*0.25, this.y + this.s*0.5);

   this.t1f = random(255);
   this.t2f = random(255);
   this.t3f = random(255);
   this.t4f = random(255);

   this.thetas.push(new theta(this.nw, this.center, this.ne, this.t1c, this.h, this.t1f));
   this.thetas.push(new theta(this.ne, this.center, this.se, this.t2c, this.h, this.t2f));
   this.thetas.push(new theta(this.se, this.center, this.sw, this.t3c, this.h, this.t3f));
   this.thetas.push(new theta(this.sw, this.center, this.nw, this.t4c, this.h, this.t4f));


   this.update = function(mX, mY){
      var m = createVector(mX, mY);

      // With theta array version
      for (var i = 0; i < this.thetas.length; i++) {
         var t = this.thetas[i];
         var d = p5.Vector.dist(t.c, m);
         t.distSource = d;
         t.f = map(d, 0, width, 255, 0);
      }

      // Sort the array by distance to light source.
      // This is what creates the wierd light ray illusion problem
      this.thetas.sort(function(a, b){return a.distSource - b.distSource});

      for (var i = 0; i < this.thetas.length; i++) {
         var t = this.thetas[i];

         var f = map(t.distSource, 0, width, 70, 0);
         t.f = f+ 30 - i * (30/this.thetas.length);

         t.h += huShift;
      }

   }

   this.show = function(){

      noStroke();

      for (var i = 0; i < this.thetas.length; i++) {
         this.thetas[i].show();
      }

   }
}
