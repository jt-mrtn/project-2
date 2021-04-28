// Wicket Creatures

// animation variables
let cAngle = 0.0;
let fAngle = 0.0;
let scaler = 0;
let a = 30;
let purpOver = false;
let blueOver = false;
let mallet;
// creature variables
let c0, c1, c2;
let circles = [];
let wickets = [];
// background variables
let bgPurp, bgBlue, bgR, bgG, bgB, r, g, b;
// button variables
let bPt, bBt, slider, sliderVal;
///blue
let bX = 76;
let bY = 116;
let bW = 30;
let bH = 120;
///purple
let pX = 35;
let pY = 30;
let pW = 30;
let pH = 155;

function preload() {
  mallet = loadImage("mallet.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);

  // bouncing circles
  for (let i = 0; i < 6; i++) {
    circles[i] = new Circle(
      random(width),
      random(height),
      random(13, 90),
      random(13, 90)
    );
  }

  // wickets
  for (let i = 0; i < 90; i++) {
    wickets[i] = new Wicket(
      random(-100, width),
      random(0, height),
      random(2, 40),
      random(20)
    );
  }

  slider = createSlider(0, 200, 0);
  slider.position(35, height - 60);
  c0 = new Creature(0, 0, 410);
  c1 = new Creature(0, 0, 280);
  c2 = new Creature(0, 0, 190);
  bPt = color(222, 25, 255); // button purple text
  bBt = color(0, 117, 255); // button blue text
  bgPurp = new Button(pX, pY, pW, pH, bPt, ` p\n u\n R\n P\n L\n e`);
  bgBlue = new Button(bX, bY, bW, bH, bBt, ` b\n L\n U\n e`);
  textFont("Industrial");
  bgR = 0;
  bgG = 0;
  bgB = 0;
}

function draw() {
  let x = width / 2;
  let y = height / 2;
  let sinval = sin(cAngle);
  let r = map(sinval, -1, 1, 0, bgR);
  let g = map(sinval, -1, 1, 0, bgG);
  let b = map(sinval, -1, 1, 0, bgB);
  let red = map(sinval, -1, 1, 0, 116);
  let green = map(sinval, -1, 1, 0, 84);
  let blue = map(sinval, -1, 1, 0, 134);
  cAngle += 0.05;
  fAngle += 0.2; //0.18
  sliderVal = slider.value();
  background(r, g, b);

  push();
  translate(width / 2, height / 2);
  rotate(fAngle);
  // stroke(237, 125, 49, 170 - blue);
  stroke(254, 191, 104, 170 - blue);
  strokeWeight(1);
  noFill();
  c0.display();

  stroke(bgR, 0 + blue, bgB, 140 - blue * 0.8); //255,0,255
  c1.display();

  stroke(254, 191, 104, 110 - blue * 0.7);
  c2.display();
  pop();

  // background expanding stationary circles
  stroke(0 + sliderVal, 0, 0 + sliderVal, 200 - green); // black to magenta
  strokeWeight(green / 5);
  noFill();
  ellipse(x, y, red, red);
  ellipse(x, y, green * 2, green * 2);
  ellipse(x, y, blue * 1.64, blue * 1.64);

  stroke(255, 0, 255, 90 - green); // magenta
  ellipse(x, y, 365 - blue * 2.7, 365 - blue * 2.7);

  stroke(15, 203, 19, 110 - blue); // bright green
  ellipse(x, y, 320 - blue * 2.4, 320 - blue * 2.4);

  strokeWeight(green / 6);
  stroke(237, 125, 49, 155 - blue * 1.85); // orange
  ellipse(x, y, 590 - blue * 4.4, 590 - blue * 4.4);
  ellipse(x, y, 500 - blue * 3.73, 500 - blue * 3.73);
  ellipse(x, y, 410 - blue * 3, 410 - blue * 3);

  // dots
  for (let i = 0; i < 3; i++) {
    let j = random(width);
    let k = random(height);
    let l = random(255);
    noStroke();
    fill(50 + l, 255 - l, 0, l);
    ellipse(j, k, 13, 13);

    // echoing center circles
    noFill();
    stroke(0, 0 + sliderVal, 0, 84 - green); // black to green
    strokeWeight(green / 5);
    ellipse(k * 2, j * 0.5, red, red);
    ellipse(k * 2, j * 0.5, green * 2, green * 2);
    ellipse(k * 2, j * 0.5, blue * 1.64, blue * 1.64);
  }

  // p5.js drawn objects
  for (let i = 0; i < 3; i++) {
    let j = random(width);
    let k = random(height);
    let m = random(200);

    stroke(15, 203, 19, 0 + green); //bright green
    strokeWeight(2);
    noFill();
    ellipse(j, k, 20 + m, 20 + m);

    stroke(255, 0, 255, 0 + green); //magenta
    strokeWeight(1);
    for (let i = 30; i <= 80; i += 10) {
      ellipse(j, k, i + m, i + m);
    }

    stroke(237, 125, 49, 0 + green); //orange
    for (let i = 50; i <= 110; i += 10) {
      ellipse(j, k, i + m, i + m);
    }
  }

  //bouncing circles
  noFill();
  stroke(0, 0 + sliderVal, 0, 168 - green); // black to green
  strokeWeight(green / 7);
  for (let i = 0; i < circles.length; i++) {
    circles[i].update();
    circles[i].render();
  }

  //wickets
  stroke(sliderVal * 1.27, sliderVal * 0.95, sliderVal * 0.52, 140 - green); // black to orange
  strokeWeight(green / 30);
  for (let i = 0; i < wickets.length; i++) {
    wickets[i].update();
    wickets[i].render();
  }

  //background-changing buttons
  stroke(120, 0, 0);
  fill(255, 30);
  strokeWeight(1);
  bgPurp.render();
  bgBlue.render();

  // rotating mallet
  push();
  translate(width * 0.9, height * 0.75);
  rotate(fAngle);
  tint(255, 255 - blue * 1.9);
  image(mallet, 0, 0);
  pop();

  //rotating title
  noFill();
  //stroke(blue * 1.9, (blue * 1.9) / 2, 0);
  //stroke(254, 191, 104, 150 - blue * 1.9);
  stroke(blue * 1.89, blue * 1.43, blue * 0.77);
  textSize(60);
  textAlign(CENTER, CENTER);

  push();
  translate(width * 0.9, height * 0.8);
  rotate(-cAngle);
  text("WickeT", 0, 0);
  pop();

  push();
  translate(width * 0.9, height * 0.85);
  rotate(fAngle);
  text("CreatuRes", 0, 0);
  pop();
}

function Creature(x, y, scalar) {
  this.x = x;
  this.y = y;
  this.scalar = scalar;
  this.m = -57;
  this.n1 = -1;
  this.n2 = 1;
  this.n3 = 1;
  this.display = function () {
    drawShape(this.x, this.y, this.m, this.n1, this.n2, this.n3, this.scalar);
  };
}

function drawShape(x, y, m, n1, n2, n3, scaler) {
  push();
  translate(x, y);

  var newscaler = scaler;
  for (var s = 16; s > 0; s--) {
    beginShape();
    var mm = m + s;
    var nn1 = n1 + s;
    var nn2 = n2 + s;
    var nn3 = n3 + s;
    newscaler = newscaler * 0.98;
    var sscaler = newscaler;

    var points = superformula(mm, nn1, nn2, nn3);
    curveVertex(
      points[points.length - 1].x * sscaler,
      points[points.length - 1].y * sscaler
    );
    for (var i = 0; i < points.length; i++) {
      curveVertex(points[i].x * sscaler, points[i].y * sscaler);
    }
    curveVertex(points[0].x * sscaler, points[0].y * sscaler);

    endShape();
  }
  pop();
}

function superformula(m, n1, n2, n3) {
  var numPoints = 360;
  var phi = TWO_PI / numPoints;
  var points = [];
  for (var i = 0; i <= numPoints; i++) {
    points[i] = superformulaPoint(m, n1, n2, n3, phi * i);
  }
  return points;
}

function superformulaPoint(m, n1, n2, n3, phi) {
  var r;
  var t1, t2;
  var a = 1,
    b = 1;
  var x = 0;
  var y = 0;

  t1 = cos((m * phi) / 4) / a;
  t1 = abs(t1);
  t1 = pow(t1, n2);

  t2 = sin((m * phi) / 4) / b;
  t2 = abs(t2);
  t2 = pow(t2, n3);

  r = pow(t1 + t2, 1 / n1);
  if (abs(r) == 0) {
    x = 0;
    y = 0;
  } else {
    r = 1 / r;
    x = r * cos(phi);
    y = r * sin(phi);
  }

  return new p5.Vector(x, y);
}

function Button(x, y, w, h, c, label) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.c = c;
  this.label = label;

  this.render = function () {
    stroke(120, 0, 0);
    fill(255, 30);
    rect(this.x, this.y, this.w, this.h, 20); // rounded, with radius 20
    fill(this.c); // color variable
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(18);
    text(this.label, this.x, this.y, this.w, this.h);
  };

  this.update = function () {
    return (
      mouseX > this.x &&
      mouseX < this.x + this.w &&
      mouseY > this.y &&
      mouseY < this.y + this.h
    );
  };
}

