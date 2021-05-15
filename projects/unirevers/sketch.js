// UNIREVERS
// declare vars for visual elements
let stars = [];
let total = 20;
let score = 0;
let lives = 9;
let state = 0;
let scoreValue = 300;
let yesBtnSize = 120;
let interval = 3000;
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
  [63, 184, 175, 110],
  [127, 199, 175, 110],
  [218, 216, 167, 110],
  [255, 158, 157, 110],
  [255, 61, 127, 110],
  [102, 102, 255, 110],
  [204, 0, 102, 110],
];
let expertColors = [
  [242, 15, 34, 100],
  [88, 120, 140, 100],
  [155, 185, 191, 100],
  [217, 206, 54, 100],
  [217, 197, 160, 100],
  [127, 199, 175, 100],
];

// sound
let wabern, hit, scoreSound, bonusSound, tap;
// text
let gameName = `UNIREVERS is a game about a strange universe that mirrors our own in reverse.  Control your star-eating planet with left & right arrows. Green/blue stars are nourishing.\nPurple bonus stars are even better. Avoid red stars; they're poisonous and could destroy you. Expert level is reached when the player reaches a score of 300. Good luck!`;
let photo = `Astro images by NASA, Felix Mittermeier, Brett Ritchie, Raphael Nogueira, Ivana Cajina & Jack B on Unsplash`;

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
  wabern = loadSound("assets/wabern.ogg");
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
  textSize(30);
  noStroke();
  textFont("Arial");
  textAlign(CENTER, CENTER);
  let d = dist(mouseX, mouseY, centerX, centerY);
  image(galaxy, 0, 0);

  if (millis() > interval) {
    for (let i = 0; i < introText.length; i++) {
      let currentWord = introText[i];

      if (i < 4) {
        x = i * 150;
      } else {
        x -= 150;
      }

      fill(colors[i]);
      rect(x + 75, i * 60 + 70, 150, 60);
      fill(255, 170);
      rect(x + 225, i * 60 + 70, 150, 60);
      fill(0, 0);
      rect(x + 375, i * 60 + 70, 150, 60);
      fill(185, 170);
      rect(x + 525, i * 60 + 70, 150, 60);
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

  //draw box with description & instructions
  fill(185, 170);
  rect(75, height - 50, 1050, 40);
  fill(0);
  textSize(13);
  textAlign(LEFT);
  text(gameName, 95, height - 28);

  // draw title
  textFont(font);
  textAlign(LEFT);
  fill(255, 170);
  textSize(95);
  text("UNIREVERS", 537, 81);
}

function drawPlaying() {
  background(0);
  image(starry, 0, 0);
  noCursor();
  textFont("Arial");

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
  text("Score: " + score, 10, 20);
  text("Lives: " + lives, 10, 40);
}

function drawConquer() {
  cursor();
  textSize(30);
  textAlign(CENTER, CENTER);
  let d = dist(mouseX, mouseY, centerX, centerY);
  image(milky, -600, -600);

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
}

function drawExpert() {
  noCursor();
  background(0);
  push();
  translate(centerX, centerY);
  rotate(mAngle * 0.02);
  image(milky, -900, -700);
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
  // photo credits
  fill(185, 170);
  rect(227, height - 41, 750, 25);
  fill(0);
  textAlign(LEFT);
  text(photo, 260, height - 27);
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
}

function gameConquered() {
  state = 2;
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
  if (wabern.isPlaying()) {
    wabern.stop();
  } else if (state == 1 || state == 2 || state == 3) {
    wabern.play();
  }
}

function Stellation(planet, glo) {
  noStroke();
  this.size = 20;
  this.radius1 = 2;
  this.radius2 = 20;
  this.npoints = 9;
  this.speed = 5;
  this.planet = planet;
  this.glo = glo;

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
      // if score reaches expert level, planet changes to jupiter
    } else {
      image(jupiter, this.x, this.y, this.width, this.height);
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
