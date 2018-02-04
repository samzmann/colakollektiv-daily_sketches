function module(x, y, s, h){
   this.x = x;
   this.y = y;
   this.s = s;
   this.hu = h;

   this.center = createVector(this.x + this.s/2, this.y + this.s/2);

   this.shapes = [];

   var maxShapes = 5;

   var tCheck = millis();
   var tInt = random(50,500);

   this.show = function(){
      for (var i = 0; i < this.shapes.length; i++) {
         this.shapes[i].show();
      }
   }

   this.update = function(){
      this.hu += 1;
      if (this.hu > 360) {
         this.hu = 0;
      }
      for (var i = 0; i < this.shapes.length; i++) {
         var shp = this.shapes[i];
         if (shp.s <= this.s) {
            // shp.s++;
            shp.s+=0.5;
         }
         else {
            // shp.alpha-=0.015;
            shp.alpha-=0.04;
            if (shp.alpha<0) {
               this.shapes.splice(i,1);
            }
         }
      }
      this.pushShape();
   }

   this.pushShape = function(){
      if (this.shapes.length < maxShapes) {
         if (millis() - tCheck > tInt) {
            tCheck = millis();
            tInt = random(200,2000);
            this.shapes.push(new shape(this.center, this.s, random(0.7*this.hu,1.3*this.hu)));
         }
      }
   }

}
