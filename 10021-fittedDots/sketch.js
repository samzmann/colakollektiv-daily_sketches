/* * * * * * * * * * * * * * * * * * * * * *
Daily sketch #21
11/12/2017
Samuel Mann
   - http://mistermann.me
   - https://www.instagram.com/colakollektiv/
* * * * * * * * * * * * * * * * * * * * * */

var sizeY = 50;
var maxDensity = 100;

var offset = 0;
var inc = 0.05;

function setup(){
   createCanvas(1000, 1000);
   background(0);

   var margin = width / sizeY;
   var gap = width-margin;

   var h = random(360);

   noStroke();

   for (var i = 0; i < sizeY; i++) {
      var posY = i * (height/sizeY) + (margin/2);
      var density = floor(random(maxDensity*0.5, maxDensity));
      var center = createVector(width/2, posY);
      for (var j = 0; j < density; j++) {
         var posX = j * (gap/(density-1)) + (margin/2);
         var dot = createVector(posX, posY);
         var d = p5.Vector.dist(center, dot);
         var r = map(d, 0, width/2, 9, 3);
         var noiseVal = noise(offset) * h;
         offset += inc;
         fillHsluv(noiseVal, 100, 50);
         ellipse(dot.x, dot.y, r);
      }
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
