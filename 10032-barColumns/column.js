function column(x, y, w, h, id){
   this.x = x;
   this.y = y;
   this.w = w;
   this.h = h;
   this.id = id;
   this.mods = [];

   var colr = random(255);

   this.free = true;

   this.acceptModule = function(hu){
      if (this.mods.length == 0) {
         var rand = random();
         if (this.free == true && rand > 0.99){
            var mod = new module(this.x, this.y + this.h, this.w, random(5, height), this.id, random(0.7*hu, 1.3*hu));
            this.mods.push(mod)
            this.free = false;
         }
      }
      else {
         var tempCalcVisible = 0;
         for (var i = 0; i < this.mods.length; i++) {
            if (this.mods[i].isFullVisible == false) {
               tempCalcVisible += 1;
            }
            if (this.mods[i].y < -this.mods[i].h) {
               this.mods.splice(i, 1);
               console.log("deleted module");
            }
         }
         if (tempCalcVisible == 0) {
            var rand = random();
            if (this.free == true && rand > 0.99){
               var mod = new module(this.x, this.y + this.h, this.w, random(5, height), this.id, random(0.7*hu, 1.3*hu));
               this.mods.push(mod)
               this.free = false;
            }
         }
      }
   }

   this.show = function(){
      fill(colr);
      noStroke();
      rect(this.x, this.y, this.w, this.h);
   }
}
