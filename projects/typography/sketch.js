// grid location
var dozn;

// side to side movement
var angle = 0.0;
var offset = 4;
var scalar = 6;
var speed = 0.09;

// images
var bFly;
var bFl1;

function preload() {
  bFly = loadImage("butterfly.png");
  bFl1 = loadImage("bfly1.png");
}

function setup() {
  if (windowWidth < 1320) {
    createCanvas(windowWidth, windowHeight);
  } else {
    createCanvas(1320, 660);
  }
  frameRate(15);
}

function draw() {
  // declare coordinate variables
  const x1 = 0;
  const x2 = width / 4;
  const x3 = width / 2;
  const x4 = (width * 3) / 4;

  const y1 = 0;
  const y2 = height / 3;
  const y3 = (height * 2) / 3;

  // movement
  const xm = offset + cos(angle) * scalar; // x coordinate movement

  // set up state logic
  // top row
  if (twelfth(x1, y1, x2, y2)) {
    dozn = 1;
  } else if (twelfth(x2, y1, x3, y2)) {
    dozn = 2;
  } else if (twelfth(x3, y1, x4, y2)) {
    dozn = 3;
  } else if (twelfth(x4, y1, width, y2)) {
    dozn = 4;

    // second row
  } else if (twelfth(x1, y2, x2, y3)) {
    dozn = 5;
  } else if (twelfth(x2, y2, x3, y3)) {
    dozn = 6;
  } else if (twelfth(x3, y2, x4, y3)) {
    dozn = 7;
  } else if (twelfth(x4, y2, width, y3)) {
    dozn = 8;

    // third row
  } else if (twelfth(x1, y3, x2, height)) {
    dozn = 9;
  } else if (twelfth(x2, y3, x3, height)) {
    dozn = 10;
  } else if (twelfth(x3, y3, x4, height)) {
    dozn = 11;
  } else if (twelfth(x4, y3, width, height)) {
    dozn = 12;
  }

  // darken non-active grid and display letterform
  // top row
  if (dozn == 1) {
    background(220, 0, 0); // red
    drawLetter(x1 + x2 / 3, y1 + y2 / 3, "cf"); // curved filled
    fill(0, 100);
    noStroke();
    rect(x2, y1, width - x2, height);
    rect(x1, y2, x2, y2 * 2);
  } else if (dozn == 2) {
    background(0, 0, 220); // blue
    drawLetter(x2 + x2 / 3, y1 + y2 / 3, "ce"); // curved empty (& bridged)
    fill(0, 100);
    noStroke();
    rect(x3, y1, width / 2, height);
    rect(x1, y1, x2, height);
    rect(x2, y2, x2, height - y2);
  } else if (dozn == 3) {
    background(0, 200, 0); // kelly green
    drawLetter(x3 + x2 / 3.3, y1 + y2 / 3, "h"); // hatching
    fill(0, 100);
    noStroke();
    rect(x1, y1, width / 2, height);
    rect(x3, y2, width / 2, height - y2);
    rect(x4, y1, x2, y2);
    image(bFly, x2 + 1, y2 + 1, x2 - 1, y2 - 1);
  } else if (dozn == 4) {
    background(45, 147, 250); // deep sky blue
    drawLetter(x4 + x2 / 3.3, y1 + y2 / 3, "hf"); // hatching filled
    fill(0, 100);
    noStroke();
    rect(x1, y1, x2 * 3, height);
    rect(x4, y2, x2, y2 * 2);
    image(bFl1, x3 + 1, y3 + 1, x2 - 1, y2 - 1);

    // second row
  } else if (dozn == 5) {
    background(200, 193, 2); // yellow
    drawLetter(x1 + x2 / 3, y2 + y2 / 3, "e"); // empty
    fill(0, 100);
    noStroke();
    rect(x1, y1, width, y2);
    rect(x2, y2, x2 * 3, y2 * 2);
    rect(x1, y3, x2, y2);
  } else if (dozn == 6) {
    background(220, 0, 220); // magenta
    drawLetter(x2 + x2 / 3, y2 + y2 / 3, "f"); // filled
    fill(250, 80);
    noStroke();
    //darker
    rect(x1, y1, x2, y2);
    rect(x1, y3, x2, y2);
    rect(x3, y3, width / 2, y2);
    rect(x3, y1, width / 2, y2);
    //lighter
    fill(250, 100);
    rect(x2, y1, x2, y2);
    rect(x1, y2, x2, y2);
    rect(x3, y2, width / 2, y2);
    rect(x2, y3, x2, y2);
  } else if (dozn == 7) {
    background(155); // grey
    drawLetter(x3 + x2 / 3, y2 + y2 / 3, "d"); // double
    fill(0, 100);
    noStroke();
    rect(x1, y1, width / 2, height);
    rect(x3, y1, x2 * 2, y2);
    rect(x4, y2, x2, y2 * 2);
    rect(x3, y3, x2, y2);
  } else if (dozn == 8) {
    background(230, 115, 0); // orange
    drawLetter(x4 + x2 / 3, y2 + y2 / 3, "b"); // bridge
    fill(0, 100);
    noStroke();
    rect(x1, y1, x2 * 3, height);
    rect(x4, y1, x2, y2);
    rect(x4, y3, x2, y2);

    // third row
  } else if (dozn == 9) {
    background(50); // dark grey
    drawLetter(x1 + x2 / 3, y3 + y2 / 3, "wb"); // wide bridge
    fill(0, 100);
    noStroke();
    rect(x1, y1, width, y2 * 2);
    rect(x2, y3, x2 * 3, y2);
  } else if (dozn == 10) {
    background(89, 108, 46); // olive green
    drawLetter(x2 + x2 / 3, y3 + y2 / 3, "dw"); // dbl wide
    fill(0, 100);
    noStroke();
    rect(x1, y1, width, y2 * 2);
    rect(x1, y3, x2, y2);
    rect(x3, y3, x2 * 2, y2);
  } else if (dozn == 11) {
    background(72, 170, 126);
    drawLetter(x3 + x2 / 3, y3 + y2 / 3, "wf"); // wide filled
    fill(0, 100);
    noStroke();
    rect(x1, y1, width, y2 * 2);
    rect(x1, y3, x2 * 2, y2);
    rect(x4, y3, x2, y2);
  } else if (dozn == 12) {
    background(89, 108, 46); // olive green
    drawLetter(x4 + x2 / 3, y3 + y2 / 3, "wn"); // wide no bridge
    // appears if user types "w":
    if (keyIsPressed) {
      if (key == "w") {
        drawLetter(x1 + x2 / 3, y1 + y2 / 3, "cf"); // 1
        drawLetter(x2 + x2 / 3, y1 + y2 / 3, "ce"); // 2
        drawLetter(x3 + x2 / 3.3, y1 + y2 / 3, "h"); // 3
        drawLetter(x4 + x2 / 3.3, y1 + y2 / 3, "hf"); // 4
        drawLetter(x1 + x2 / 3, y2 + y2 / 3, "e"); // 5
        drawLetter(x2 + x2 / 3, y2 + y2 / 3, "f"); // 6
        drawLetter(x3 + x2 / 3, y2 + y2 / 3, "d"); // 7
        drawLetter(x4 + x2 / 3, y2 + y2 / 3, "b"); // 8
        drawLetter(x1 + x2 / 3, y3 + y2 / 3, "wb"); // 9
        drawLetter(x2 + x2 / 3, y3 + y2 / 3, "dw"); // 10
        drawLetter(x3 + x2 / 3, y3 + y2 / 3, "wf"); // 11

        // black grid
        stroke(0, 40);
        strokeWeight(1);
        for (var k = 1; k < 3; k++) {
          for (var l = 1; l < 4; l++) {
            line(0, (k * height) / 3, width, (k * height) / 3);
            line((l * width) / 4, 0, (l * width) / 4, height);
          }
        }
      }
    }
  }

  // draw grid
  if (dozn != 12) {
    stroke(255, 30);
    strokeWeight(1);
    for (var k = 1; k < 3; k++) {
      for (var l = 1; l < 4; l++) {
        line(0, (k * height) / 3, width, (k * height) / 3);
        line((l * width) / 4, 0, (l * width) / 4, height);
      }
    }
  }
}

