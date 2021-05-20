// UNIREVERS
// declare vars for visual elements
let stars = [];
let total = 20;
let score = 0;
let lives = 9;
let state = 0;
let scoreValue = 300;
let yesBtnSize = 120;
let interval1 = 1000;
let interval2 = 2000;
let interval3 = 3000;
let interval4 = 4000;
let interval5 = 5000;
let interval6 = 6000;
let interval7 = 7000;
let mAngle = 0.0;
let rAngle = 0.0;
let rInterval = 150000;
let planet, centerX, centerY, timer, x, link, saturn, expSaturn;
let neptune, jupiter, starry, galaxy, milky, mosaic, font;
let introText = ["WOULD", "YOU", "LIKE", "TO", "PLAY", "A", "GAME?"];
let conquerText = ["CONGRATS!", "YOU", "HAVE", "REACHED", "EXPERT", "LEVEL"];
let endText = ["WOULD", "YOU", "LIKE", "TO", "PLAY", "AGAIN?"];
let overText = [" ", " ", "GAME", "OVER"];
let colors = [
  [63, 184, 175, 70],
  [127, 199, 175, 70],
  [218, 216, 167, 70],
  [255, 158, 157, 70],
  [255, 61, 127, 70],
  [102, 102, 255, 70],
  [204, 0, 102, 70],
];
let expertColors = [
  [242, 15, 34, 100],
  [88, 120, 140, 100],
  [155, 185, 191, 100],
  [217, 206, 54, 100],
  [217, 197, 160, 100],
  [127, 199, 175, 100],
];
let invert = false;

// sound
let orbit4, orbit5, hit, scoreSound, bonusSound, tap;
// text
let toggle1 = "green/blue";
let toggle2 = "purple";
let toggle3 = "red";
let gameName1 = `UNIREVERS is a game about a strange universe that mirrors our own in reverse.  Control your star-eating planet with arrow keys. Green/blue stars are nourishing. Purple bonus \nstars are even better, restoring a life. Avoid red/black stars; they're poisonous and could destroy you. Expert level is reached when the player reaches a score of 300. Good luck!`;
let gameName2 = `UNIREVERS is a game about a strange universe that mirrors our own in reverse.  Control your star-eating planet with arrow keys. Red/orange-red stars are nourishing. Green bonus \nstars are even better, restoring a life. Avoid cyan/white stars; they're poisonous and could destroy you. Expert level is reached when the player reaches a score of 300. Good luck!`;
let photo = `Astro images by NASA, Felix Mittermeier, Brett Ritchie, Raphael Nogueira, Ivana Cajina, Modern Affliction & Jack B on Unsplash\nSound effects by Mixkit; music by yours truly 😎`;

function preload() {
  // image files
  galaxy = loadImage("assets/galaxy.jpg");
  saturn = loadImage("assets/nasa-saturn.png");
  expSaturn = loadImage("assets/saturn.png");
  milky = loadImage("assets/milky-way.jpg");
  neptune = loadImage("assets/nasa-neptune.png");
  jupiter = loadImage("assets/jupiter.png");
  starry = loadImage("assets/stars.jpg");
  mosaic = loadImage("assets/mosaic.jpg");
  // sound files
  orbit4 = loadSound("assets/orbit4.ogg");
  orbit5 = loadSound("assets/orbit5.ogg");
  hit = loadSound("assets/hit.ogg");
  scoreSound = loadSound("assets/score2.ogg");
  bonusSound = loadSound("assets/bonus.ogg");
  tap = loadSound("assets/tap.ogg");
  // title font
  font = loadFont("assets/Robus-BWqOd.otf");
}

function setup() {
  createCanvas(1200, 600);
  centerX = width / 2;
  centerY = 470;
  timer = millis();
  // dark and light buttons
  bDk = color(0, 0, 0);
  bLt = color(0, 0, 0);
  bgFalse = new Button(centerX + 250, centerY, 110, 30, bDk, "Dark Mode");
  bgTrue = new Button(centerX + 400, centerY, 110, 30, bLt, "Light Mode");
}

