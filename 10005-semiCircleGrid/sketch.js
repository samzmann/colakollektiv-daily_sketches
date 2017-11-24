/* * * * * * * * * * * * * * * * * * * * * *
Daily sketch #5
24/11/2017
Samuel Mann
   - http://mistermann.me
   - https://www.instagram.com/colakollektiv/
* * * * * * * * * * * * * * * * * * * * * */

var modules = [];
var gridSize = 20;
var numModules = gridSize * gridSize;

function setup(){
   var canvas = createCanvas(1000,1000);
   canvas.parent('main');

   background(0);

   for (var i = 0; i < gridSize; i++) {
      posY = i * (height/gridSize);
      for (var y = 0; y < gridSize; y++) {
         posX = y * (width/gridSize);
         modules.push(new module(posX, posY, width/gridSize, floor(random(4)), 20, 5));
      }
   }

   for (var i = 0; i < modules.length; i++) {
      modules[i].show();
   }

}

function draw(){

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
