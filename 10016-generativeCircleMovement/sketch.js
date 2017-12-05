/* * * * * * * * * * * * * * * * * * * * * *
Daily sketch #16
5/12/2017
Samuel Mann
   - http://mistermann.me
   - https://www.instagram.com/colakollektiv/
* * * * * * * * * * * * * * * * * * * * * */

var mod;

function setup(){
   createCanvas(1000, 1000);
   angleMode(DEGREES);
   background(0);

   mod = new module(width/2, height/2, 10);

   for (var i = 0; i < 200000; i++) {
      mod.update();
      mod.show();
   }

}

function draw(){

   // Uncomment for live verion

   // background(0);

   // mod.update();
   // mod.show();

}
