function module(x, y, s, h){
   this.x = x;
   this.y = y;
   this.s = s;
   this.h = h;

   var numBars = floor(random(2,6));

   var rand = random();

   this.show = function(){

      noStroke();

      for (var i = 0; i < numBars; i++) {
         var hu = this.h + i * 20;
         fillHsluv(hu, 100, 50);
         if (rand < 0.5){
            posX = this.x;
            posY = this.y + i * (this.s/numBars);
            rect(posX, posY, this.s, this.s/numBars);
         }
         else {
            posX = this.x + i * (this.s/numBars);
            posY = this.y;
            rect(posX, posY, this.s/numBars, this.s);
         }
      }

   }
}
