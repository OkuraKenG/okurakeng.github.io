const initiateSolarSystem = (bodies) => {
  const sunDiameter = random(40, 50);

  const solarSystemCenterX = globalX;
  const solarSystemCenterY = globalY;

  const earth = new Planet(sunDiameter * random(7, 8), random(0, 360), random(10, 15));
  const earth_moon = new System(
    1,
    solarSystemCenterX + (earth.semiMajorAxis / 2) * cos(earth.deg),
    solarSystemCenterY + (earth.semiMajorAxis / 2) * sin(earth.deg),
    0.04,
    [new Planet(30, 0, 7.5)],
    earth
  );

  const jupiter = new Planet(sunDiameter * random(15, 16), random(0, 360), random(25, 35));
  const jupiter_system = new System(
    1,
    solarSystemCenterX + (jupiter.semiMajorAxis / 2) * cos(jupiter.deg),
    solarSystemCenterY + (earth.semiMajorAxis / 2) * sin(earth.deg),
    0.035,
    [new Planet(50, 0, 2.5), new Planet(65, 90, 3.5), new Planet(70, 20, 2.5)],
    jupiter
  );

  const rate = 0.005;
  bodies.push(
    ...[
      new Planet(sunDiameter * random(3, 4), random(0, 360), random(10, 15)), // m
      new Planet(sunDiameter * random(5, 6), random(0, 360), random(10, 15)), // v
      new Planet(sunDiameter * random(9, 10), random(0, 360), random(10, 15)), // m
      new Planet(sunDiameter * random(18, 19), random(0, 360), random(25, 35)), // s
      new Planet(sunDiameter * random(21, 22), random(0, 360), random(25, 35)), // u
      new Planet(sunDiameter * random(24, 25), random(0, 360), random(25, 35)), // n
      earth, // e
      earth_moon,
      jupiter,
      jupiter_system,
      new Planet(sunDiameter * random(50, 51), random(0, 360), random(5, 6)),
    ]
  );

  const temp = new System(
    sunDiameter,
    solarSystemCenterX,
    solarSystemCenterY,
    rate,
    bodies,
    undefined
  );

  return temp;
};

class System {
  constructor(mainBodyDiameter, x, y, rate, bodies, linkedBody) {
    this.mainBodyDiameter = mainBodyDiameter;
    this.x = x;
    this.y = y;
    this.rate = rate;
    this.bodies = bodies;
    this.stars = [];
    this.comets = [];
    this.linkedBody = linkedBody ?? undefined;

    if (!linkedBody) {
      for (let i = 0; i < 200; i++) {
        this.stars.push(new Star((Math.random() - 0.5) / 40));
      }

      for (let i = 0; i < 2; i++) {
        this.comets.push(new Comet(this.x, this.y));
      }
    }
  }

  drawBase() {
    this.drawStars();
    this.drawSun();
    if (!this.linkedBody) this.drawOrbits();
  }

  drawSun() {
    noStroke();
    fill(255, 204, 0);
    circle(this.x, this.y, this.mainBodyDiameter);
  }

  drawStars() {
    strokeWeight(2);
    for (const star of this.stars) {
      star.draw();
    }
  }

  drawOrbits() {
    stroke(75);
    strokeWeight(1.5);
    noFill();

    for (const body of this.bodies) {
      if ('semiMajorAxis' in body) {
        circle(this.x, this.y, body.semiMajorAxis);
      }
    }
  }

  draw() {
    this.drawBodies();
    this.drawComets();

    if (this.linkedBody) {
      this.x = this.linkedBody.x;
      this.y = this.linkedBody.y;
    }
  }

  drawBodies() {
    for (const body of this.bodies) {
      body.draw(this.x, this.y, this.rate);
    }
  }

  drawComets() {
    for (const comet of this.comets) {
      comet.draw(this.x, this.y);
    }
  }
}

class Planet {
  constructor(semiMajorAxis, startDeg, size, colour) {
    this.semiMajorAxis = semiMajorAxis;
    this.deg = startDeg ?? random(0, 360);
    this.size = size ?? random(10, 20);
    this.colour = color(random(255), 200, random(255));
    this.x = 0;
    this.y = 0;
  }

  draw(solarSystemCenterX, solarSystemCenterY, rate) {
    noStroke();
    fill(this.colour);
    this.x = solarSystemCenterX + (this.semiMajorAxis / 2) * cos(this.deg);
    this.y = solarSystemCenterY + (this.semiMajorAxis / 2) * sin(this.deg);

    circle(this.x, this.y, this.size);
    this.deg += rate;
  }
}

class Star {
  constructor(bias) {
    this.x = random(0, windowWidth);
    this.y = random(0, windowHeight);
    this.bright = random(20, 150);
    this.bias = bias;
    this.random = Math.random();
  }

  draw() {
    stroke(this.random < 0.1 ? this.bright + Math.random() * 50 : this.bright);
    point(this.x, this.y);
    this.x += this.bias;
    this.y += this.bias;
  }
}

class Comet {
  constructor(solarSystemCenterX, solarSystemCenterY) {
    this.swingyness = random(150, 250);
    this.offset = random(32, 100);
    this.h = random(-1250, -25);
    this.k =
      ((solarSystemCenterX - this.h) * (solarSystemCenterX - this.h)) / (4 * this.swingyness) +
      solarSystemCenterY -
      this.offset;
  }

  draw(solarSystemCenterX, solarSystemCenterY) {
    noStroke();
    fill('red');
    text('☄️', this.h, this.k);
    this.h = this.h + 1;
    this.k =
      ((solarSystemCenterX - this.h) * (solarSystemCenterX - this.h)) / (4 * this.swingyness) +
      solarSystemCenterY -
      this.offset;
  }
}
