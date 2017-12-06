/* * * * * * * * * * * * * * * * * * * * * *
Daily sketch #17
6/12/2017
Samuel Mann
   - http://mistermann.me
   - https://www.instagram.com/colakollektiv/
* * * * * * * * * * * * * * * * * * * * * */

var mod;

function setup(){
   createCanvas(1000, 1000);
   // angleMode(DEGREES);
   background(0);

   mod = new module(width/2, height/2);

   for (var i = 0; i < 1500; i++) {
      mod.update();
   }

   mod.show();

}

function draw(){

   // Uncomment for live verion

   // background(0);
   //
   // mod.update();
   // mod.show();

}
