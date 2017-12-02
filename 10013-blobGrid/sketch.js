/* * * * * * * * * * * * * * * * * * * * * *
Daily sketch #13
2/12/2017
Samuel Mann
   - http://mistermann.me
   - https://www.instagram.com/colakollektiv/
* * * * * * * * * * * * * * * * * * * * * */

var modules = [];
var gridSize = 10;

function setup(){
   var canvas = createCanvas(1000,1000);
   canvas.parent('main');

   background(0);
   angleMode(DEGREES);

   var h = random(360);

      for (var i = 0; i < gridSize; i++) {
         var posY = i * (height/gridSize);
         for (var y = 0; y < gridSize; y++){
            var posX = y * (width/gridSize);
            noStroke();
            modules.push(new module(posX, posY, width/gridSize, random(0.7*h, 1.3*h)));
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