function mousePressed() {
  if (bgPurp.update()) {
    bgR = 100;
    bgG = 0; //73
    bgB = 115;
  } else if (bgBlue.update()) {
    bgR = 0;
    bgG = 81;
    bgB = 200;
  }
}

class Circle {
  constructor(xValue, yValue, xSpeed, ySpeed) {
    this.x = xValue;
    this.y = yValue;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
  }

  update() {
    this.x += this.xSpeed;
    if (this.x < 22 || this.x > width - 22) {
      this.xSpeed *= -1;
    }

    this.y += this.ySpeed;
    if (this.y < 22 || this.y > height - 22) {
      //r
      this.ySpeed *= -1;
    }
  }

  render() {
    circle(this.x, this.y, 90);
    circle(this.x, this.y, 60);
    circle(this.x, this.y, 30);
  }
}

class Wicket {
  constructor(xValue, yValue, xSpeed, ySpeed) {
    this.x = xValue;
    this.y = yValue;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
  }

  update() {
    this.x += this.xSpeed;
    if (this.x < -100 || this.x > width + 100) {
      this.xSpeed *= -1;
    }

    this.y += this.ySpeed;
    if (this.y < 0 || this.y > height) {
      this.ySpeed *= -1;
    }
  }

  render() {
    beginShape();
    vertex(this.x, this.y + 300);
    vertex(this.x + 25, this.y - 90);
    vertex(this.x + 185, this.y - 90);
    vertex(this.x + 210, this.y + 300);
    endShape();
  }
}
