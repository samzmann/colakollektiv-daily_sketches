/* * * * * * * * * * * * * * * * * * * * * *
Daily sketch #36
15/01/2018
Samuel Mann
   - http://mistermann.me
   - https://www.instagram.com/colakollektiv/
* * * * * * * * * * * * * * * * * * * * * */

var modules = [];
var gridSz = 50;

var hu;

var offset1;
var offset2;
var inc = 0.05;

function setup(){
   createCanvas(1000, 1000);
   background(0);

   hu = random(360);

   offset1 = random(1000);
   offset2 = random(1000);

   for (var i = 0; i < gridSz; i++) {
      var posY = i * (height/gridSz);
      var backVal = noise(offset1) * 80 - 20;
      offset1 += inc;
      for (var j = 0; j < gridSz; j++) {
         var posX = j * (width/gridSz);
         var strokeVal = noise(offset2) * hu;
         // var strokeVal = noise(offset2) * 255;
         offset2 += inc;
         modules.push(new module(posX, posY, width/gridSz, backVal, strokeVal));
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
