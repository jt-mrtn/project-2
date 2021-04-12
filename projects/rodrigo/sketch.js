// declare variables
// sound
var rodrigo;

// animation
var x = 0;
var z = 0;
var easing = 0.04;
var direction = 1;
// var time10 = 10000;
var scaleX, scaleY, moveX1, moveX2, moveX3, startMillis;

// for the side-to-side ovals
var angle = 0.0;
var bgAngle = 0.0; // background angle
var offset = 270;
var scalar = 1111;
var speed = 0.03; ///speed///
var x3 = 7;

// text
var click = "Click your mouse";

function preload() {
  rodrigo = loadSound("rodrigo.ogg"); // 10 seconds
}

function setup() {
  createCanvas(1111, 660);
  scaleX = width / 92;
  scaleY = height / 21;
  reverb = new p5.Reverb();
  moveX1 = width + 30;
  moveX2 = -30;
  moveX3 = width + 10;
  textFont("Industrial");
  textSize(30);

  // connecting sound file to reverb with a
  // reverb time of 12 seconds, decay rate of 0.2%
  reverb.process(rodrigo, 12, 0.2);
  reverb.amp(6);

  // set up beginning of time
  if (startMillis == null) {
    startMillis = millis();
  }
}

function draw() {
  var now = millis();
  var tDiff = now - startMillis;
  background(5, 201, 255, 35);
  var x0 = cos(bgAngle + 0.05) * scalar * easing;
  bgAngle += speed * easing;

  // oval background pattern
  noFill();
  stroke(0);
  strokeWeight(1);
  let h = 0;
  for (var i = -14; i < height + 20; i += 15) {
    for (var j = -54; j < width * 2.5; j += 4) {
      ellipse(j + x0 - h, i * 2, 12 + j * 0.016, 12 + i * 0.16);
    }

    //h += 3;

    if (z == 0) {
      h += 3;
    } else if (z == 1) {
      h += 15 + tDiff * easing * 0.005;
    }
  }

  if (z == 1) {
    // set up graphic motion
    var x1 = offset + cos(angle + 0.05) * scalar;
    angle += speed;
    x3 += 20 * direction;

    // variable for alpha transparency
    x4 = map(x3, 7, width + 714, 0, 255);

    // flickering and decending motion
    noStroke();
    for (let j = 0; j < scaleY; j++) {
      fill(
        millis() % ((j + 5) * scaleY * 0.15),
        millis() % ((j + 100) * scaleY * 0.25),
        millis() % ((j + 50) * scaleY * 0.55),
        x4 * 0.5
      );
      rect(0, j * scaleY, width, scaleY);
    }

    //side-to-side moving ovals
    let k = 0;
    noStroke();
    for (let i = -29; i < height; i += 30) {
      for (let j = -1111; j < width * 3; j += 210) {
        var ovalWidth = random(144, 160);
        fill(0, x4);
        ellipse(x1 + j - k, i + scaleY, 200, 20);
        fill(36 + x4, 246 - x4, 26 + x4, x4);
        ellipse(x1 + j + 170 - k, i + scaleY, 140, 18);
        // inside the big one
        fill(
          k * 0.25,
          255 - k * 0.6, //201,
          millis() % (255 - k + scaleY * 0.025),
          //249,
          x4
        );
        ellipse(x1 + j - k, i + scaleY, ovalWidth, 18);
      }
      k += 30;
    }

    // diagonal lines moving left to right
    stroke(0, 255 - x4);
    strokeWeight(1);
    for (var i = -width * 1.4; i <= width * 2; i += 10) {
      stroke(0, 255 - x4);
      line(i + x, 0, i + x - 714, height);
      stroke(5, 201, 255, 255 - x4);
      line(i + x - 714, 0, i + x, height);
    }

    // moving left to right then back to left
    if (x3 > width * 2.7) {
      direction = -direction; // flip direction
    }

    stroke(0, x4 * 0.33);
    line(x3 - 714, 0, x3, height);
    line(x3, 0, x3 - 714, height);

    fill(0, 255 - x4);
    noStroke();
    triangle(x3 - 714, 0, x3 - 357, height / 2, x3 - 714, height);
    rect(x3 - 1071 - 714 - 714, 0, 357 + 714 + 714, height);

    x += 11;
  }

  // text at the top
  fill(0);
  rect(0, 0, width, 104);
  fill(5, 201, 249);
  //noStroke();
  textAlign(CENTER);
  text("Music by Joaquín Rodrigo · Concierto pastoral", moveX3, 45);
  text(click, moveX1, 80);
  text(click, moveX2, 80);
  //noFill();
  moveX1 -= 5;
  moveX2 += 5;
  moveX3 -= 3;
}

function mousePressed() {
  z++;
  if (z > 1) z = 0;

  if (rodrigo.isPlaying()) {
    rodrigo.stop();
  } else if (z == 1) {
    rodrigo.play();
  }
}
