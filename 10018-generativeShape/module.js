function module(x, y){
   this.x = x;
   this.y = y;

   var rad = 1;
   var i = 1;
   var inc = 0.005;
   this.verts = [];

   this.update = function(){
      this.x += cos(i * 2) * rad;
      this.y += sin(i) * rad;
      rad += .5;
      i+= 0.9;

      var v = createVector(this.x, this.y);
      this.verts.push(v);

   }

   this.show = function(){

      stroke(255);
      noFill();

      for (var i = 1; i < this.verts.length; i++) {
         stroke(i * 255/this.verts.length, 0, 255 - (i * 255/this.verts.length));
         line(this.verts[i-1].x, this.verts[i-1].y, this.verts[i].x, this.verts[i].y);
      }
   }

}
