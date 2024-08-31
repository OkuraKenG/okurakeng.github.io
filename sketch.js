let solarSystem;

function setup() {
  let canvas = createCanvas(windowWidth,  document.documentElement.scrollHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  solarSystem = initiateSolarSystem();
  solarSystem.drawBase();
  pixelDensity(2)
}

function windowResized() {
  resizeCanvas(windowWidth, document.documentElement.scrollHeight);
  solarSystem = initiateSolarSystem();
  solarSystem.drawBase();
}

function draw() {
  solarSystem.drawBase();
  solarSystem.draw();
}

const initiateSolarSystem = () => {
  const sunDiameter = random(40, 50);


  const solarSystemCenterX = random(windowWidth / 2, windowWidth - sunDiameter * 2);
  const solarSystemCenterY = random(windowHeight / 2, windowHeight - sunDiameter * 2);

  const earth = new Planet(sunDiameter * random(8, 11), random(0,360), random(10,15));
  const earth_moon = new System(1,solarSystemCenterX + (earth.semiMajorAxis / 2) * cos(earth.deg) , solarSystemCenterY + (earth.semiMajorAxis / 2) * sin(earth.deg), 0.05, [new Planet(30,0,7.5)], earth)

  const rate = 0.008;
  const bodies = [
    new Planet(sunDiameter * random(3, 4), random(0,360), random(10,15)), // m
    new Planet(sunDiameter * random(5, 6), random(0,360), random(10,15)), // v
    new Planet(sunDiameter * random(14, 15), random(0,360), random(10,15)), // m
    new Planet(sunDiameter * random(22, 24), random(0,360), random(25,35)), 
    new Planet(sunDiameter * random(26, 27), random(0,360), random(25,35)),
    new Planet(sunDiameter * random(30, 31), random(0,360), random(25,35)),
    new Planet(sunDiameter * random(35, 36), random(0,360), random(25,35)),
    earth, // e
    earth_moon];
  
  return new System(sunDiameter,solarSystemCenterX, solarSystemCenterY, rate, bodies);
};

