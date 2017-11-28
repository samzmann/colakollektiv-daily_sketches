/* * * * * * * * * * * * * * * * * * * * * *
Daily sketch #9
28/11/2017
Samuel Mann
   - http://mistermann.me
   - https://www.instagram.com/colakollektiv/
* * * * * * * * * * * * * * * * * * * * * */

function setup(){
   var canvas = createCanvas(1000,1000);
   canvas.parent('main');

   background(0);

   d1 = new module(width/2, height/2, 2, 0);

}

function draw(){

   // background(0);

   d1.update();
   d1.show();

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
