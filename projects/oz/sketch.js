/*
Some of Oz · A nonlinear narrative 
Author: JT Martin
*/

// state variables declaration
var state = 1.0;
var typed = "";

// for the tornado
var t_angle = 0.0;
var t_offset = 70;
var t_scalar = 30;
var t_speed = 0.01;

// set up state logic
function keyTyped() {
  if (key == 1) {
    state = 1.0; // kansas
  } else if (key == 2) {
    state = 2.0; // yellow brick road
  } else if (key == 3) {
    state = 3.0; // flying monkeys
  } else if (key == 4) {
    state = 4.0; // emerald city
  } else if (keyCode == RETURN) {
    // 24 STATES:
    // kansas (6)
    if (typed.toLowerCase() == "kansas") {
      state = 1.0;
      typed = "";
    } else if (typed.toLowerCase() == "toto") {
      state = 1.1;
      typed = "";
    } else if (typed.toLowerCase() == "house") {
      state = 1.2;
      typed = "";
    } else if (typed.toLowerCase() == "dorothy") {
      state = 1.3;
      typed = "";
    } else if (typed.toLowerCase() == "tornado") {
      state = 1.4;
      typed = "";
    } else if (typed.toLowerCase() == "all" && state < 2) {
      state = 1.9;
      typed = "";
    }
    // yellow brick road (6)
    else if (typed.toLowerCase() == "yellow brick road") {
      state = 2.0;
      typed = "";
    } else if (typed.toLowerCase() == "scarecrow") {
      state = 2.1;
      typed = "";
    } else if (typed.toLowerCase() == "lion") {
      state = 2.2;
      typed = "";
    } else if (typed.toLowerCase() == "tinman") {
      state = 2.3;
      typed = "";
    } else if (typed.toLowerCase() == "poppies") {
      state = 2.4;
      typed = "";
    } else if (typed.toLowerCase() == "all" && state > 1 && state < 3) {
      state = 2.9;
      typed = "";
    }
    // flying monkeys (5)
    else if (typed.toLowerCase() == "flying monkeys") {
      state = 3.0;
      typed = "";
    } else if (typed.toLowerCase() == "witch") {
      state = 3.1;
      typed = "";
    } else if (typed.toLowerCase() == "crystal ball") {
      state = 3.2;
      typed = "";
    } else if (typed.toLowerCase() == "guards") {
      state = 3.3;
      typed = "";
    } else if (typed.toLowerCase() == "all" && state > 2 && state < 4) {
      state = 3.9;
      typed = "";
    }
    // emerald city (7)
    else if (typed.toLowerCase() == "emerald city") {
      state = 4.0;
      typed = "";
    } else if (typed.toLowerCase() == "fire") {
      state = 4.1;
      typed = "";
    } else if (typed.toLowerCase() == "wizard") {
      state = 4.2;
      typed = "";
    } else if (typed.toLowerCase() == "glinda") {
      state = 4.3;
      typed = "";
    } else if (typed.toLowerCase() == "balloon") {
      state = 4.4;
      typed = "";
    } else if (typed.toLowerCase() == "ruby") {
      state = 4.5;
      typed = "";
    } else if (typed.toLowerCase() == "all" && state > 3) {
      state = 4.9;
      typed = "";
    }
  } else {
    typed += key;
  }
}

// set up allowance for clearing text
function keyPressed() {
  if (keyCode == BACKSPACE || keyCode == DELETE) {
    typed = "";
  }
}

// image variables...
// kansas
var stormy, toto, house, dorothy, shift;

// yellow brick road (ybr)
var bluesky, tinMan, lion, scarecrow;

// flying monkeys (fm)
var flymonkey1, flymonkey2, witch, ball, guards;

// emerald city (ec)
var ozSky, glinda, wiz, wizFire, ruby, balloon;

