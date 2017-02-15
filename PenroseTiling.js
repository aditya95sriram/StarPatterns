function PenroseTiling(r) {
  this.polys = [];

  this.buildCell = function(x, y) {
    var sides = 6;
    var p = new Polygon(sides);
    // rotate 360 degrees around the clock in 60 degree increments
    var inc = (2 * Math.PI) / sides;
    for (var index = 0; index < sides; index++){
      // angular to cartesian
      var θ = (index * inc) - inc / 2;
      var vX = x + (r-10) * Math.cos(θ);
      var vY = y + (r-10) * Math.sin(θ);
      p.addVertex(vX, vY);
    }
    p.close();
    this.polys.push(p);
  }

  // http://preshing.com/20110831/penrose-tiling-explained/
  // https://github.com/mdchaney/jsmaze
  this.buildGrid = function() {
    var h = r * 2;
    var w = (sqrt(3) / 2) * h;
    var inc = 3 * (h / 4);
    // TODO: get dimensions from somewhere
    var row = 0;
    for (var y = -h / 2; y < 400 + h/2; y += inc) {
      var startX = ((row % 2) == 0) ? -w : -w / 2;
      for (var x = startX; x < 400; x += w) {
        this.buildCell(x, y);
        console.log("penrose", x, y);
      }
      row++;
    }

  }

}
