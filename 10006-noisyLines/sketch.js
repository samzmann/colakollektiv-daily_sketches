/* * * * * * * * * * * * * * * * * * * * * *
Daily sketch #6
25/11/2017
Samuel Mann
   - http://mistermann.me
   - https://www.instagram.com/colakollektiv/
* * * * * * * * * * * * * * * * * * * * * */

var lines = [];
var numLines = 500;

function setup(){
   var canvas = createCanvas(1000,1000);
   canvas.parent('main');

   background(0);

   for (var i = 0; i < numLines; i++) {
      lines.push(new module(i / 2, i * (5*height/numLines) + 2, random(1,5)));
   }

   for (var i = 0; i < lines.length; i++) {
      lines[i].show();
   }

}

function draw(){

}