function preload() {
  // kansas
  stormy = loadImage("images/stormy-sky.jpg");
  toto = loadImage("images/toto.jpg");
  dorothy = loadImage("images/dorothy1.jpg");
  house = loadImage("images/spinning-house.gif");
  shift = loadImage("images/shift.jpg");
  // ybr
  bluesky = loadImage("images/blue-sky.jpg");
  lion = loadImage("images/lion.jpg");
  tinMan = loadImage("images/tin-man.jpg");
  scarecrow = loadImage("images/scarecrow.gif");
  // fm
  flymonkey1 = loadImage("images/fly-monkey1.jpg");
  flymonkey2 = loadImage("images/fly-monkey2.jpg");
  witch = loadImage("images/wicked-witch.jpg");
  ball = loadImage("images/ball.gif");
  guards = loadImage("images/guards.jpg");
  // ec
  ozSky = loadImage("images/oz-sky.jpg");
  glinda = loadImage("images/glenda.jpg");
  wiz = loadImage("images/wiz.jpg");
  wizFire = loadImage("images/wiz-fire.jpg");
  ruby = loadImage("images/ruby.gif");
  balloon = loadImage("images/balloon.jpg");
}

var ec = []; // wizard of oz

function setup() {
  createCanvas(1142, 886);
  textFont("MiTicaRegular");
  textStyle(NORMAL);
  ec = ["y", "t", "i", "C", " ", "d", "l", "a", "r", "e", "m", "E"];
}

