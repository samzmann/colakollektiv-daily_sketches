function module(x, y, s, h){
   this.x = x;
   this.y = y;
   this.s = s;
   this.center = createVector(this.x + this.s/2, this.y + this.s/2);
   this.hu = h;

   var numLayers = 4;

   this.layers = [];

   var layerGap = this.s/20;
   var radMax = this.s/2 - layerGap;
   var innerGap = layerGap;
   var radius = radMax;

   var peri = floor(random(10,360));

   var rotation = random(360);
   var rotateForce = random(-2, 2);

   this.pushLayers = function(){
      for (var i = 0; i < numLayers; i++) {
         this.layers.push(new layer(this.center, radius, innerGap, random(0.7*this.hu, 1.3*this.hu)));
         radius -= layerGap + innerGap;
      }
   }

   this.update = function(){
      rotation +=rotateForce;
   }

   this.show = function(){

      for (var i = 0; i < this.layers.length; i++) {
         this.layers[i].show();
         this.layers[i].update();
      }
   }
}
