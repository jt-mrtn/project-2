// Data Viz

// declare and initialize variables
let place, towns, spotColor;
let spots = [];
let decade = 0;
let decadeText = "1960's";

// load data
function preload() {
  place = loadTable("cities.csv", "csv", "header");
  towns = loadTable("towns.csv", "csv", "header");
}

// set up canvas and array of objects
function setup() {
  createCanvas(1400, 700);
  rectMode(CENTER);
  textFont("Industrial");
  textAlign(CENTER);
  spotColor = color(255, 120);

  for (let i = 0; i < towns.getRowCount(); i++) {
    let x = towns.getNum(i, "lng");
    let y = towns.getNum(i, "lat");
    let year = towns.getNum(i, "year");
    spots.push(new Spot(x, y, year));
  }
}

// draw shapes & text
function draw() {
  let bgColor = color(20, 60, 96);
  background(bgColor);
  // set up colors & elements
  let a, b, c;
  spotColor.setGreen(128 + 128 * sin(millis() / 1000));

  if (decade == 0) {
    // avocado green / 60's
    c = color(117, 140, 51);
    a = 199; // y coordinate and
    b = 9; // height for graph
  } else if (decade == 1) {
    // lava lamp glo orange / 70's
    c = color(253, 77, 46);
    a = 182;
    b = 26;
  } else if (decade == 2) {
    // pacman yellow / 80's
    c = color(249, 235, 15);
    a = 139;
    b = 69;
  } else if (decade == 3) {
    // oprah's couch burnt orange / 90's
    c = color(177, 58, 26);
    a = 106;
    b = 102;
  } else if (decade == 4) {
    // limewire green / 00's
    c = color(35, 213, 19);
    a = 85;
    b = 123;
  } else if (decade == 5) {
    // social bubble blue / 10's
    c = color(0, 129, 254);
    a = 55;
    b = 153;
  } else if (decade == 6) {
    // one million likes majenta / 20's
    c = color(254, 28, 255);
    a = 45;
    b = 163;
  }

  // viz text
  textSize(26);
  fill(35, 178, 254, a - 50);
  noStroke();
  text(`Click your mouse to see where I've lived or visited.`, width / 2, 45);
  fill(c);
  textSize(30);
  text(decadeText, width / 2, height - 45);

  // graph upper right
  rectMode(CORNER);
  noFill();
  stroke(c);
  strokeWeight(1);
  rect(width - 40, 45, 15, 163);
  fill(c);
  noStroke();
  rect(width - 40, a, 15, b);
  stroke(bgColor);
  strokeWeight(0.5);
  noFill();
  for (let i = 58; i <= 158; i += 50) {
    line(width - 38, i, width - 27, i);
  }
  // graph text
  textSize(16);
  noStroke();
  fill(c);
  text("150", width - 55, 63);
  text("100", width - 55, 113);
  text("50", width - 55, 163);

  // page frame
  stroke(35, 178, 254, 230);
  strokeWeight(0.5);
  line(10, 10, width - 10, 10);
  line(width - 10, 10, width - 10, height - 10);
  line(10, height - 10, width - 10, height - 10);
  line(10, 10, 10, height - 10);

  // background USA cities
  noStroke();
  rectMode(CENTER);
  translate(-70, -170);
  scale(3);
  fill(35, 178, 254, 190);
  for (let i = 0; i < place.getRowCount(); i++) {
    let longitude = place.getNum(i, "lng");
    let latitude = place.getNum(i, "lat");
    setXY(longitude, latitude);
  }

  // stationery spots overlay
  for (let i = 0; i < towns.getRowCount(); i++) {
    fill(spotColor);
    noStroke();
    let longitude = towns.getNum(i, "lng");
    let latitude = towns.getNum(i, "lat");
    let year = towns.getNum(i, "year");
    if (decade == 0 && year < 1970) {
      setXY2(longitude, latitude, year);
    } else if (decade == 1 && year < 1980) {
      setXY2(longitude, latitude, year);
    } else if (decade == 2 && year < 1990) {
      setXY2(longitude, latitude, year);
    } else if (decade == 3 && year < 2000) {
      setXY2(longitude, latitude, year);
    } else if (decade == 4 && year < 2010) {
      setXY2(longitude, latitude, year);
    } else if (decade == 5 && year < 2020) {
      setXY2(longitude, latitude, year);
    } else if (decade == 6 && year < 2030) {
      setXY2(longitude, latitude, year);
    }
  }

  // moving spots overlay
  stroke(spotColor);
  noFill();
  for (let i = 0; i < spots.length; i++) {
    spots[i].update();
    spots[i].render();
  }
}

function setXY(lng, lat, look) {
  let x = map(lng, -180, 180, 0, width);
  let y = map(lat, 90, -90, 0, height);
  // pinpoint cities become abstracted
  rect(x, y, decade + 1, 0.25);
}

//stationery spots
function setXY2(lng, lat, yr) {
  let x = map(lng, -180, 180, 0, width);
  let y = map(lat, 90, -90, 0, height);
  let year = yr;
  star(x, y, 1, 3, 7);
}

// create moving spot objects
class Spot {
  constructor(x, y, yr) {
    this.x = map(x, -180, 180, 0, width);
    this.y = map(y, 90, -90, 0, height);
    this.speed = 0.15;
    this.year = yr;
  }

  update() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  render() {
    // set up decade logic to discern locations
    if (decade == 0 && this.year < 1970) {
      star(this.x, this.y, 1, 3, 7);
    } else if (decade == 1 && this.year < 1980) {
      star(this.x, this.y, 1, 3, 7);
    } else if (decade == 2 && this.year < 1990) {
      star(this.x, this.y, 1, 3, 7);
    } else if (decade == 3 && this.year < 2000) {
      star(this.x, this.y, 1, 3, 7);
    } else if (decade == 4 && this.year < 2010) {
      star(this.x, this.y, 1, 3, 7);
    } else if (decade == 5 && this.year < 2020) {
      star(this.x, this.y, 1, 3, 7);
    } else if (decade == 6 && this.year < 2030) {
      star(this.x, this.y, 1, 3, 7);
    }
  }
}

function mousePressed() {
  // advance decade
  decade++;
  if (decade > 6) {
    decade = 0;
    decadeText = "1960's";
  } else if (decade == 1) {
    decadeText = "1970's";
  } else if (decade == 2) {
    decadeText = "1980's";
  } else if (decade == 3) {
    decadeText = "1990's";
  } else if (decade == 4) {
    decadeText = "2000's";
  } else if (decade == 5) {
    decadeText = "2010's";
  } else if (decade == 6) {
    decadeText = "2020's";
  }
}

// set up star shape
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
