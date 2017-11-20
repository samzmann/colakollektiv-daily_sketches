/* * * * * * * * * * * * * * * * * * * * * *
Daily sketch #1
20/11/2017
Samuel Mann
   - http://mistermann.me
   - https://www.instagram.com/colakollektiv/
* * * * * * * * * * * * * * * * * * * * * */

var hills = [];
var numHills = 100;
var yStart;

var noiseScale = 0.02;

function setup(){
   var canvas = createCanvas(1000,1000);
   canvas.parent('main');

   background(0);

   yStart = height/3;

   var colorStart = random(360);
   var hue = random(360);

   for (var i = 0; i < numHills; i++) {
      var c = colorStart + i * (hue/numHills);
      hills.push(new hill(0, yStart + i * ((height)/numHills), c, i * random(50), 0.001 - (i * (0.002/numHills/10))));
   }

   for (var i = 0; i < hills.length; i++) {
      hills[i].show();
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
