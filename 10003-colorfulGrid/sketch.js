/* * * * * * * * * * * * * * * * * * * * * *
Daily sketch #3
22/11/2017
Samuel Mann
   - http://mistermann.me
   - https://www.instagram.com/colakollektiv/
* * * * * * * * * * * * * * * * * * * * * */

var blocks = [];
var gridSize = 100;
var numBlocks = gridSize * gridSize;

var offset = 0;
var inc = 0.005;

var h = 250;

function setup(){
   var canvas = createCanvas(1000,1000);
   canvas.parent('main');

   background(0);

   for (var i = 0; i < gridSize; i++) {
      var posY = i * (width/gridSize);
      for (var y = 0; y < gridSize; y++) {
         var posX = y * (height/gridSize);
         var noiseVal = noise(offset) * 50;
         blocks.push(new block(posX, posY, width/gridSize, height/gridSize, random(0.8*h,1.2*h)));
         offset += inc;
         h += (100/numBlocks);
      }
   }

   for (var i = 0; i < blocks.length; i++) {
      blocks[i].show();
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
