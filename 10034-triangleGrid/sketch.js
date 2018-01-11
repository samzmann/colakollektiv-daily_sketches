/* * * * * * * * * * * * * * * * * * * * * *
Daily sketch #34
11/01/2018
Samuel Mann
   - http://mistermann.me
   - https://www.instagram.com/colakollektiv/
* * * * * * * * * * * * * * * * * * * * * */

var modules = [];
var gridSize = 20;

var hu;
var huVariance;

function setup(){
   createCanvas(1000, 1000);
   background(0);
   noStroke();

   hu = random(360);
   huVariance = random(360);

   for (var i = 0; i < gridSize; i++) {
      var posY = i * (height/gridSize);
      fillHsluv(hu + i * (huVariance/gridSize), 100, 50);
      rect(0, posY, width, height/gridSize);
      for (var j = 0; j < gridSize; j++) {
         var posX = j * (width/gridSize);
         modules.push(new module(posX, posY, width/gridSize));
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
