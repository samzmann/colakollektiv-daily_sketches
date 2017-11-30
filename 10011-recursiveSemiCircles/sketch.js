/* * * * * * * * * * * * * * * * * * * * * *
Daily sketch #11
30/11/2017
Samuel Mann
   - http://mistermann.me
   - https://www.instagram.com/colakollektiv/
* * * * * * * * * * * * * * * * * * * * * */

var modules = [];

var hu;

function setup(){
   var canvas = createCanvas(1000,1000);
   canvas.parent('main');

   background(0);

   ellipseMode(CORNER);

   hu = random(360);

   placeShape(0, 0, width, height);

   for (var i = 0; i < modules.length; i++) {
      modules[i].show();
   }

}

function placeShape(x,y,w,h){
   var rand = random();
   if (rand < 0.25) {
      modules.push(new module(x,y,w*2,floor(random(4)), random(0.7*hu, 1.3*hu), 5));
   }
   else {
      if (w > 4){
         placeShape(x, y, w/2, h/2);
         placeShape(x + w, y, w/2, h/2);
         placeShape(x, y + h, w/2, h/2);
         placeShape(x + w, y + h, w/2, h/2);
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
