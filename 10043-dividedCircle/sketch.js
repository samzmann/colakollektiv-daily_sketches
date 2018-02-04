/* * * * * * * * * * * * * * * * * * * * * *
Daily sketch #43
4/02/2018
Samuel Mann
   - http://mistermann.me
   - https://www.instagram.com/colakollektiv/
* * * * * * * * * * * * * * * * * * * * * */

var modules = [];
var grid;

var hu;

var offset = 0;
var inc = 0.05;

function setup(){
   createCanvas(1000, 1000);
   background(0);

   angleMode(DEGREES);

   grid = new grid(0,0,3,width);

   hu = random(360);

   for (var i = 0; i < grid.blocks.length; i++) {
      var b = grid.blocks[i];
      modules.push(new module(b.x, b.y, b.s, hu));
   }

   for (var i = 0; i < modules.length; i++) {
      modules[i].pushLayers();
   }

}

function draw(){

   var a = noise(offset) * 20;
   offset+=inc;
   // console.log(a);

   // background(0);
   fill(0, a);
   rect(0,0,width, height);

   for (var i = 0; i < modules.length; i++) {
      modules[i].show();
      modules[i].update();
   }

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
