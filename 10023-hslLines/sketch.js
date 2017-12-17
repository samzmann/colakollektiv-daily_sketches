/* * * * * * * * * * * * * * * * * * * * * *
Daily sketch #23
15/12/2017
Samuel Mann
   - http://mistermann.me
   - https://www.instagram.com/colakollektiv/
* * * * * * * * * * * * * * * * * * * * * */

var cols = 5;

var offset = 0;
var inc = 0.05;

function setup(){
   createCanvas(1000, 1000);
   background(0);

   var hu = random(360);


   for (var i = 0; i < cols; i++) {
      var posX = i * (width/cols);
      for (var j = 0; j < height; j++) {
         var posY = j;
         var light = noise(offset) * 100;
         offset += inc;
         strokeHsluv(random(hu*0.7, hu*1.3), 100, light);
         // stroke(noiseVal);
         line(posX, posY, posX + (width/cols), posY);
      }
      hu += 360/cols;
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
