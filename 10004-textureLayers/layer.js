function layer(c, d){
   this.c = c;
   this.d = d;

   this.show = function(){
      noStroke();
      // strokeHsluv(this.c, 100, 50);
      // stroke(this.c, 100, 50, 100)
      fill(this.c, 100, 50, .55)
      // noFill();

      beginShape()
      for (var i = 0; i < this.d; i++) {
         var xVal = random(-width, width*2);
         var yVal = random(-height, height*2);
         vertex(xVal, yVal);
      }
      endShape();
   }
}
