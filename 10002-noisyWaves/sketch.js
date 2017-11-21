/* * * * * * * * * * * * * * * * * * * * * *
Daily sketch #2
21/11/2017
Samuel Mann
   - http://mistermann.me
   - https://www.instagram.com/colakollektiv/
* * * * * * * * * * * * * * * * * * * * * */

var waves = [];
var numWaves = 100;
var yStart;

var noiseScale = 0.05;

function setup(){
   var canvas = createCanvas(1000,1000);
   canvas.parent('main');

   background(0);

   yStart = height/3;

   var colorStart = random(360);
   var hue = random(360);

   for (var i = 0; i < numWaves; i++) {
      var c = colorStart + i * (hue/numWaves);
      waves.push(new wave(0, yStart + i * ((height)/numWaves), c, i * random(50), 0.001 - (i * (0.002/numWaves/10))));
   }

   for (var i = 0; i < 1000000; i++) {
      stroke(random(10, 50));
      point(random(width), random(height));
   }
   for (var i = 0; i < 10000; i++) {
      stroke(random(50, 155));
      point(random(width), random(height));
   }
   for (var i = 0; i < 100; i++) {
      stroke(random(150, 255));
      point(random(width), random(height));
   }

   for (var i = 0; i < waves.length; i++) {
      waves[i].show();
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
