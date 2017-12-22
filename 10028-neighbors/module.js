function module(x, y, s, cR, cC){
   this.pos = createVector(x + s/2, y + s/2);
   this.coordinates = createVector(cR, cC);
   this.s = s;
   var rand = random();
   this.full;
   if (rand < 0.5) {
      this.full = true;
   }
   else {
      this.full = false;
   }

   this.neighbors = [];

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

      fill(0);
      noStroke();
      if (this.full == true){
         ellipse(this.pos.x, this.pos.y, this.s*0.75);
      }
   }

}