function draw() {
  if (state == 0) {
    drawIntro();
  } else if (state == 1) {
    drawPlaying();
  } else if (state == 2) {
    drawConquer();
  } else if (state == 3) {
    drawExpert();
  } else if (state == 4) {
    drawEnd();
  }
}

function drawIntro() {
  background(0);
  textSize(30);
  noStroke();
  textFont("Arial");
  textAlign(CENTER, CENTER);
  let d = dist(mouseX, mouseY, centerX, centerY);
  if (millis() > interval2) {
    image(galaxy, 0, 0);
    if (invert) {
      filter(INVERT);
      gameName = gameName2;
    } else {
      gameName = gameName1;
    }
  }
  if (millis() > interval1) {
    for (let i = 0; i < introText.length; i++) {
      if (i < 4) {
        x = i * 150;
      } else {
        x -= 150;
      }
      fill(185, 70);
      rect(x + 525, i * 60 + 70, 150, 60);
    }
  }

  if (millis() > interval3) {
    for (let i = 0; i < introText.length; i++) {
      if (i < 4) {
        x = i * 150;
      } else {
        x -= 150;
      }

      fill(185, 70);
      rect(x + 525, i * 60 + 70, 150, 60);
      fill(255, 90);
      rect(x + 225, i * 60 + 70, 150, 60);
    }
  }

  if (millis() > interval4) {
    for (let i = 0; i < introText.length; i++) {
      if (i < 4) {
        x = i * 150;
      } else {
        x -= 150;
      }

      fill(185, 70);
      rect(x + 525, i * 60 + 70, 150, 60);
      fill(255, 90);
      rect(x + 225, i * 60 + 70, 150, 60);
      fill(colors[i]);
      rect(x + 75, i * 60 + 70, 150, 60);
    }
  }

  if (millis() > interval5) {
    for (let i = 0; i < introText.length; i++) {
      let currentWord = introText[i];

      if (i < 4) {
        x = i * 150;
      } else {
        x -= 150;
      }

      fill(185, 70);
      rect(x + 525, i * 60 + 70, 150, 60);
      fill(255, 90);
      rect(x + 225, i * 60 + 70, 150, 60);
      fill(colors[i]);
      rect(x + 75, i * 60 + 70, 150, 60);
      fill(255);
      text(currentWord, x + 75, i * 60 + 70, 150, 60);
    }
  }

  // draw start button
  if (d < (yesBtnSize * 1.6) / 2) {
    fill(207, 207, 255);
    stroke(255, random(255), 0);
  } else {
    fill(102, 102, 255);
    stroke(185);
  }

  if (millis() > interval7) {
    strokeWeight(4);
    ellipse(centerX, centerY, yesBtnSize * 1.6, yesBtnSize);

    if (d < (yesBtnSize * 1.6) / 2) {
      fill(255, random(255), 0);
    } else {
      fill(0, 255, 0);
    }
    noStroke();
    textSize(40);
    text("YES", centerX, centerY);
    fill(165);
    textSize(14);
    text("START", centerX, centerY + 30);

    // background-changing buttons
    bgFalse.render();
    bgTrue.render();
  }

  //draw box with description & instructions
  if (millis() > interval6) {
    fill(185, 170);
    noStroke();
    rect(75, height - 50, 1050, 40);
    fill(0);
    textSize(13);
    textAlign(LEFT);
    text(gameName, 83, height - 28);
  }

  // draw title
  textFont(font);
  noStroke();
  textAlign(LEFT);
  fill(102, 102, 255, 170);
  textSize(95);
  text("UNIREVERS", 537, 81);
}

function drawPlaying() {
  image(galaxy, 0, 0);
  noCursor();
  textFont("Arial");
  filter;
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].render();
  }

  planet.update();
  planet.render();

  if (lives == 0) {
    gameOver();
  } else if (score >= scoreValue) {
    gameConquered();
  }

  textSize(18);
  textAlign(LEFT);
  if (invert) {
    fill(0);
  }
  text("Score: " + score, 10, 20);
  text("Lives: " + lives, 10, 40);
}

