function module(x, y, s, hu){
   this.x = x;
   this.y = y;
   this.s = s;
   this.hu = hu;

   var numBars = 4;

   this.show = function(){

      var rand = random();

      if (rand < 0.5){
         this.drawModule(0);

      }
      else {
         this.drawModule(1);
      }

   }

   this.drawModule = function(x){

      noStroke();

      var c = 0;

      for (var i = 0; i < numBars; i++) {
         if (c % 2 == 0){
            fill(0);
         }
         else{
            // fill(255);
            fillHsluv(this.hu, 100, 50);
         }

         if (x == 0) {
            var posX = i * (this.s/numBars);
            var posY = this.y;
            rect(this.x + posX, posY, this.s/numBars, this.s);
         }
         else{
            var posX = this.x;
            var posY = i * (this.s/numBars);
            rect(posX, this.y + posY, this.s, this.s/numBars);
         }

         c++;
      }
   }
}
