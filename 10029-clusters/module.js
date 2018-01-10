function module(x, y, s, cR, cC, f){
   this.pos = createVector(x + s/2, y + s/2);
   this.coordinates = createVector(cR, cC);
   this.s = s;
   this.f = f;
   var rand = random();
   this.full;
   if (rand < 0.5) {
      this.full = true;
   }
   else {
      this.full = false;
   }

   this.neighbors = [];
   this.cluster = 0;

   this.computeNeighbors = function(array){
      for (var i = 0; i < array.length; i++) {
         if (( (array[i].coordinates.x == this.coordinates.x) && (array[i].coordinates.y == this.coordinates.y-1)) ||
            (  (array[i].coordinates.x == this.coordinates.x) && (array[i].coordinates.y == this.coordinates.y+1)) ||
            (  (array[i].coordinates.y == this.coordinates.y) && (array[i].coordinates.x == this.coordinates.x-1)) ||
            (  (array[i].coordinates.y == this.coordinates.y) && (array[i].coordinates.x == this.coordinates.x+1))) {
               this.neighbors.push(array[i]);
            }
      }
   }

   this.drawConnections = function(){
      strokeWeight(3);
      stroke(255, 0, 0);
      for (var i = 0; i < this.neighbors.length; i++) {
         if(this.neighbors[i].full == true && this.full == true){
            line(this.pos.x, this.pos.y, this.neighbors[i].pos.x, this.neighbors[i].pos.y);
         }
      }
   }

   this.show = function(){

      fill(this.f, 100, 255 - this.f);
      // fillHsluv(this.f, 100, 60);
      noStroke();
      if (this.full == true){
         ellipse(this.pos.x, this.pos.y, this.s*0.75);
      }

      var tS = 20;
      textSize(tS);
      fill(255);
      // text(this.coordinates, this.pos.x - this.s/2, this.pos.y - this.s/2 + 10);
      text(this.cluster, this.pos.x, this.pos.y + (tS/3));
   }

}
