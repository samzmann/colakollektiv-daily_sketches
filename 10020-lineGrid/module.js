function module(x, y, w, h){
   this.x = x;
   this.y = y;
   this.w = w;
   this.h = h;
   this.nw = createVector(this.x, this.y);
   this.ne = createVector(this.x + this.w, this.y);
   this.se = createVector(this.x + this.w, this.y + this.w);
   this.sw = createVector(this.x, this.y + this.w);

   this.show = function(){

      var cords = [this.nw, this.ne, this.se, this.sw];
      var indexes = [0, 1, 2, 3];
      // console.log(indexes);
      var r1 = floor(random(indexes.length));
      indexes.splice(r1, 1);
      var r2 = floor(random(indexes.length));
      // console.log(indexes);
      var p1 = cords[r1];
      var p2 = cords[r2];
      // console.log(p1);
      // console.log(p2);

      strokeHsluv(this.h, 100, 50);
      strokeWeight(3);
      line(p1.x, p1.y, p2.x, p2.y);

   }

}