function draw() {
  //tornado image x axis
  //0.4 diff
  var x1 = t_offset + cos(t_angle - 1) * t_scalar;
  var x2 = t_offset + cos(t_angle - 0.6) * t_scalar;
  var x3 = t_offset + cos(t_angle - 0.2) * t_scalar;

  var x4 = t_offset + cos(t_angle + 0.2) * t_scalar;
  var x5 = t_offset + cos(t_angle + 0.6) * t_scalar;
  var x6 = t_offset + cos(t_angle + 0.8) * t_scalar;
  //0.3;
  var x7 = t_offset + cos(t_angle + 1) * t_scalar;
  var x8 = t_offset + cos(t_angle + 0.5) * t_scalar;
  var x9 = t_offset + cos(t_angle + 0.1) * t_scalar;

  var x10 = t_offset + cos(t_angle - 0.28) * t_scalar;
  var x11 = t_offset + cos(t_angle - 0.75) * t_scalar;
  var x12 = t_offset + cos(t_angle - 0.96) * t_scalar;

  var x13 = t_offset + cos(t_angle - 1) * t_scalar;
  var x14 = t_offset + cos(t_angle - 0.89) * t_scalar;
  var x15 = t_offset + cos(t_angle - 0.45) * t_scalar;
  //.25
  var x16 = t_offset + cos(t_angle - 0.1) * t_scalar;
  var x17 = t_offset + cos(t_angle - 0.15) * t_scalar;
  var x18 = t_offset + cos(t_angle - 0.4) * t_scalar;

  var x19 = t_offset + cos(t_angle - 0.65) * t_scalar;
  var x20 = t_offset + cos(t_angle - 0.9) * t_scalar;
  var x21 = t_offset + cos(t_angle - 0.75) * t_scalar;

  var x22 = t_offset + cos(t_angle - 0.5) * t_scalar;
  var x23 = t_offset + cos(t_angle - 0.25) * t_scalar;
  var x24 = t_offset + cos(t_angle) * t_scalar;
  //.2
  var x25 = t_offset + cos(t_angle + 0.25) * t_scalar;
  var x26 = t_offset + cos(t_angle + 0.45) * t_scalar;
  var x27 = t_offset + cos(t_angle + 0.68) * t_scalar;

  var x28 = t_offset + cos(t_angle + 0.89) * t_scalar;
  var x29 = t_offset + cos(t_angle + 1) * t_scalar;
  var x30 = t_offset + cos(t_angle + 0.92) * t_scalar;

  var x31 = t_offset + cos(t_angle + 0.66) * t_scalar;
  var x32 = t_offset + cos(t_angle + 0.4) * t_scalar;
  var x32b = t_offset + cos(t_angle + 0.2) * t_scalar;
  var x33 = t_offset + cos(t_angle) * t_scalar;
  //.15
  var x34 = t_offset + cos(t_angle - 0.2) * t_scalar;
  var x35 = t_offset + cos(t_angle - 0.35) * t_scalar;
  var x36 = t_offset + cos(t_angle - 0.5) * t_scalar;

  var x37 = t_offset + cos(t_angle - 0.65) * t_scalar;
  var x38 = t_offset + cos(t_angle - 0.85) * t_scalar;
  var x39 = t_offset + cos(t_angle - 0.96) * t_scalar;

  var x40 = t_offset + cos(t_angle - 1) * t_scalar;
  var x41 = t_offset + cos(t_angle - 0.97) * t_scalar;
  var x42 = t_offset + cos(t_angle - 0.84) * t_scalar;
  //.1
  var x43 = t_offset + cos(t_angle - 0.65) * t_scalar;
  var x44 = t_offset + cos(t_angle - 0.45) * t_scalar;
  var x45 = t_offset + cos(t_angle - 0.35) * t_scalar;

  var x46 = t_offset + cos(t_angle - 0.25) * t_scalar;
  var x47 = t_offset + cos(t_angle - 0.15) * t_scalar;
  var x48 = t_offset + cos(t_angle - 0.05) * t_scalar;

  var x49 = t_offset + cos(t_angle + 0.05) * t_scalar;
  var x50 = t_offset + cos(t_angle + 0.15) * t_scalar;
  var x51 = t_offset + cos(t_angle + 0.25) * t_scalar;
  //.15
  var x52 = t_offset + cos(t_angle + 0.4) * t_scalar;
  var x53 = t_offset + cos(t_angle + 0.55) * t_scalar;
  var x54 = t_offset + cos(t_angle + 0.7) * t_scalar;
  //.2
  var x55 = t_offset + cos(t_angle + 0.88) * t_scalar;
  var x56 = t_offset + cos(t_angle + 0.98) * t_scalar;
  var x57 = t_offset + cos(t_angle + 1) * t_scalar;

  var x58 = t_offset + cos(t_angle + 0.96) * t_scalar;
  var x59 = t_offset + cos(t_angle + 0.86) * t_scalar;
  var x60 = t_offset + cos(t_angle + 0.7) * t_scalar;

  //tornado image y axis
  var y1 = map(mouseY, 0, height, -60, 93); //1
  var y2 = map(mouseY, 0, height, -60, 133);
  var y3 = map(mouseY, 0, height, -60, 173);
  var y4 = map(mouseY, 0, height, -60, 213);

  var y5 = map(mouseY, 0, height, -60, 253); //2
  var y6 = map(mouseY, 0, height, -60, 283);
  var y7 = map(mouseY, 0, height, -60, 313);
  var y8 = map(mouseY, 0, height, -60, 343);

  var y9 = map(mouseY, 0, height, -60, 373); //3
  var y10 = map(mouseY, 0, height, -60, 403);
  var y11 = map(mouseY, 0, height, -60, 428);
  var y12 = map(mouseY, 0, height, -60, 453);

  var y13 = map(mouseY, 0, height, -60, 473); //4
  var y14 = map(mouseY, 0, height, -60, 493);
  var y15 = map(mouseY, 0, height, -60, 513);
  var y16 = map(mouseY, 0, height, -60, 530);

  var y17 = map(mouseY, 0, height, -60, 547); //5
  var y18 = map(mouseY, 0, height, -60, 567);
  var y19 = map(mouseY, 0, height, -60, 579);
  var y20 = map(mouseY, 0, height, -60, 594);

  var y21 = map(mouseY, 0, height, -60, 609); //6
  var y22 = map(mouseY, 0, height, -60, 624);
  var y23 = map(mouseY, 0, height, -60, 636);
  var y24 = map(mouseY, 0, height, -60, 648);

  var y25 = map(mouseY, 0, height, -60, 660); //7
  var y26 = map(mouseY, 0, height, -60, 670);
  var y27 = map(mouseY, 0, height, -60, 680);
  var y28 = map(mouseY, 0, height, -60, 690);

  var y29 = map(mouseY, 0, height, -60, 698); //8
  var y30 = map(mouseY, 0, height, -60, 706);
  var y31 = map(mouseY, 0, height, -60, 714);
  var y32 = map(mouseY, 0, height, -60, 722);

  var y32b = map(mouseY, 0, height, -60, 729);

  var y33 = map(mouseY, 0, height, -60, 736); //9
  var y34 = map(mouseY, 0, height, -60, 743);
  var y35 = map(mouseY, 0, height, -60, 750);
  var y36 = map(mouseY, 0, height, -60, 756);

  var y37 = map(mouseY, 0, height, -60, 762); //10
  var y38 = map(mouseY, 0, height, -60, 768);
  var y39 = map(mouseY, 0, height, -60, 774);
  var y40 = map(mouseY, 0, height, -60, 780);

  var y41 = map(mouseY, 0, height, -60, 786); //11
  var y42 = map(mouseY, 0, height, -60, 792);
  var y43 = map(mouseY, 0, height, -60, 798);
  var y44 = map(mouseY, 0, height, -60, 804);

  var y45 = map(mouseY, 0, height, -60, 810); //12
  var y46 = map(mouseY, 0, height, -60, 815);
  var y47 = map(mouseY, 0, height, -60, 820);
  var y48 = map(mouseY, 0, height, -60, 825);

  var y49 = map(mouseY, 0, height, -60, 830); //13
  var y50 = map(mouseY, 0, height, -60, 835);
  var y51 = map(mouseY, 0, height, -60, 840);
  var y52 = map(mouseY, 0, height, -60, 845);

  var y53 = map(mouseY, 0, height, -60, 850); //14
  var y54 = map(mouseY, 0, height, -60, 855);
  var y55 = map(mouseY, 0, height, -60, 860);
  var y56 = map(mouseY, 0, height, -60, 865);

  var y57 = map(mouseY, 0, height, -60, 870); //15
  var y58 = map(mouseY, 0, height, -60, 875);
  var y59 = map(mouseY, 0, height, -60, 880);
  var y60 = map(mouseY, 0, height, -60, 885);

  // ec colors
  var wizFrom = color(0, 0, 0);
  var wizTo = color(232, 4, 1);
  var wizInterA = lerpColor(wizFrom, wizTo, 0.33);
  var wizInterB = lerpColor(wizFrom, wizTo, 0.66);

  var glindaFrom = color(157, 98, 152);
  var glindaTo = color(61, 191, 252);
  var glindaInterA = lerpColor(glindaFrom, glindaTo, 0.33);
  var glindaInterB = lerpColor(glindaFrom, glindaTo, 0.66);

  var hY = map(mouseY, 0, height, 0, 45);

  // KANSAS
  if (state < 2) {
    image(stormy, 0, 0, 0);
    textSize(32);
    fill(255);
    textAlign(CENTER);
    text("Welcome to", width / 2, 100);
    textSize(52);
    text("Some of Oz", width / 2, 155);

    var disappear;
    if (state > 1) {
      disappear = 0;
    } else {
      disappear = 255;
    }

    tint(255, disappear);
    image(shift, 820, 652);
    noTint();
    fill(184, 182, 160, disappear);
    noStroke();
    textSize(11);
    textFont("Helvetica");
    text(`F\nR\nI\nE\nN\nD\nL\nY`, 1018, 669);
    stroke(61, 58, 51, disappear);
    strokeWeight(3);
    line(1006, 654, 1031, 654);
    stroke(50, 50, 44, disappear);
    line(1031, 654, 1031, 771);
    stroke(8, 8, 8, disappear);
    line(1030, 771, 1005, 771);
    strokeWeight(1);

    fill(0);
    textSize(24);
    noStroke();
    textFont("MiTicaRegular");
    text(
      "To proceed, type one of the following, then press 'Enter'",
      width / 3,
      height * 0.75
    );
    text(
      "(first line is here,  second line is somewhere over the...)",
      width / 3,
      height * 0.79
    );
    text(
      "dorothy   ·   toto   ·    house    ·   tornado   ·   all",
      width / 3,
      height * 0.83
    );
    stroke(0);
    line(150, 747, 610, 747);
    noStroke();
    text(
      "yellow brick road   ·   emerald city   ·   flying monkeys",
      width / 3,
      height * 0.87
    );
    textSize(42);
    text(typed, width / 3, height * 0.935);

    // set up tornado
    if (state == 1.4 || state == 1.9) {
      noStroke();
      fill(187, 198, 204, 0 + hY);
      // tornado shape
      ellipseMode(CORNER);
      ellipse(mouseX - x2 - 400, y1 - 135, 1240, 60); //1
      ellipse(mouseX - x1 - 360, y1 - 90, 1140, 60); //1
      ellipse(mouseX - x2 - 300, y1 - 45, 1018, 60);

      ellipse(mouseX - x1 - 220, y1, 878, 60); //1
      ellipse(mouseX - x2 - 160, y2, 757, 60);
      ellipse(mouseX - x3 - 100, y3, 652, 60);
      ellipse(mouseX - x4 - 50, y4, 562, 60);

      ellipse(mouseX - x5, y5, 485, 60); //2
      ellipse(mouseX - x6, y6, 418, 60);
      ellipse(mouseX - x7, y7, 360, 59);
      ellipse(mouseX - x8, y8, 310, 59);

      ellipse(mouseX - x9, y9, 267, 58); //3
      ellipse(mouseX - x10, y10, 231, 58);
      ellipse(mouseX - x11, y11, 199, 57);
      ellipse(mouseX - x12, y12, 172, 56);

      ellipse(mouseX - x13, y13, 148, 55); //4
      ellipse(mouseX - x14, y14, 119, 54);
      ellipse(mouseX - x15, y15, 103, 53);
      ellipse(mouseX - x16, y16, 97, 52);

      ellipse(mouseX - x17, y17, 92, 50); //5
      ellipse(mouseX - x18, y18, 87, 48);
      ellipse(mouseX - x19, y19, 82, 46);
      ellipse(mouseX - x20, y20, 77, 44);

      ellipse(mouseX - x21, y21, 72, 42); //6
      ellipse(mouseX - x22, y22, 67, 41);
      ellipse(mouseX - x23, y23, 62, 30);
      ellipse(mouseX - x24, y24, 57, 29);

      ellipse(mouseX - x25, y25, 52, 28); //7
      ellipse(mouseX - x26, y26, 47, 27);
      ellipse(mouseX - x27, y27, 42, 25);
      ellipse(mouseX - x28, y28, 37, 23);

      ellipse(mouseX - x29, y29, 35, 22); //8
      ellipse(mouseX - x30, y30, 33, 21);
      ellipse(mouseX - x31, y31, 30, 20);
      ellipse(mouseX - x32, y32, 28, 19);

      ellipse(mouseX - x32b, y32b, 26, 18);

      ellipse(mouseX - x33, y33, 24, 17); //9
      ellipse(mouseX - x34, y34, 22, 16);
      ellipse(mouseX - x35, y35, 20, 15);
      ellipse(mouseX - x36, y36, 18, 14);

      ellipse(mouseX - x37, y37, 17, 13); //10
      ellipse(mouseX - x38, y38, 16, 12);
      ellipse(mouseX - x39, y39, 15, 11);
      ellipse(mouseX - x40, y40, 14, 11);

      ellipse(mouseX - x41, y41, 12, 10); //11
      ellipse(mouseX - x42, y42, 12, 10);
      ellipse(mouseX - x43, y43, 11, 9);
      ellipse(mouseX - x44, y44, 11, 9);

      ellipse(mouseX - x45, y45, 10, 8); //12
      ellipse(mouseX - x46, y46, 10, 8);
      ellipse(mouseX - x47, y47, 9, 7);
      ellipse(mouseX - x48, y48, 9, 7);

      ellipse(mouseX - x49, y49, 8, 6); //13
      ellipse(mouseX - x50, y50, 8, 6);
      ellipse(mouseX - x51, y51, 7, 5);
      ellipse(mouseX - x52, y52, 7, 5);

      ellipse(mouseX - x53, y53, 6, 4); //14
      ellipse(mouseX - x54, y54, 6, 4);
      ellipse(mouseX - x55, y55, 5, 3);
      ellipse(mouseX - x56, y56, 5, 3);

      ellipse(mouseX - x57, y57, 4, 2); //15
      ellipse(mouseX - x58, y58, 4, 2);
      ellipse(mouseX - x59, y59, 3, 1);
      ellipse(mouseX - x60, y60, 3, 1);

      //clouds of debris
      fill(100, hY);
      noStroke();

      ellipse(mouseX - x56 - 20, 813, 80, 48);
      ellipse(mouseX - x57 - 40, 820, 80, 38);
      ellipse(mouseX - x58 - 27, 820, 80, 38);
      ellipse(mouseX - x59 - 20, 828, 60, 38);
      ellipse(mouseX - x60 - 25, 832, 70, 38);
      ellipse(mouseX - x60 - 30, 842, 70, 38);

      textSize(28);
      fill(255);
      text("(move your mouse)", width * 0.78, height * 0.95);

      if (state == 1.9) {
        image(toto, 768, 597);
        image(house, 102, 0);
        image(dorothy, 371, 200);
      }

      t_angle += t_speed;
    } else if (state == 1.1) {
      image(toto, 768, 597);
    } else if (state == 1.2) {
      image(house, 102, 0);
    } else if (state == 1.3) {
      image(dorothy, 371, 200);
    }

    // YELLOW BRICK ROAD
  } else if (state >= 2 && state < 3) {
    // ybr background
    background(112, 173, 71);

    // poppies
    if (state == 2.4 || state == 2.9) {
      randomSeed(0);
      for (var i = -50; i < width + 50; i += 2) {
        var red = int(random(0, 60));
        var scalar = random(0.01, 0.65);
        var py = random(200, 366);
        poppy(i, py, red, scalar);
      }
    }

    push();
    translate(0, 316);
    //yellow brick road fill (background)
    noStroke();
    strokeWeight(2);
    fill(245, 205, 33);
    beginShape();
    curveVertex(430, 5);
    curveVertex(430, 5);
    curveVertex(600, 42);
    curveVertex(463, 300);
    curveVertex(width, 490);
    curveVertex(width + 350, -150);
    curveVertex(590, 1000);
    curveVertex(0, height - 316);
    curveVertex(5, 280);
    curveVertex(590, 42);
    curveVertex(430, 6);
    curveVertex(430, 6);
    endShape(CLOSE);

    // brick pattern
    stroke(112, 173, 71);
    strokeWeight(1);

    for (var i = 4; i <= height; i *= 1.2) {
      line(0, i, width, i);
    }

    for (var j = 5; j <= height; j += 155) {
      for (var k = 0; k <= width; k += 155) {
        line(width / 2, -20, k, j);
      }
    }

    pop();

    image(bluesky, 0, 0);

    // hills
    ellipseMode(CENTER);
    noStroke();
    fill(155, 150, 150); //greyish green
    arc(285, 320, 190, 30, PI, TAU);

    fill(77, 84, 91); //greyish blue
    arc(30, 320, 400, 300, PI, TAU);

    fill(120, 119, 87); //light green
    arc(100, 320, 490, 128, PI, TAU);

    fill(90, 98, 108); //medium grey
    arc(100, 320, 250, 108, PI, TAU);

    fill(123, 132, 78); //light green
    arc(200, 320, 180, 30, PI, TAU);

    fill(165, 150, 150); //greyish green
    arc(700, 320, 400, 60, PI, TAU);

    fill(77, 84, 91); //greyish blue
    arc(770, 320, 410, 78, PI, TAU);

    fill(89, 108, 46); //dark green
    arc(870, 320, 400, 131, PI, TAU);

    fill(123, 132, 78); //light green
    arc(1130, 320, 600, 100, PI, TAU);

    // poppies - foreground left
    if (state == 2.4 || state == 2.9) {
      randomSeed(0);
      for (var i = -50; i < 398; i += 56) {
        var red = int(random(0, 20));
        var scalar = random(0.65, 1.25);
        var py = random(304, 400);
        poppy(i, py, red, scalar);
      }

      // poppies - foreground right
      randomSeed(0);
      for (var i = 600; i < width + 50; i += 16) {
        var red = int(random(0, 20));
        var scalar = random(0.65, 1.25);
        var py = random(316, 700);
        poppy(i, py, red, scalar);
      }
    }

    // yellow brick road outline (foreground)
    push();
    translate(0, 316);
    stroke(52, 113, 51, 150);
    strokeWeight(2);
    noFill();
    beginShape();
    curveVertex(430, 5);
    curveVertex(430, 5);
    curveVertex(600, 42);
    curveVertex(463, 300);
    curveVertex(width, 490);
    curveVertex(width + 350, -150);
    curveVertex(590, 1000);
    curveVertex(0, height - 316);
    curveVertex(5, 280);
    curveVertex(590, 42);
    curveVertex(430, 6);
    curveVertex(430, 6);
    endShape(CLOSE);
    pop();

    if (state == 2.1) {
      image(scarecrow, 70, 193);
    } else if (state == 2.2) {
      image(lion, 390, 193);
    } else if (state == 2.3) {
      image(tinMan, 732, 412);
    } else if (state == 2.9) {
      image(tinMan, 732, 412);
      image(lion, 390, 193);
      image(scarecrow, 70, 193);
      fill(196, 204, 227, 60);
      strokeWeight(1);
      stroke(22, 83, 21);
      textSize(52);
      text("The Merry Old Land of Oz", width / 2, 120);
    }
    fill(0);
    textSize(24);
    noStroke();
    text(
      "What happened? Like before, your choices are:",
      width / 3,
      height * 0.74
    );
    text(
      "lion  ·  tinman  ·  scarecrow  ·  poppies  ·  all",
      width / 3,
      height * 0.78
    );
    text(
      "kansas  ·  emerald city  ·  flying monkeys",
      width / 3,
      height * 0.82
    );
    textSize(42);
    text(typed, width / 3, height * 0.95);

    // FLYING MONKEYS
  } else if (state >= 3 && state < 4) {
    background(163, 167, 205);
    noStroke();

    for (var i = 18; i < height; i += 328) {
      for (var j = 0; j < width; j += 328) {
        image(flymonkey1, j, i);
        image(flymonkey2, 164 + j, 164 + i);
      }
    }

    if (state == 3.1) {
      image(witch, 373, 320);
    } else if (state == 3.2) {
      fill(92, 22, 12);
      rect(0, height - 63, 373, 15); // crystal ball frame
      image(ball, -127, 542);
    } else if (state == 3.3) {
      image(guards, 770, 8);
    } else if (state == 3.9) {
      fill(214, 42, 25);
      rect(0, height - 63, 373, 15); // crystal ball frame
      image(witch, 373, 320);
      image(ball, -127, 542);
      image(guards, 770, 8);
    }
    // black frame
    fill(0);
    rect(0, 0, width, 18);
    rect(0, height - 52, width, 52);
    // text instructions
    fill(244, 42, 25);
    textSize(24);
    text(
      "Should you explore, or escape, that is the question...",
      width / 2,
      height * 0.65
    );
    text("witch  ·  guards  ·  crystal ball  ·  all", width / 2, height * 0.69);
    text(
      "kansas  ·  emerald city  ·  yellow brick road",
      width / 2,
      height * 0.73
    );
    text(`Uh-oh!!\nYou're in the`, 245, 140);
    textSize(42);
    text(typed, width / 2, height * 0.85);
    text(`Witch's\nCastle`, 245, 248);

    // EMERALD CITY
  } else if (state >= 4) {
    background(140, 129, 135);
    image(ozSky, 0, 0);

    if (state == 4.9) {
      // rays
      push();
      stroke(166, 203, 211, 10);
      strokeWeight(40);
      translate(width / 2, height / 2);
      var angle = -QUARTER_PI / 6.0;
      for (var i = 0; i < 61; i++) {
        line(0, 0, 750, 0);
        rotate(angle);
      }
      pop();
    }

    // background halos
    noFill();
    stroke(166, 203, 211, 50);
    strokeWeight(40);
    ellipse(width / 2, height / 2, 300, 300);
    ellipse(width / 2, height / 2, 600, 600);

    // draw the towers
    randomSeed(0);
    for (var i = 120; i < width - 100; i += 18) {
      var green = int(random(0, 91));
      var ozScalar = random(0.25, 1.0);
      var ty = random(766, 200);
      ozTower(i, ty, green, ozScalar);
    }

    noStroke();
    // wizard
    if (state == 4.2) {
      fill(0);
      rect(0, 0, 322, height);
      image(wiz, 62, 40);
      // glinda the good witch
    } else if (state == 4.3) {
      fill(157, 98, 152);
      rect(822, 0, 400, height);
      image(glinda, 822, 87);
      // ruby slippers
    } else if (state == 4.5) {
      fill(232, 4, 1);
      rect(0, 0, 322, height);
      image(ruby, 77, 675);
      // balloon
    } else if (state == 4.4) {
      fill(61, 191, 252);
      rect(822, 0, 400, height);
      image(balloon, 822, 675);
    } else if (state == 4.9) {
      // wizard lerp
      fill(wizFrom);
      rect(0, 0, 322, height * 0.25);
      fill(wizInterA);
      rect(0, height * 0.25, 322, 121);
      fill(wizInterB);
      rect(0, 630, 322, 58);
      fill(wizTo);
      rect(0, 675, 322, height * 0.25);

      // glinda lerp
      fill(glindaFrom);
      rect(822, 0, 400, height * 0.25);
      fill(glindaInterA);
      rect(822, 286, 400, 58);
      fill(glindaInterB);
      rect(822, 630, 322, 58);
      fill(glindaTo);
      rect(822, 675, 400, 300);

      image(balloon, 822, 675);
      image(ruby, 77, 675);
      image(glinda, 822, 87);
      image(wiz, 62, 40);
      tint(255, 128);
      image(wizFire, 322, 300);
      noTint();

      // ec text
      fill(201, 253, 143, 150);
      strokeWeight(1, 150);
      stroke(0);
      push();
      translate(width / 2, height / 2);
      var angle = -QUARTER_PI / 6.0;
      for (var i = 0; i < ec.length; i++) {
        text(ec[i], 300, 0);
        rotate(angle);
      }
      pop();
    }

    // text instructions
    fill(0);
    noStroke();
    textSize(24);
    text("You know the ropes...", width / 2, height * 0.81);
    text(
      "wizard  ·  glinda  ·  ruby  ·  balloon  ·  all",
      width / 2,
      height * 0.84
    );
    text(
      "kansas  ·  flying monkeys  ·  yellow brick road",
      width / 2,
      height * 0.87
    );
    textSize(42);
    text(typed, width / 2, height * 0.95);
  }
}

