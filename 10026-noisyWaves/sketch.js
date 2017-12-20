/* * * * * * * * * * * * * * * * * * * * * *
Daily sketch #26
19/12/2017
Samuel Mann
   - http://mistermann.me
   - https://www.instagram.com/colakollektiv/
* * * * * * * * * * * * * * * * * * * * * */

var modules = [];
var numShapes = 10;
var start;
var hu;

var capture = 0;

function setup(){
   createCanvas(1000, 1000);
   background(0);

   start = height/numShapes/2;

   hu = random(360);

   for (var i = 0; i < numShapes; i++) {
      var r = random(0.5* hu, 1.5 * hu);
      modules.push(new module(0, i * (height/numShapes) + start, width, height/(numShapes), r));
   }

   for (var i = 0; i < modules.length; i++) {
      modules[i].computeCurve();
      modules[i].show();
   }

}

function draw(){

   // // Uncomment for live version

   // background(0);
   //
   // for (var i = 0; i < modules.length; i++) {
   //    modules[i].update();
   //    modules[i].show();
   // }

   // // if (capture < 500) {
   // //    saveCanvas();
   // // }
   // // capture++;

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
