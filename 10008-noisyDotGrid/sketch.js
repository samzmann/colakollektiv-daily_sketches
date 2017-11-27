/* * * * * * * * * * * * * * * * * * * * * *
Daily sketch #8
27/11/2017
Samuel Mann
   - http://mistermann.me
   - https://www.instagram.com/colakollektiv/
* * * * * * * * * * * * * * * * * * * * * */

var dots = [];
var gridSize = 100;

var offset = 0;
var inc = 0.05;

var radius;

function setup(){
   var canvas = createCanvas(1000,1000);
   canvas.parent('main');

   background(0);

   radius = width/gridSize/2;

   rectMode(CENTER);

   for (var i = 0; i < gridSize; i++) {
      var posY = i * (height/gridSize) + (height/gridSize/2);
      for (var y = 0; y < gridSize; y++){
         var posX = y * (width/gridSize) + (width/gridSize/2);
         var noiseVal = noise(offset) * radius;
         offset += inc;
         var h = map(noiseVal, 0, radius, 0, 360);
         dots.push(new module(posX, posY, noiseVal, h));
      }
   }

   for (var i = 0; i < dots.length; i++) {
      dots[i].show();
   }




}

function draw(){

   // Uncomment for active version:

   // background(0);

   // for (var i = 0; i < dots.length; i++) {
   //    dots[i].update();
   //    dots[i].show();
   // }

}

// ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** **
// ** ** ** ** ** ** ** ** ** ** ** ** ** ** ** **

function fillHsluv(h, s, l) {
  var rgb = hsluv.hsluvToRgb([h, s, l]);
  fill(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255);
}
function strokeHsluv(h, s, l) {
  var rgb = hsluv.hsluvToRgb([h, s, l]);
  stroke(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255);
}