function poppy(x, y, r, s) {
  ellipseMode(CENTER);
  push();
  translate(x, y);
  scale(s);
  fill(250 - r, 60 - r, 27 + r);
  stroke(112, 173, 71); //same as green backgr
  strokeWeight(2);
  ellipse(0, 0, 25, 17);
  ellipse(20, 10, 25, 17);
  ellipse(-15, 15, 25, 17);
  ellipse(3, 18, 25, 17);

  ellipse(50, 35, 25, 17);
  ellipse(70, 45, 25, 17);
  ellipse(53, 48, 25, 17);

  pop();
}

function ozTower(x, y, g, s) {
  ellipseMode(CENTER);
  // tower
  var emerald = color(113 - g, 159 - g / 2, 87 - g);
  push();
  translate(x, y);
  scale(s);
  fill(emerald); // emerald green value
  stroke(emerald);
  strokeWeight(2);
  arc(0, 0, 40, 40, PI, TAU);
  rect(-20, 0, 40, 1800);

  // shine
  noStroke();
  fill(214, 255, 51, 80); //chartreuse
  rect(-20, 0, 10, 10);
  triangle(-20, 0, -10, 0, -15, -35);
  triangle(-10, 0, -10, 10, 10, 5);
  triangle(-20, 10, -10, 10, -15, 45);
  triangle(-20, 0, -20, 10, -40, 5);

  // brighter shine
  fill(214, 255, 101, 140);
  rect(-20, 0, 10, 10);
  triangle(-20, 0, -10, 0, -15, -20);
  triangle(-10, 0, -10, 10, 5, 5);
  triangle(-20, 10, -10, 10, -15, 30);
  triangle(-20, 0, -20, 10, -35, 5);

  // blur center
  fill(255, 160);
  noStroke();
  ellipse(-15, 5, 8, 21);

  // brightest shine
  fill(231, 255, 230);
  beginShape();
  vertex(-20, 5);
  vertex(-15, 0);
  vertex(-10, 5);
  vertex(-15, 10);
  endShape();

  // lines in shine
  stroke(255, 130);
  strokeWeight(1);
  line(-15, 0, -15, 1160);
  line(-10, 5, 5, 5);

  //line for definition
  stroke(0, 30);
  line(-20, 13, -20, 1800);

  pop();
}
