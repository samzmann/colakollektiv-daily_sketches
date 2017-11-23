/* * * * * * * * * * * * * * * * * * * * * *
Daily sketch #4
23/11/2017
Samuel Mann
   - http://mistermann.me
   - https://www.instagram.com/colakollektiv/
* * * * * * * * * * * * * * * * * * * * * */

var layers = [];
var numLayers = 200;
var detail = 500;

function setup(){
   var canvas = createCanvas(1000,1000);
   // var canvas = createCanvas(windowWidth,windowHeight);
   canvas.parent('main');

   background(0);

   for (var i = 0; i < numLayers; i++) {
      layers.push(new layer(i * (255/numLayers), i * (detail/numLayers)));
   }

   for (var i = 0; i < layers.length; i++) {
      layers[i].show();
   }

}

function draw(){

}
