/* * * * * * * * * * * * * * * * * * * * * *
Daily sketch #24
17/12/2017
Samuel Mann
   - http://mistermann.me
   - https://www.instagram.com/colakollektiv/
* * * * * * * * * * * * * * * * * * * * * */

var modules = [];

var gridSize = 10;
var maxPts;

var offset = 0;
var inc = 0.05;

function setup(){
   createCanvas(1000, 1000);
   background(0);

   var hu = random(360);
   maxPts = random(50000);
   console.log(maxPts);

   for (var i = 0; i < gridSize; i++) {
      var posX = i * (height/gridSize);
      for (var j = 0; j < gridSize; j++) {
         var posY = j * (width/gridSize);
         var pts = noise(offset) * maxPts;
         offset += inc;
         modules.push(new module(posX, posY, width/gridSize, pts, random(0.7*hu, 1.3*hu)));
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
