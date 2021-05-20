// Title: Dracaena
// Author: J.T. Martin

// store pixel size of images
var s = 237;

//
var draw_position_x = 0;
var yn;
var hn;
var hx;
var sn;
var center;
var font;
var img;
var img1;
var img2;
var img3;
var hue;

var click = 1;

const mouseDirections = "move and click your mouse";
let moveX1, moveX2;

function preload() {
  font = loadFont("Robus-BWqOd.otf"); // (via license: Trans ID 6L014138AG223504L Creative Fabrica BV)
  img1 = loadImage("images/plant1.jpg");
  img2 = loadImage("images/plant2.jpg");
  img3 = loadImage("images/plant3.jpg");
  img4 = loadImage("images/plant4.jpg");
}

function mousePressed() {
  click++;
  if (click > 4) click = 1;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  rectMode(CENTER);
  background(0);
  textFont(font);
  center = width / 3;
  moveX1 = width;
  moveX2 = -width * 0.1;
}

function draw() {
  if (click == 1) {
    img = img1;
  } else if (click == 2) {
    img = img2;
  } else if (click == 3) {
    img = img3;
  } else if (click == 4) {
    img = img4;
  }

  img.loadPixels();
  var mx = constrain(mouseX, center - s / 2, center + s / 2);
  var x = map(mx, center - s / 2, center + s / 2, s, 0);
  x = floor(x);

  // graphic items in the background · · · · · · ·
  for (var y = 0; y < height; y++) {
    var c = img.get(x, y);
    set(draw_position_x, y, c);
    set(draw_position_x + s + s, y + s, c);
    set(draw_position_x + 4 * s, y + 2 * s, c);
    set(draw_position_x - 6, y + 3 * s, c);
  }
  updatePixels();
  strokeWeight(1);
  noFill();

  click == 4 ? stroke(255) : stroke(0, 90);
  for (let i = 0; i < height; i += 3) {
    line(0, i, width, i);
  }

  image(img, mx, height - s / 2);

  image(img, mx + 2.5 * s, height - s);

  image(img, mx - s * 1.5, height - 3 * s);

  if (click == 1) {
    hue = "rgba(35,178,254,255)"; // light blue
    yn = 70;
    hn = height;
    hx = hue;
    sn = s;
  } else if (click == 2) {
    hue = "rgba(54, 99, 217, 255)"; // dark blue
    yn = -140;
    hn = height * 0.9;
    hx = hue;
    sn = 200;
  } else if (click == 3) {
    hue = "rgba(220, 31, 61, 255)"; // coral
    yn = 103;
    hn = height * 1.5;
    hx = hue;
    sn = 100;
  } else if (click == 4) {
    hue = "rgba(170, 220, 47, 255)"; // lime
    yn = 7;
    hn = height * 1.25;
    hx = 0;
    sn = 250;
  }

  stroke(hue);
  //line(width / 3, height - s, width / 3, height);

  rect(mx - s / 2, height - s, 237, 237);
  rect(mx + 2 * s, height - s * 1.5, 237, 237);
  rect(mx - 2 * s, height - 3.5 * s, 237, 237);

  fill(0);
  strokeWeight(2);
  textFont(font);
  textSize(320);
  var offset = 0;
  for (let j = yn; j < height * 1.5; j += 169) {
    for (let i = -480; i < width * 2.5; i += 863) {
      text("Dracaena", i - offset, j);
    }
    offset += 480;
  }

  // build frame
  click == 4 ? fill(255) : fill(0);
  rectMode(CORNER);
  noStroke();
  // left
  rect(0, 0, 150, height);
  // right
  rect(width - 150, 0, 150, height);
  // top
  rect(0, 0, width, 150);
  // bottom
  rect(0, height - 150, width, 150);

  // moving mouse directions
  textFont("Lucida Sans Unicode");
  fill(35, 178, 254);
  textSize(20);
  text(mouseDirections, moveX1, 80);
  text(mouseDirections, moveX2, 80);
  moveX1 -= 3;
  moveX2 += 3;

  // graphic items in the foreground · · · · · · ·

  // return stroke
  if (click == 1) {
    hue = "rgba(35,178,254,255)"; // light blue
  } else if (click == 2) {
    hue = "rgba(206, 118, 80, 255)"; // orange
  } else if (click == 3) {
    hue = "rgba(250, 134, 181, 255)"; // pink
  } else if (click == 4) {
    hue = "rgba(255, 255, 255, 255)"; // white
  }

  fill(hx);
  stroke(hx);
  strokeWeight(1);
  ellipse(mx, height - 75, 18, 18);
  line(width / 3, height - 150, width / 3, height - 66);

  stroke(hue);
  strokeWeight(2);

  image(img, mx + 3 * sn, hn * 0.25);

  image(img, mx - sn / 2, hn / 2 - 4);

  noFill();
  rectMode(CENTER);
  rect(mx + 3 * sn, hn * 0.25, 237, 237);
  rect(mx - sn / 2, hn / 2 - 4, 237, 237);
  rectMode(CORNER);
  // loop back around
  draw_position_x++;

  if (draw_position_x >= width) {
    draw_position_x = 0;
  }
}
