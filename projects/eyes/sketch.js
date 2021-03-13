// Kaleidoscope Eyes
// Author: J.T. Martin

// 1. Left, right and middle mouse buttons cause eyes to change.
// 2. Press Esc key after pressing right button.
// 3. There are 4 different sizes. Refresh page to return to the smallest.

var x = 0;
var y = 0;
var px = 0;
var py = 0;
var mult = 1.6;
var easing = 0.06;
var radius = 8;
var pupils = 4;
var spacing = 40;
var boom = 60;
var count = 1;
var click = 1;
// default yellow - opening mood
var r = 254;
var g = 213;
var b = 38;
var e = 255;
var h = 2;
var z = 0;
var angle = 0.0;
var speed = 0.09;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  textFont("Industrial");
}

// advancement of different moods
function mousePressed() {
  click++;
  if (click > 2) click = 1;
}

function draw() {
  textSize(30);
  textStyle(NORMAL);
  fill(r, g, b, 6);

  if (click == 1) {
    if (mouseButton != RIGHT && mouseButton != LEFT && mouseButton != CENTER) {
      text(
        "Clicked on the link and still in the dark? You poor thing. If you caress and by caress",
        width / 3.5,
        height - 154
      );
      text(
        "I mean press your mouse buttons individually, you'll encounter different moods. Use all",
        width / 3.5,
        height - 122
      );
      text(
        "of them, even your center one (scroll wheel). Sway your little plasticine gnawer to and",
        width / 3.5,
        height - 90
      );
      text(
        "fro. What happens? Go fast or slow. Hold the button of your choice down. What happens then?",
        width / 3.5,
        height - 58
      );
      text(
        "For the right mouse button, press the Esc key to get rid of the pop-up menu. Have fun!",
        width / 3.5,
        height - 26
      );
    }
  }
  noFill();

  var targetX = mouseX;
  x += (targetX - x) * easing;
  var targetY = mouseY;
  y += (targetY - y) * easing;
  var weight = dist(x, y, px, py) * 3;
  w = map(x, 0, width, 0, 255);
  z = map(y, 0, height, 0, 255);

  // set up psychedelic backgrounds
  if (mouseButton == LEFT && click == 2) {
    // set up lucy in the sky with diamonds
    var rx = map(mouseX, 0, width, 238, 254);
    var gx = map(mouseX, 0, width, 0, 213);
    var bx = 0;
    mouseX < width / 2 ? (bx = 130) : (bx = 38);
    background(rx, gx + z / 5, bx, 7);
    strokeWeight(10);
    push();
    translate(width / 2, height / 2);
    rotate(angle);
    for (var i = -3 * width; i < 3 * width; i += 37) {
      rx = 76;
      gx = 233;
      bx = 254;
      stroke(rx, gx, bx);
      line(i, -3 * height, i, 3 * height);
    }

    for (var i = -3 * height; i < 3 * height; i += 37) {
      rx = 76;
      gx = 233;
      bx = 254;
      stroke(rx, gx, bx);
      line(-3 * width, i, 3 * width, i);
    }

    // rotating diamonds
    pop();
  } else if (mouseButton == CENTER) {
    background(0, 0, 196 - w * 0.9, 7);
    push();
    translate(width * 1.75, height * 0.75);
    rotate(angle * 0.9);
    strokeWeight(1);
    for (let i = -150; i < 2 * width + 150; i += 100 * 1.6) {
      for (let j = -150; j < 2 * height + 150; j += 100 * 1.6) {
        let r = random(60);
        stroke(255);
        point(width - i * r, 91 * r + j);
      }
    }
    pop();
  } else if (mouseButton == RIGHT) {
    var rxx = map(mouseX, 0, width, 14, 201);
    var gxx = map(mouseX, 0, width, 44, 255);
    var bxx = map(mouseX, 0, width, 21, 255);
    background(rxx, gxx + w * 10, bxx + z * 10, 2);
    strokeWeight(1);
    stroke(0, 2);
    for (let i = 5; i < height; i += 5) {
      line(0, i, width, i);
    }
  } else if (
    (click == 1 &&
      mouseButton != RIGHT &&
      mouseButton != LEFT &&
      mouseButton != CENTER) ||
    (click == 1 && mouseButton == LEFT)
  ) {
    background(0, 3);
  }

  // set up eye colors
  if (mouseIsPressed) {
    if (
      (click == 1 &&
        mouseButton != RIGHT &&
        mouseButton != LEFT &&
        mouseButton != CENTER) ||
      (click == 1 && mouseButton == LEFT)
    ) {
      // yellow
      r = 254;
      g = 213;
      b = 38;
      e = 255;
      mult = 1.6;
      boom = 60;
      radius = 8;
      pupils = 4;
      spacing = 40;
      easing = 0.06;
    } else if ((mouseButton == LEFT) & (click == 2)) {
      // blue
      r = 55;
      g = 40;
      b = 252;
      e = 240;
      mult = 1.6;
      boom = 20;
      radius = 16;
      pupils = radius / 2;
      spacing = 107;
      easing = 0.07;
    } else if (mouseButton == RIGHT) {
      // aqua
      r = 86;
      g = 206;
      b = 175;
      e = 250;
      mult = 2.7;
      boom = 40;
      radius = 36;
      pupils = radius / 2;
      spacing = 283;
      easing = 0.0108;
    } else if (mouseButton == CENTER) {
      // sky blue
      r = 76;
      g = 233;
      b = 254;
      e = 255;
      mult = 1;
      boom = 80;
      radius = 118;
      pupils = radius / 2;
      spacing = 460;
      easing = 0.09;
    }
  }

  strokeWeight(weight * boom);
  stroke(r, g, b - weight, 50 - 3 * weight);
  line(x, y, px, py);
  line(x + spacing, y, px + spacing, py);
  px = x;
  py = y;

  // eyeline
  if ((mouseButton == LEFT) & (click == 2)) {
    noStroke();
  } else {
    strokeWeight(5);
    noFill();
    // left
    arc(x, y, radius * h * mult, radius * h + weight, 0, 360);
    // right
    arc(x + spacing, y, radius * h * mult, radius * h + weight, 0, 360);
  }

  // left & center Button Brow
  if (mouseButton == CENTER || (mouseButton == LEFT && click == 2)) {
    // big eye line
    if (mouseButton == LEFT && click == 2) {
      noStroke();
    } else {
      strokeWeight(1);
      stroke(r, g, b - weight, 50 - 3 * weight);
      arc(x, y, radius * h * mult * 1.6, radius * h * 1.6, 0, 360);
      arc(x + spacing, y, radius * h * mult * 1.6, radius * h * 1.6, 0, 360);
    }

    //left big arc
    noStroke();
    if (mouseIsPressed) {
      fill(z, g - z, b + z);
    } else {
      fill(z, g - z, b + z, 50 - 3 * weight);
    }
    arc(
      x,
      y,
      radius * h * mult * 1.6,
      radius * h * 1.6,
      270 + 5 * weight,
      10 - 5 * weight
    );
    arc(
      x,
      y,
      radius * h * mult * 1.6,
      radius * h * 1.6,
      30 + 5 * weight,
      130 - 5 * weight
    );
    arc(
      x,
      y,
      radius * h * mult * 1.6,
      radius * h * 1.6,
      150 + 5 * weight,
      250 - 5 * weight
    );
    // right big arc
    arc(
      x + spacing,
      y,
      radius * h * mult * 1.6,
      radius * h * 1.6,
      180 + 5 * weight,
      280 - 5 * weight
    );
    arc(
      x + spacing,
      y,
      radius * h * mult * 1.6,
      radius * h * 1.6,
      300 + 5 * weight,
      40 - 5 * weight
    );
    arc(
      x + spacing,
      y,
      radius * h * mult * 1.6,
      radius * h * 1.6,
      60 + 5 * weight,
      160 - 5 * weight
    );

    // center eyeline
    strokeWeight(1);
    if (mouseButton == LEFT && click == 2) {
      noStroke();
    } else if (mouseIsPressed) {
      stroke(r, g, b - weight);
    } else {
      stroke(r, g, b - weight, 50 - 3 * weight);
      noFill();
      arc(x, y, radius * h * mult * 1.3, radius * h * 1.3, 0, 360);
      arc(x + spacing, y, radius * h * mult * 1.3, radius * h * 1.3, 0, 360);
    }
    // left center arc
    if (mouseIsPressed) {
      fill(230, 250 - 3 * weight);
    } else {
      fill(230, 50 - 3 * weight);
    }
    noStroke();
    arc(
      x,
      y,
      radius * h * mult * 1.3,
      radius * h * 1.3,
      0 + 5 * weight,
      100 - 5 * weight
    );
    arc(
      x,
      y,
      radius * h * mult * 1.3,
      radius * h * 1.3,
      120 + 5 * weight,
      220 - 5 * weight
    );
    arc(
      x,
      y,
      radius * h * mult * 1.3,
      radius * h * 1.3,
      250 + 5 * weight,
      350 - 5 * weight
    );

    // right center arc
    arc(
      x + spacing,
      y,
      radius * h * mult * 1.3,
      radius * h * 1.3,
      201 + 5 * weight,
      301 - 5 * weight
    );
    arc(
      x + spacing,
      y,
      radius * h * mult * 1.3,
      radius * h * 1.3,
      321 + 5 * weight,
      61 - 5 * weight
    );
    arc(
      x + spacing,
      y,
      radius * h * mult * 1.3,
      radius * h * 1.3,
      81 + 5 * weight,
      181 - 5 * weight
    );
  }

  // "whites" of the eyes for all moods
  noStroke();
  strokeWeight(1);
  if (mouseIsPressed) {
    fill(255, 250 - 3 * weight);
  } else {
    fill(255, 80 - 3 * weight);
  }
  // left;
  arc(x, y, radius * h * mult, radius * h, 100 + 5 * weight, 190 - 5 * weight);

  arc(x, y, radius * h * mult, radius * h, 210 + 5 * weight, 310 - 5 * weight);

  arc(x, y, radius * h * mult, radius * h, 330 + 5 * weight, 80 - 5 * weight);

  // right
  arc(
    x + spacing,
    y,
    radius * h * mult,
    radius * h,
    150 + 5 * weight,
    240 - 5 * weight
  );

  arc(
    x + spacing,
    y,
    radius * h * mult,
    radius * h,
    260 + 5 * weight,
    360 - 5 * weight
  );

  arc(
    x + spacing,
    y,
    radius * h * mult,
    radius * h,
    20 + 5 * weight,
    130 - 5 * weight
  );

  noStroke();
  // iris;
  fill(r + z, g - z, b - z);
  ellipse(x, y, radius - weight, radius - weight);
  if (mouseButton == CENTER) {
    fill(r + z, g - z, b + z);
  }
  ellipse(x + spacing, y, radius - weight, radius - weight);

  // pupils
  if (mouseY > height / 2) {
    fill(0 + w, 200 - z, 170 - z);
  } else {
    fill(0 + z, 42, 82 + w);
  }

  ellipse(x, y, pupils - weight, pupils - weight);
  ellipse(x + spacing, y, pupils - weight, pupils - weight);
  // eyebrows no mouse
  //if (mouseButton != LEFT && mouseButton != RIGHT && mouseButton != CENTER) {
  if (mouseButton == LEFT && click == 1) {
    noFill();
    stroke(234 - z, 107 - w, 20 - z, 40);
    strokeWeight(2);
    // left
    arc(
      x,
      y,
      radius * mult * 4 + weight * 30,
      radius * 4 + weight * 70,
      180,
      275
    );
    // right
    arc(
      x + spacing,
      y,
      radius * mult * 4 + weight * 30,
      radius * 4 + weight * 70,
      270,
      350
    );
    // lines under eyes
    stroke(234 - z, 107 - w, 20 - z, 5);
    arc(x - 7, y, radius * mult * 4, radius * 4, 18, 88);
    arc(x + spacing + 7, y, radius * mult * 4, radius * 4, 100, 160);

    // some shade over little yellow eyes
    noStroke();
    fill(r, g - w, b - z, 1);
    arc(x - 7, y, radius * mult * 4, radius * 4, 0, 360);
    arc(x + spacing + 7, y, radius * mult * 4, radius * 4, 0, 360);
  } else if (mouseButton == RIGHT) {
    // eyebrows - right
    noFill();
    stroke(234 - z, 107 - w, 20 - z);
    strokeWeight(3);
    // left
    arc(x, y, radius * mult * 3, radius * 3, 200, 335);

    // right
    arc(x + spacing, y, radius * mult * 3, radius * 3, 210, 340);

    strokeWeight(1);
    stroke(234 - z, 107 - w, 20 - z, 30);
    arc(x, y + 90, radius * mult * 2, radius * 2, 280, 325);
    arc(x + spacing, y + 90, radius * mult * 2, radius * 2, 230, 265);

    // eyelashes
    // left
    arc(x, y, radius * mult * 2.5, radius * 2.2, 193, 194);
    arc(x, y, radius * mult * 2.5, radius * 2.2, 196, 197);
    arc(x, y, radius * mult * 2.5, radius * 2.2, 199, 200);
    arc(x, y, radius * mult * 2.5, radius * 2.2, 202, 203);
    arc(x, y, radius * mult * 2.5, radius * 2.2, 205, 206);
    arc(x, y, radius * mult * 2.5, radius * 2.2, 208, 209);
    arc(x, y, radius * mult * 2.5, radius * 2.2, 211, 212);
    arc(x, y, radius * mult * 2.5, radius * 2.2, 214, 215);
    arc(x, y, radius * mult * 2.5, radius * 2.2, 217, 218);
    arc(x, y, radius * mult * 2.5, radius * 2.2, 220, 221);
    arc(x, y, radius * mult * 2.5, radius * 2.2, 223, 224);
    arc(x, y, radius * mult * 2.5, radius * 2.2, 226, 227);

    arc(x, y, radius * mult * 2.5, radius * 2.2, 229, 230);
    arc(x, y, radius * mult * 2.5, radius * 2.2, 232, 233);
    arc(x, y, radius * mult * 2.5, radius * 2.2, 235, 236);
    arc(x, y, radius * mult * 2.5, radius * 2.2, 238, 239);
    arc(x, y, radius * mult * 2.5, radius * 2.2, 241, 242);
    arc(x, y, radius * mult * 2.5, radius * 2.2, 244, 245);
    arc(x, y, radius * mult * 2.5, radius * 2.2, 247, 248);
    arc(x, y, radius * mult * 2.5, radius * 2.2, 250, 251);
    arc(x, y, radius * mult * 2.5, radius * 2.2, 253, 254);
    arc(x, y, radius * mult * 2.5, radius * 2.2, 256, 257);
    arc(x, y, radius * mult * 2.5, radius * 2.2, 259, 260);
    arc(x, y, radius * mult * 2.5, radius * 2.2, 262, 263);

    arc(x, y, radius * mult * 2.5, radius * 2.2, 265, 266);
    arc(x, y, radius * mult * 2.5, radius * 2.2, 268, 269);
    arc(x, y, radius * mult * 2.5, radius * 2.2, 271, 272);
    arc(x, y, radius * mult * 2.5, radius * 2.2, 274, 275);
    arc(x, y, radius * mult * 2.5, radius * 2.2, 277, 278);
    arc(x, y, radius * mult * 2.5, radius * 2.2, 280, 281);
    arc(x, y, radius * mult * 2.5, radius * 2.2, 283, 284);
    arc(x, y, radius * mult * 2.5, radius * 2.2, 286, 287);
    arc(x, y, radius * mult * 2.5, radius * 2.2, 289, 290);
    arc(x, y, radius * mult * 2.5, radius * 2.2, 292, 293);
    arc(x, y, radius * mult * 2.5, radius * 2.2, 295, 296);
    arc(x, y, radius * mult * 2.5, radius * 2.2, 298, 299);

    arc(x, y, radius * mult * 2.5, radius * 2.2, 301, 302);
    arc(x, y, radius * mult * 2.5, radius * 2.2, 304, 305);
    arc(x, y, radius * mult * 2.5, radius * 2.2, 307, 308);
    arc(x, y, radius * mult * 2.5, radius * 2.2, 310, 311);
    arc(x, y, radius * mult * 2.5, radius * 2.2, 313, 314);
    arc(x, y, radius * mult * 2.5, radius * 2.2, 316, 317);
    arc(x, y, radius * mult * 2.5, radius * 2.2, 319, 320);
    arc(x, y, radius * mult * 2.5, radius * 2.2, 322, 323);
    arc(x, y, radius * mult * 2.5, radius * 2.2, 325, 326);
    arc(x, y, radius * mult * 2.5, radius * 2.2, 328, 329);
    arc(x, y, radius * mult * 2.5, radius * 2.2, 331, 332);
    arc(x, y, radius * mult * 2.5, radius * 2.2, 334, 335);

    arc(x, y, radius * mult * 2.5, radius * 2.2, 337, 338);
    arc(x, y, radius * mult * 2.5, radius * 2.2, 340, 341);
    arc(x, y, radius * mult * 2.5, radius * 2.2, 343, 344);

    //right eyelashes
    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 199, 200);
    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 202, 203);
    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 205, 206);
    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 208, 209);
    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 211, 212);
    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 214, 215);
    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 217, 218);
    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 220, 221);
    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 223, 224);
    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 226, 227);
    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 229, 230);
    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 232, 233);

    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 235, 236);
    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 238, 239);
    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 241, 242);
    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 244, 245);
    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 247, 248);
    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 250, 251);
    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 253, 254);
    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 256, 257);
    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 259, 260);
    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 262, 263);
    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 265, 266);
    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 268, 269);

    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 271, 272);
    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 274, 275);
    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 277, 278);
    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 280, 281);
    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 283, 284);
    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 286, 287);
    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 289, 290);
    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 292, 293);
    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 295, 296);
    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 298, 299);
    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 301, 302);
    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 304, 305);
    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 307, 308);

    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 310, 311);
    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 313, 314);
    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 316, 317);
    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 319, 320);
    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 322, 323);
    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 325, 326);
    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 328, 329);
    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 331, 332);
    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 334, 335);
    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 337, 338);
    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 340, 341);
    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 343, 344);
    arc(x + spacing, y, radius * mult * 2.5, radius * 2.2, 346, 347);
  }
  angle += 1 * speed;
  count++;
}
