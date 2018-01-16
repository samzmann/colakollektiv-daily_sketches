function module(x, y, s, f1, f2){
   this.x = x;
   this.y = y;
   this.s = s;
   this.f1 = f1;
   this.f2 = f2;

   this.nw = createVector(this.x, this.y);
   this.ne = createVector(this.x + this.s, this.y);
   this.se = createVector(this.x + this.s, this.y + this.s);
   this.sw = createVector(this.x, this.y + this.s);

   this.outer = [this.nw, this.ne, this.se, this.sw];
   this.outerTemp = [this.nw, this.ne, this.se, this.sw];

   this.nwI = createVector(this.x + this.s*0.33, this.y + this.s*0.33);
   this.neI = createVector(this.x + this.s * 0.66, this.y + this.s*0.33);
   this.seI = createVector(this.x + this.s * 0.66, this.y + this.s * 0.66);
   this.swI = createVector(this.x + this.s * 0.33, this.y + this.s * 0.66);

   this.inner = [this.nwI, this.neI, this.seI, this.swI];

   var oTemp = floor(random(this.outer.length));
   this.outerTemp.splice(oTemp, 1);
   var pO = this.outer[oTemp];
   var pI = this.inner[floor(random(this.inner.length))];
   var pF = this.outerTemp[floor(random(this.outerTemp.length))];

   this.show = function(){
      // noStroke();
      // fill(this.f1);
      // rect(this.x, this.y, this.s, this.s);
      // stroke(this.f2, 50, 255 - this.f2);
      strokeHsluv(this.f2, 100, 50);
      // stroke(255);
      strokeWeight(3);
      strokeCap(PROJECT);

      line(pO.x, pO.y, pI.x, pI.y);
      line(pI.x, pI.y, pF.x, pF.y);


   }
}