// grid locator function
function twelfth(left, top, right, bottom) {
  return mouseX > left && mouseX < right && mouseY > top && mouseY < bottom;
}

// letterform function
function drawLetter(x, y, style) {
  // set up main screen unit measurement
  const lHeight = height / 9;
  const lWidth = width / 24;

  // set up movement
  offset = 5;
  var xm = offset + cos(angle) * scalar;

  // set up font shapes
  // b = bridge
  // ce = curve empty
  // cf = curve filled
  // d = double
  // dw = double wide
  // e = empty
  // f = filled
  // h = hatching
  // hf = hatching filled
  // wb = wide bridge
  // wf = wide filled
  // wn = wide no bridge

  // second row
  if (style === "d") {
    // double
    strokeWeight(1);
    stroke(255);
    line(x - 2, y, x - 2, y + lHeight);
    line(x - 2, y + lHeight, x - 2 + lWidth, y);
    line(x - 2 + lWidth, y, x - 2 + lWidth, y + lHeight);
    line(x - 2 + lWidth, y + lHeight, x - 2 + lWidth * 2, y);

    line(x + 2, y, x + 2, y + lHeight);
    line(x + 2, y + lHeight, x + 2 + lWidth, y);
    line(x + 2 + lWidth, y, x + 2 + lWidth, y + lHeight);
    line(x + 2 + lWidth, y + lHeight, x + 2 + lWidth * 2, y);
  } else if (style === "e") {
    // empty
    stroke(255);
    strokeWeight(2);
    line(x, y, x, y + lHeight);
    line(x, y + lHeight, x + lWidth, y);
    line(x + lWidth, y, x + lWidth, y + lHeight);
    line(x + lWidth, y + lHeight, x + lWidth * 2, y);
  } else if (style === "f") {
    // filled
    fill(255, 150);
    noStroke();
    triangle(x + xm + 2, y, x + xm + 2, y + lHeight, x + lWidth + xm + 2, y);
    triangle(
      x + lWidth - xm,
      y,
      x + lWidth - xm,
      y + lHeight,
      x + lWidth * 2 - xm,
      y
    );
  } else if (style === "b") {
    // bridge
    stroke(255);
    strokeWeight(2);
    line(x + 10 + xm, y, x + 10 + xm, y + lHeight);
    line(x + 10 + xm, y + lHeight, x + 10 + lWidth + xm, y);
    line(x + 10 + lWidth + xm, y, x - 10 + lWidth, y); // bridge
    line(x - 10 + lWidth, y, x - 10 + lWidth, y + lHeight);
    line(x - 10 + lWidth, y + lHeight, x - 10 + lWidth * 2, y);

    // third row
  } else if (style === "wb") {
    stroke(255);
    strokeWeight(2);
    line(x - lWidth / 2.5 + xm, y, x + lWidth / 2.5 + xm, y + lHeight); //  \
    line(x + lWidth / 2.5 + xm, y + lHeight, x + lWidth * 1.2 + xm, y); //  /
    line(x + lWidth * 1.2 + xm, y, x + lWidth * 0.7 - xm, y); //  -- bridge
    line(x + lWidth * 0.7 - xm, y, x + lWidth * 1.5 - xm, y + lHeight); //  \
    line(x + lWidth * 1.5 - xm, y + lHeight, x + lWidth * 2.25 - xm, y); //  /
  } else if (style === "dw") {
    //double wide
    stroke(255);
    strokeWeight(1);
    line(x - 2 - lWidth / 2.5, y, x - 2 + lWidth / 2.5, y + lHeight); //  \
    line(x - 2 + lWidth / 2.5, y + lHeight, x - 2 + lWidth * 1.2, y); //  /
    line(x - 2 + lWidth * 1.2, y, x - 2 + lWidth * 0.7, y); //  -- bridge
    line(x - 2 + lWidth * 0.7, y, x - 2 + lWidth * 1.5, y + lHeight); //  \
    line(x - 2 + lWidth * 1.5, y + lHeight, x - 2 + lWidth * 2.25, y); //  /

    line(x + 2 - lWidth / 2.5, y, x + 2 + lWidth / 2.5, y + lHeight); //  \
    line(x + 2 + lWidth / 2.5, y + lHeight, x + 2 + lWidth * 1.2, y); //  /
    line(x + 2 + lWidth * 1.2, y, x + 2 + lWidth * 0.7, y); //  -- bridge
    line(x + 2 + lWidth * 0.7, y, x + 2 + lWidth * 1.5, y + lHeight); //  \
    line(x + 2 + lWidth * 1.5, y + lHeight, x + 2 + lWidth * 2.25, y); //  /
  } else if (style === "wf") {
    // wide filled
    fill(0, 100);
    noStroke();
    triangle(
      x - lWidth / 2.5 + xm,
      y,
      x + lWidth / 2.5 + xm,
      y + lHeight,
      x + lWidth * 1.2 + xm,
      y
    );
    triangle(
      x + lWidth * 0.7 - xm,
      y,
      x + lWidth * 1.5 - xm,
      y + lHeight,
      x + lWidth * 2.25 - xm,
      y
    );
  } else if (style === "wn") {
    // wide no bridge
    var r = random(0.7, 1.2);
    stroke(255);
    strokeWeight(2);
    line(x - lWidth / 2.5, y, x + lWidth / 2.5, y + lHeight); // \
    line(x + lWidth / 2.5, y + lHeight, x + lWidth * r, y); // /
    line(x + lWidth * r, y, x + lWidth * 1.5, y + lHeight); // \
    line(x + lWidth * 1.5, y + lHeight, x + lWidth * 2.25, y); // /

    // faint message surrounding letterform
    if (keyIsPressed) {
      if (key == "w") {
        stroke(0, 0);
        noLoop();
      }
    } else {
      stroke(0, 50);
      loop();
    }

    noFill();
    // H
    line(x - lWidth * 2, y - lHeight, x - lWidth * 2, y - 15); // |
    line(x - lWidth * 1.4, y - lHeight, x - lWidth * 1.4, y - 15); // |
    line(x - lWidth * 2, y - lHeight / 2, x - lWidth * 1.4, y - lHeight / 2); // --

    // O
    ellipse(
      x - lWidth * 0.92,
      y - lHeight / 2 - 7,
      lWidth * 0.7,
      lHeight * 0.8
    );

    // L
    line(x - lWidth * 0.42, y - lHeight, x - lWidth * 0.42, y - 15); // |
    line(x - lWidth * 0.42, y - 15, x + lWidth * 0.1, y - 15); // _

    // D
    line(x + lWidth * 0.27, y - lHeight, x + lWidth * 0.27, y - 15); // |
    arc(
      x + lWidth * 0.27,
      y - lHeight / 2 - 7,
      lWidth * 1.1,
      lHeight * 0.8,
      PI + HALF_PI,
      HALF_PI
    );

    // M
    line(x + lWidth * 1.2, y - lHeight, x + lWidth * 1.2, y - 15);
    line(x + lWidth * 1.2, y - lHeight, x + lWidth * 1.7, y - 15);
    line(x + lWidth * 1.7, y - 15, x + lWidth * 2.2, y - lHeight);
    line(x + lWidth * 2.2, y - lHeight, x + lWidth * 2.2, y - 15);

    // E
    line(x + lWidth * 2.36, y - lHeight, x + lWidth * 2.36, y - 15);
    line(x + lWidth * 2.36, y - lHeight, width - lWidth, y - lHeight);
    line(x + lWidth * 2.36, y - lHeight / 2, width - lWidth, y - lHeight / 2);
    line(x + lWidth * 2.36, y - 15, width - lWidth, y - 15);

    // D
    line(x - lWidth * 2, y, x - lWidth * 2, y + lHeight); // |
    arc(
      x - lWidth * 2,
      y + lHeight / 2,
      lWidth * 1.65,
      lHeight,
      PI + HALF_PI,
      HALF_PI
    );

    // O
    ellipse(x - lWidth * 0.7, y + lHeight / 2, lWidth * 0.7, lHeight);

    // N
    line(x + lWidth * 2.36, y, x + lWidth * 2.36, y + lHeight);
    line(x + lWidth * 2.36, y, width - lWidth, y + lHeight);
    line(width - lWidth, y + lHeight, width - lWidth, y);

    // first row
  } else if (style === "cf") {
    // curved filled
    fill(255, 150);
    stroke(255, 200);
    strokeWeight(2);
    arc(x - 30, y - lHeight / 7, lHeight * 2.5, lHeight * 2.5, TWO_PI, HALF_PI);
    arc(
      x + 30 + xm,
      y - lHeight / 7,
      lHeight * 2.5,
      lHeight * 2.5,
      TWO_PI,
      HALF_PI
    );
    line(x - 30, y - lHeight / 7, x - 30, y + lHeight * 1.1);
    line(x + 30 + xm, y - lHeight / 7, x + 30 + xm, y + lHeight * 1.1);
  } else if (style === "ce") {
    // curved empty
    noFill();
    stroke(255, 180);
    strokeWeight(2);
    arc(
      x - 25,
      y - lHeight / 7,
      lHeight * 2.25,
      lHeight * 2.25,
      TWO_PI,
      HALF_PI
    );
    arc(
      x - 25,
      y - lHeight / 7,
      lHeight * 3.5,
      lHeight * 2.25,
      TWO_PI,
      HALF_PI
    );
    line(x - 25, y - lHeight / 7, x - 25, y + lHeight * 0.975);
  } else if (style === "h") {
    // hatching
    noFill;
    stroke(255);
    strokeWeight(1);
    for (let i = -lWidth * 0.75; i < lWidth * 0.63; i += 3) {
      line(
        x + i + xm,
        y + i + lWidth * 0.63,
        x + i + lWidth * 2.52 - xm,
        y + -i + lWidth * 0.5
      );
    }
  } else if (style === "hf") {
    // hatching filled
    noFill;
    stroke(0, 120, 120);
    strokeWeight(2);
    for (let i = -lWidth * 0.75; i < lWidth * 0.63; i += 3) {
      line(
        x + i,
        y + i + lWidth * 0.63,
        x + i + lWidth * 2.52,
        y + -i + lWidth * 0.5
      );
    }

    stroke(0, 255, 255, 100);
    strokeWeight(1);
    for (let i = -lWidth * 0.75; i < lWidth * 0.63; i += 3) {
      line(
        x + i,
        y + i + lWidth * 0.6,
        x + i + lWidth * 2.52,
        y + -i + lWidth * 0.5
      );
    }
    noStroke();
  }

  angle += speed;
}

function keyReleased() {
  if (key == "w") {
    loop();
  }
}