function drawConquer() {
  cursor();
  textSize(30);
  textAlign(CENTER, CENTER);
  let d = dist(mouseX, mouseY, centerX, centerY);
  if (invert) {
    filter(INVERT);
  }
  image(mosaic, 0, 0);

  for (let i = 0; i < conquerText.length; i++) {
    let currentWord = conquerText[i];
    x = i * 200;
    fill(expertColors[i]);
    rect(x, i * 60 + 90, 200, 60);
    fill(255);
    text(currentWord, x, i * 60 + 90, 200, 60);
  }

  fill(63, 184, 175, 100);
  rect(400, 90, 200, 60);
  fill(255);
  textSize(16);
  text("SCORE :   " + score, width / 2 - 100, 120);

  if (d < (yesBtnSize * 1.6) / 2) {
    fill(200, 200, 255, 150);
    stroke(255, random(255), 0);
  } else {
    fill(102, 102, 255, 150);
    stroke(185);
  }

  strokeWeight(4);
  ellipse(centerX, centerY, yesBtnSize * 1.6, yesBtnSize);

  if (d < (yesBtnSize * 1.6) / 2) {
    fill(255, random(255), 0);
  } else {
    fill(0, 255, 0);
  }
  noStroke();
  textSize(34);
  text("CONQUER", centerX, centerY + 3);
  fill(155);
  textSize(14);
  text("ENTER", centerX, centerY - 33);
  text("MODE", centerX, centerY + 33);
  image(expSaturn, width * 0.7, height * 0.15);
  image(neptune, width * 0.1, height * 0.6);
  if (invert) {
    filter(INVERT);
  }
}

function drawExpert() {
  noCursor();
  push();
  translate(centerX, centerY);
  rotate(mAngle * 0.02);
  if (invert) {
    filter(INVERT);
  }
  image(milky, -1497, -1000);
  pop();

  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].render();
  }

  planet.update();
  planet.render();

  if (lives == 0) {
    gameOver();
  }

  if (invert) {
    fill(0);
  }

  textSize(18);
  textAlign(LEFT);
  text("Score: " + score, 10, 20);
  text("Lives: " + lives, 10, 40);
  mAngle++;
}

function drawEnd() {
  textFont("Arial");
  noStroke();
  cursor();
  image(mosaic, 0, 0);
  if (invert) {
    filter(INVERT);
  }
  textSize(30);
  textAlign(CENTER);
  let d = dist(mouseX, mouseY, centerX, centerY);
  for (let i = 0; i < endText.length; i++) {
    let currentWord = endText[i];
    let lastWord = overText[i];

    if (i < 4) {
      x = i * 150;
    } else {
      x -= 150;
    }

    textSize(30);
    fill(colors[i]);
    rect(x + 75, i * 60 + 50, 150, 60);
    fill(255, 140);
    rect(x + 225, i * 60 + 50, 150, 60);
    fill(0, 0);
    rect(x + 375, i * 60 + 50, 150, 60);
    fill(185, 140);
    rect(x + 525, i * 60 + 50, 150, 60);
    fill(255);
    text(currentWord, x + 75, i * 60 + 50, 150, 60);
    fill(184, 0, 92, 170);
    textStyle(BOLD);
    text(lastWord, x + 525, i * 60 + 50, 150, 60);
    textSize(16);
    textStyle(NORMAL);
  }

  fill(184, 0, 92);
  text("SCORE :   " + score, 750, 140);

  if (d < (yesBtnSize * 1.6) / 2) {
    fill(255, 110);
    stroke(255, random(255), 0);
  } else {
    fill(102, 102, 255, 110);
    stroke(185);
  }

  strokeWeight(4);
  ellipse(centerX, centerY, yesBtnSize * 1.6, yesBtnSize);

  if (d < (yesBtnSize * 1.6) / 2) {
    fill(255, random(255), 0);
  } else {
    fill(0, 255, 0);
  }
  noStroke();
  textSize(40);
  text("SURE!", centerX, centerY);

  fill(185);
  textSize(14);
  text("RESTART", centerX, centerY + 30);

  // background-changing buttons
  bgFalse.render();
  bgTrue.render();

  // photo credits
  fill(185, 170);
  rect(190, height - 50, 830, 45);
  fill(0);
  textAlign(LEFT);
  text(photo, 207, height - 27);
  // title
  textFont(font);
  textAlign(LEFT);
  textSize(95);
  noFill();
  strokeWeight(1);
  stroke(204, 0, 102, 170);
  text("UNIREVERS", 537, 61);
}

