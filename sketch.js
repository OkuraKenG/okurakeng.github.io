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
  background(25);
  solarSystem.drawBase();
  solarSystem.draw();
}

const initiateSolarSystem = () => {
  const sunDiameter = random(40, 50);


  const solarSystemCenterX = random(windowWidth / 2, windowWidth - sunDiameter * 2);
  const solarSystemCenterY = random(windowHeight / 2, windowHeight - sunDiameter * 2);

  const earth = new Planet(sunDiameter * random(8, 11), random(0,360), random(10,15));
  const earth_moon = new System(1,solarSystemCenterX + (earth.semiMajorAxis / 2) * cos(earth.deg) , solarSystemCenterY + (earth.semiMajorAxis / 2) * sin(earth.deg), 0.04, [new Planet(30,0,7.5)], earth)

  const jupiter = new Planet(sunDiameter * random(22, 24), random(0,360), random(25,35));
  const jupiter_system = new System(1,solarSystemCenterX + (jupiter.semiMajorAxis / 2) * cos(jupiter.deg) , solarSystemCenterY + (earth.semiMajorAxis / 2) * sin(earth.deg), 0.035, [new Planet(50,0,2.5), new Planet(65,90,3.5), new Planet(70,20,2.5)], jupiter)


  const rate = 0.005;
  const bodies = [
    new Planet(sunDiameter * random(3, 4), random(0,360), random(10,15)), // m
    new Planet(sunDiameter * random(5, 6), random(0,360), random(10,15)), // v
    new Planet(sunDiameter * random(14, 15), random(0,360), random(10,15)), // m
    new Planet(sunDiameter * random(26, 27), random(0,360), random(25,35)), // s
    new Planet(sunDiameter * random(30, 31), random(0,360), random(25,35)), // u
    new Planet(sunDiameter * random(35, 36), random(0,360), random(25,35)), // n
    earth, // e
    earth_moon,
    jupiter,
    jupiter_system,
  ];
  
  return new System(sunDiameter,solarSystemCenterX, solarSystemCenterY, rate, bodies);
};

