let solarSystem;
const stars = [];
const bodies = [];
let type = 'solar';
const options = ['solar', 'streak', 'nightSky'];
let globalX, globalY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(2);
  type = random(options);
  globalX = random(windowWidth / 2, windowWidth);
  globalY = random(random(windowHeight / 2, windowHeight - 80));

  switch (type) {
    case 'solar':
      solarSystem = initiateSolarSystem(bodies);
      solarSystem.drawBase();
      break;
    case 'streak':
      angleMode(DEGREES);
      nightSky = new NightSkyStreak(globalX, globalY);
      break;
    case 'nightSky':
      angleMode(DEGREES);
      nightSkyRT = new NightSky(globalX, globalY, stars);
      break;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  switch (type) {
    case 'solar':
      background(25);
      solarSystem.drawBase();
      solarSystem.draw();
      break;
    case 'streak':
      nightSky.draw();
      break;
    case 'nightSky':
      nightSkyRT.draw();
      break;
  }

  fill('white');
}

function getClickAngle(globalX, globalY) {
  let dx = mouseX - globalX;
  let dy = mouseY - globalY;

  let angleDeg = atan2(dy, dx);
  angleDeg = angleDeg % 360;
  if (angleDeg < 0) angleDeg += 360;
  return angleDeg;
}

function mouseClicked() {
  switch (type) {
    case 'solar':
      bodies.push(
        new Planet(dist(mouseX, mouseY, globalX, globalY) * 2, random(0, 360), random(10, 40))
      );
      return;
    case 'streak':
      return;
    case 'nightSky':
      stars.push(
        new NightStar(
          dist(mouseX, mouseY, globalX, globalY),
          getClickAngle(globalX, globalY),
          color('white'),
          1.2
        )
      );
      if (stars.length > 770) {
        stars.shift();
      }
      return;
  }
}
