function module(x, y){
   this.x = x;
   this.y = y;

   var rad = 1;
   var i = 1;
   var inc = 0.005;
   this.verts = [];

   this.update = function(){
      this.x += cos(i) * rad;
      this.y += sin(i) * rad;
      rad += 0.5;
      i+= 0.9;

      var v = createVector(this.x, this.y);
      this.verts.push(v);
   }

   this.show = function(){

      stroke(255);
      noFill();
      beginShape();
      for (var i = 0; i < this.verts.length; i++) {
         vertex(this.verts[i].x, this.verts[i].y);
      }
      endShape();
   }
}
