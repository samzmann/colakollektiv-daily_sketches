function module(x, y, w, h, id, hu){
   this.x = x;
   this.y = y;
   this.w = w;
   this.h = h;
   this.colID = id;
   this.hu = hu;
   this.isFullVisible = false;

   var speed = random(2,10);

   this.calcWidth = function(){
      for (var i = 0; i < this.cols.length; i++) {
         this.w += this.cols[i].w;
      }
   }

   this.calcPos = function(){

   }

   this.update = function(arr){
      this.y -= speed;
      if (this.y < this.h + height && arr[this.colID].mods.length < 2) {
         arr[this.colID].free = true;
      }
      if (this.y + this.h < height) {
         this.isFullVisible = true;
      }
   }

   this.show = function(){
      noStroke();
      fillHsluv(this.hu, 100, 50);
      rect(this.x, this.y, this.w, this.h);
   }
}
