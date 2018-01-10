/* * * * * * * * * * * * * * * * * * * * * *
Daily sketch #29
22/12/2017
Samuel Mann
   - http://mistermann.me
   - https://www.instagram.com/colakollektiv/
* * * * * * * * * * * * * * * * * * * * * */

var modules = [];
var clusters = [];

var gridSize = 5;


function setup(){
   createCanvas(1000, 1000);
   background(255);

   textAlign(CENTER);

   for (var i = 0; i < gridSize; i++) {
      var posY = i * (height/gridSize);
      for (var j = 0; j < gridSize; j++) {
         var posX = j * (width/gridSize);
         modules.push(new module(posX, posY, width/gridSize, i + 1, j + 1));
      }
   }

   for (var i = 0; i < modules.length; i++) {
      modules[i].computeNeighbors(modules);
   }

   for (var i = 0; i < modules.length; i++) {
      var members = [];
      var clusterID = clusters.length + 1;
      var mod = modules[i];

      createMember(mod, clusterID, members);

      if (members.length > 0) {
         clusters.push(new cluster(members));
      }
   }

   for (var i = 0; i < clusters.length; i++) {
      var f = i * (255/clusters.length);
      // var f = i * (360 / clusters.length);
      // var f = i * (360 / 5);
      var clust = clusters[i];
      for (var j = 0; j < clust.members.length; j++) {
         clust.members[j].f = f;
      }
   }

   for (var i = 0; i < modules.length; i++) {
      modules[i].drawConnections();
   }

   for (var i = 0; i < modules.length; i++) {
      modules[i].show();
   }

}

// BUG: module is duplicated in cluster after inital module.
// This is probably due to the fact I reset the module.cluster to 0.
function createMember(mod, id, tempArray){

   if (mod.cluster == 0 && mod.full == true) {
      mod.cluster = id;
      tempArray.push(mod);
      for (var i = 0; i < mod.neighbors.length; i++) {
         if (mod.neighbors[i].full == true && mod.neighbors[i].cluster == 0) {
            mod.neighbors[i].cluster = id;
            tempArray.push(mod.neighbors[i]);
            mod.neighbors[i].cluster = 0;
            createMember(mod.neighbors[i], id, tempArray);
            // mod.neighbors[i].cluster = id;
         }
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
