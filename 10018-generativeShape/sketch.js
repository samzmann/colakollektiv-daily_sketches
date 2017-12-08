/* * * * * * * * * * * * * * * * * * * * * *
Daily sketch #18
8/12/2017
Samuel Mann
   - http://mistermann.me
   - https://www.instagram.com/colakollektiv/
* * * * * * * * * * * * * * * * * * * * * */
var offset = 0;
var offinc = 0.05;
var rotation = 100;
var mod;

function setup(){
   createCanvas(1000, 1000);
   background(0);

   // Place at 0,0 for animation
   // mod = new module(0, 0);

   mod = new module(width/2, height/2);

   for (var i = 0; i < 1500; i++) {
      mod.update();
   }

   mod.show();

}

function draw(){

   // Uncomment for live verion

   // noiseVal = noise(offset) * rotation;
   //
   // push();
   //
   // translate(width/2, height/2);
   // rotate(radians(rotation));
   //
   // background(0);
   //
   // mod.update();
   // mod.show();
   //
   // pop();
   //
   // offset += offinc;
   // rotation+=2;
}