function startGame() {
  lives = 9;
  score = 0;
  state = 1;
  planet = new Planet();
  for (let i = 0; i < total; i++) {
    stars[i] = new Stellation(planet);
  }
}

function startExpert() {
  lives = 4;
  score = scoreValue;
  state = 3;
  planet = new Planet();
  for (let i = 0; i < total; i++) {
    stars[i] = new Stellation(planet);
  }
}

function gameOver() {
  state = 4;
  orbit4.stop();
  orbit5.stop();
}

function gameConquered() {
  state = 2;
  orbit4.stop();
}

function mousePressed() {
  let d = dist(mouseX, mouseY, centerX, centerY);
  if (state == 0 || state == 4) {
    if (d < (yesBtnSize * 1.6) / 2) {
      startGame();
    }
  } else if (state == 2) {
    if (d < (yesBtnSize * 1.6) / 2) {
      startExpert();
    }
  }
  // trigger sound file
  if (orbit4.isPlaying() || orbit5.isPlaying()) {
    orbit4.stop();
    orbit5.stop();
  } else if (state == 1) {
    orbit4.loop();
    orbit4.setVolume(1.0);
  } else if (state == 3) {
    orbit5.loop();
    orbit5.setVolume(1.0);
  }

  // light and dark modes
  if (bgTrue.update()) {
    invert = true;
    toggle1 = "Red/orange-red";
    toggle2 = "Green";
    toggle3 = "Cyan/white";
  } else if (bgFalse.update()) {
    invert = false;
    toggle1 = "Green/blue";
    toggle2 = "Purple";
    toggle3 = "Red";
  }
}

function Stellation(planet) {
  noStroke();
  this.size = 20;
  this.radius1 = 2;
  this.radius2 = 20;
  this.npoints = 9;
  this.speed = 5;
  this.planet = planet;

  if (invert && state == 3) {
    this.speed = 10;
  } else if (invert) {
    this.speed = 7;
  }

  this.init = function () {
    this.x = random(20, width - 20);
    this.y = random(-height, -20);
    this.bad = random(100) < 20;
    this.bonus = random(100) < 2;
  };

  this.update = function () {
    this.y += this.speed;
    this.testPlanet();
    if (this.y - this.size > height) {
      this.init();
    }
  };

  this.render = function () {
    if (score < scoreValue) {
      if (this.bad) {
        fill(255, 0, 0);
      } else if (this.bonus) {
        fill(255, 0, 255);
      } else {
        fill(0, random(255), random(255));
      }
    } else {
      this.radius1 = 3;
      this.radius2 = 30;
      this.npoints = 14;
      if (this.bad) {
        // draw black stars
        fill(random(255), 0, 0);
        star(this.x, this.y, this.radius1, this.radius2, this.npoints + 3);
        fill(0);
      } else if (this.bonus) {
        fill(255, 0, 255);
      } else {
        fill(0, random(255), random(255));
      }
    }
    star(this.x, this.y, this.radius1, this.radius2, this.npoints);
  };

  this.testPlanet = function () {
    let top = this.y + this.size / 2 > this.planet.y; // the bottom of the star > top of planet
    let btm = this.y - this.size / 2 < this.planet.y + this.planet.height;
    let left = this.x + this.size / 2 > this.planet.x;
    let right = this.x - this.size / 2 < this.planet.x + this.planet.width;

    if (top && btm & left & right) {
      if (this.bad) {
        this.planet.hit();
      } else if (this.bonus) {
        this.planet.bonus();
      } else {
        this.planet.score();
      }
      this.init();
    }
  };

  this.init();
}

