function module(x, y, s, c, cR, cC){
   this.x = x;
   this.y = y;
   this.s = s;

   this.coordinates = createVector(cR, cC);

   var tCheck = millis();
   var tInt = random(500, 1000);

   this.character = c;

   this.show = function(){

      // // Show background, for testing:
      // stroke(100);
      // fill(200);
      // rect(this.x, this.y, this.s, this.s);

      this.character.show();
   }

   this.update = function(){
      if (millis() - tCheck > tInt) {
         tCheck = millis();
         this.character.type = random();
      }
   }

}
