/* * * * * * * * * * * * * * * * * * * * * *
Daily sketch #19
9/12/2017
Samuel Mann
   - http://mistermann.me
   - https://www.instagram.com/colakollektiv/
* * * * * * * * * * * * * * * * * * * * * */

var modules = [];
var gridSize = 100;
var offset = 0;
var inc = 0.05;

function setup(){
   createCanvas(1000, 1000);
   background(0);

   for (var i = 0; i < gridSize; i++) {
         var posY = i * (height/gridSize);
         for (var y = 0; y < gridSize; y++){
            var posX = y * (width/gridSize);
            var noiseVal = noise(offset) * (width/gridSize);
            var c = map(noiseVal, 0, width/gridSize, 0, 360);
            modules.push(new module(posX, posY, width/gridSize, noiseVal, c));
            offset += inc;
         }
      }

   for (var i = 0; i < modules.length; i++) {
      modules[i].show();
   }

}

function draw(){

   // Uncomment for live version

   // background(0);
   //
   // for (var i = 0; i < modules.length; i++) {
   //    modules[i].update();
   //    modules[i].show();
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
