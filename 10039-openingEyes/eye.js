function eye(x, y, s){
   this.x = x;
   this.y = y;
   this.s = s;
   this.outerPeri = s;

   this.center = createVector(x + s/2, y + s/2);

   this.p1 = createVector(x + s*0.1, y + s/2);
   this.p2 = createVector(x + s*0.9, y + s/2);

   this.opening = 0;
   this.openingTarget = 0;

   var radius = this.s / 4;
   var numLayers = 5;

   var pupilSz = this.s / 10;
   var pupilTarget = this.s / 2;
   var pupilMax = this.s / 4;
   var pupilMin = this.s / 10;

   var irisPts = [];

   this.hu = random(360);

   this.c1 = createVector(x + s*0.5, y + s/2 - this.opening);
   this.c2 = createVector(x + s*0.5, y + s/2 + this.opening);

   this.open = false;

   var maxOpen;

   var easing = random(0.1,0.005);
   var pupilEase = 0.01;

   var tCheck = random(10000);
   var interval = random(1000,5000);

   this.update = function(){

      this.move();

      if (this.open == true){
         this.openingTarget = maxOpen;
         pupilTarget = pupilMin;
      }
      else{
         this.openingTarget = 0;
         pupilTarget = pupilMax;
      }

      var dO = this.openingTarget - this.opening;
      this.opening += dO * easing;

      var dP = pupilTarget - pupilSz;
      pupilSz += dP * pupilEase;
   }

   this.createIris = function(){
      // here fill and array of arrays
      // each array will contain the points necessary to draw each layer of the iris

      for (var i = 0; i < numLayers; i++) {

         var arr = [];

         for (var j = 0; j < 360; j++) {
            var rad = radius - (i * radius/numLayers) + random(i * radius/2/numLayers);
            var v = createVector(cos(radians(j)) * rad, sin(radians(j)) * rad);
            arr.push(v);
         }

         irisPts.push(arr);

      }

   }

   this.show = function(){

      noStroke();

      fill(255);
      ellipse(this.center.x, this.center.y, this.s * 0.8);

      push();
      translate(this.center.x, this.center.y);

      for (var i = 0; i < irisPts.length; i++) {

         fillHsluv(this.hu, 100, 50 - (i*40/numLayers));

         beginShape();

         for (var j = 0; j < irisPts[i].length; j++) {
            var pt = irisPts[i][j];
            vertex(pt.x, pt.y);
         }

         endShape(CLOSE);

      }

      pop();

      fill(0);
      ellipse(this.center.x, this.center.y, pupilSz);

      fill(0);
      noStroke();

      // Upper lid
      beginShape();
      vertex(this.p1.x, this.p1.y+1); // +1 adjustment to make sure the lid is fully closed
      quadraticVertex(this.c1.x, this.c1.y - this.opening, this.p2.x, this.p2.y+1); // +1 adjustment to make sure the lid is fully closed
      vertex(this.x + this.s, this.y + this.s/2);
      vertex(this.x + this.s, this.y);
      vertex(this.x, this.y);
      vertex(this.x, this.y + this.s/2);
      endShape(CLOSE);


      // Lower lid
      beginShape();
      vertex(this.p1.x, this.p1.y-1); // -1 adjustment to make sure the lid is fully closed
      quadraticVertex(this.c2.x, this.c2.y + this.opening, this.p2.x, this.p2.y-1); // -1 adjustment to make sure the lid is fully closed
      vertex(this.x + this.s, this.y + this.s/2);
      vertex(this.x + this.s, this.y + this.s);
      vertex(this.x, this.y + this.s);

         // // Failed attempt at making rounded sides (instead of square). Will get back to it later...
         // push();
         // translate(this.center.x, this.center.y);
         // // translate(this.x, width);
         // for (var i = 0; i < 180; i++) {
         //    var px = cos(radians(i)) * this.s/2;
         //    var py = sin(radians(i)) * this.s/2;
         //    vertex(px, py);
         // }
         // pop();

      vertex(this.x, this.y + this.s/2);
      endShape(CLOSE);

      // // For testing, draw outer radius of eye
      // noFill();
      // stroke(255, 0, 0);
      // ellipse(this.center.x, this.center.y, this.s);

   }

   this.move = function(){
      if (millis() - tCheck > interval) {
         tCheck = millis();
         interval = random(1000,5000);

         easing = random(0.1,0.005);
         maxOpen = random(this.s*0.5, this.s*0.7);

         if (this.open == false) {
            this.open = true;
         }
         else {
            this.open = false;
            }
      }
   }
}
