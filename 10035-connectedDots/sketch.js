/* * * * * * * * * * * * * * * * * * * * * *
Daily sketch #35
14/01/2018
Samuel Mann
   - http://mistermann.me
   - https://www.instagram.com/colakollektiv/
* * * * * * * * * * * * * * * * * * * * * */

var modules = [];
var distances = [];
var numMods = 50;

var hu;
var huVariance;

function setup(){
   createCanvas(1000, 1000);
   background(0);

   hu = random(360);
   huVariance = random(360);

   for (var i = 0; i < numMods; i++) {
      modules.push(new module(random(width), random(height)));
   }

}

function draw(){

   // background(0);
   fill(0, 20);
   rect(0,0,width, height);

   calcDist(modules);

   hu += 1;

   for (var i = 0; i < modules.length; i++) {
      var m = modules[i];
      m.show();
      m.update();
   }

}

function calcDist(arr){
   for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr.length; j++) {
         var d = p5.Vector.dist(arr[i].pos, arr[j].pos)
         // var s = map(d, 0, width, 255, 50);
         // var s = map(d, 0, width, hu, hu+huVariance);
         var s = map(d, 0, width/5, hu, hu+huVariance);
         var w = map(d, 0, width, 6, 2);
         strokeWeight(w);
         // stroke(s, 0, 100, 255);
         strokeHsluv(s, 100, 60);
         if (d < width/5) {
               line(arr[i].pos.x, arr[i].pos.y, arr[j].pos.x, arr[j].pos.y);
         }

      }
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