function Planet() {
  this.width = 50;
  this.height = 21;
  this.speed = 5;
  this.x = width / 2 - this.width;
  this.y = height - 130;
  this.color = color(255);
  this.offset = 0;

  if (invert && state == 3) {
    this.speed = 10;
  } else if (invert) {
    this.speed = 7;
  }

  this.sinval = sin(rAngle);
  this.r1 = map(this.sinval, -1, 1, 0, 150);
  this.r2 = map(this.sinval, -1, 1, 0, 200);
  this.r3 = map(this.sinval, -1, 1, 0, 250);
  rAngle++;

  this.update = function () {
    if (this.x + this.width > width) {
      this.x = width - this.width;
    } else if (this.x < 0) {
      this.x = 0;
    } else if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.speed;
    } else if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.speed;
    } else if (keyIsDown(UP_ARROW)) {
      this.y -= this.speed;
    } else if (keyIsDown(DOWN_ARROW)) {
      this.y += this.speed;
    } else if (this.y < 0) {
      this.y = 0;
    } else if (this.y + this.height > height) {
      this.y = height - this.height;
    }
  };

  this.score = function () {
    score += 2;
    this.color = color(0, 255, 0);
    this.width += 2;
    this.height += 2;
    this.y--;
    this.offset += 1;
    scoreSound.play();

    // collision/feedback animation
    stroke(0, 255, 0, 100);
    strokeWeight(this.r1 / 2);
    noFill();
    ellipse(
      this.x + this.offset,
      this.y + this.offset,
      this.r1 * 2,
      this.r1 * 2
    );
    ellipse(
      this.x + this.offset,
      this.y + this.offset,
      this.r2 * 3,
      this.r2 * 3
    );
    ellipse(
      this.x + this.offset,
      this.y + this.offset,
      this.r3 * 4,
      this.r3 * 4
    );
    noStroke();
  };

  this.hit = function () {
    lives--;
    score -= 2;
    this.color = color(255, 0, 0);
    this.width -= 2;
    this.height -= 2;
    this.y++;

    // collision/feedback animation
    stroke(255, 0, 0, 130);
    strokeWeight(this.r2 / 2);
    noFill();
    ellipse(
      this.x + this.offset,
      this.y + this.offset,
      this.r1 * 2,
      this.r1 * 2
    );
    ellipse(
      this.x + this.offset,
      this.y + this.offset,
      this.r2 * 3,
      this.r2 * 3
    );
    ellipse(
      this.x + this.offset,
      this.y + this.offset,
      this.r3 * 4,
      this.r3 * 4
    );
    noStroke();
    hit.play();
    this.offset -= 1;
  };

  this.bonus = function () {
    lives++;
    score += 5;
    this.color = color(255, 0, 255);
    this.width += 3;
    this.height += 3;
    this.y -= 3;

    // collision/feedback animation
    stroke(255, 0, 255, 200);
    strokeWeight(this.r2 / 2);
    noFill();
    ellipse(
      this.x + this.offset,
      this.y + this.offset,
      this.r1 * 2,
      this.r1 * 2
    );
    ellipse(
      this.x + this.offset,
      this.y + this.offset,
      this.r2 * 3,
      this.r2 * 3
    );
    ellipse(
      this.x + this.offset,
      this.y + this.offset,
      this.r3 * 4,
      this.r3 * 4
    );
    noStroke();
    bonusSound.play();
    tap.play();
    this.offset += 1.5;
  };

  this.render = function () {
    fill(this.color);
    if (score < scoreValue) {
      image(saturn, this.x, this.y, this.width, this.height);
      if (invert) {
        filter(INVERT);
      }
      // if score reaches expert level, planet changes to jupiter
    } else {
      image(jupiter, this.x, this.y, this.width, this.height);
      if (invert) {
        filter(INVERT);
      }
    }
    this.color = color(255);
  };
}

function star(x, y, radius1, radius2, npoints) {
  angleMode(RADIANS);
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

// for inverted mode buttons
function Button(x, y, w, h, c, label) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.c = c;
  this.label = label;

  this.render = function () {
    fill(185, 170);
    noStroke();
    rect(this.x, this.y, this.w, this.h, 20);
    textAlign(CENTER, CENTER);
    fill(0);
    textSize(14);
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
