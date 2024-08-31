let solarSystem;
let type = 'solar';
function setup() {
  let canvas = createCanvas(windowWidth,  document.documentElement.scrollHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  pixelDensity(2);

  switch(type) {
    case 'solar':
      solarSystem = initiateSolarSystem();
      solarSystem.drawBase();
      break;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, document.documentElement.scrollHeight);

  switch(type) {
    case 'solar':
      solarSystem = initiateSolarSystem();
      solarSystem.drawBase();
      break;
  }

}

function mouseClicked(event) {
  // Code to run that uses the event.
  if (dist(event.x, event.y, solarSystem.x, solarSystem.y) < (solarSystem.mainBodyDiameter / 2))
    boom();
}

function draw() {
  switch(type) {
    case 'solar':
      background(25);
      solarSystem.drawBase();
      solarSystem.draw();
      break;
  }

}

const initiateSolarSystem = () => {
  const sunDiameter = random(40, 50);


  const solarSystemCenterX = random(windowWidth / 2, windowWidth - sunDiameter * 2);
  const solarSystemCenterY = random(windowHeight / 2, windowHeight - sunDiameter * 2);

  const earth = new Planet(sunDiameter * random(7, 8), random(0,360), random(10,15));
  const earth_moon = new System(1,solarSystemCenterX + (earth.semiMajorAxis / 2) * cos(earth.deg) , solarSystemCenterY + (earth.semiMajorAxis / 2) * sin(earth.deg), 0.04, [new Planet(30,0,7.5)], earth)

  const jupiter = new Planet(sunDiameter * random(15, 16), random(0,360), random(25,35));
  const jupiter_system = new System(1,solarSystemCenterX + (jupiter.semiMajorAxis / 2) * cos(jupiter.deg) , solarSystemCenterY + (earth.semiMajorAxis / 2) * sin(earth.deg), 0.035, [new Planet(50,0,2.5), new Planet(65,90,3.5), new Planet(70,20,2.5)], jupiter)


  const rate = 0.005;
  const bodies = [
    new Planet(sunDiameter * random(3, 4), random(0,360), random(10,15)), // m
    new Planet(sunDiameter * random(5, 6), random(0,360), random(10,15)), // v
    new Planet(sunDiameter * random(9, 10), random(0,360), random(10,15)), // m
    new Planet(sunDiameter * random(18, 19), random(0,360), random(25,35)), // s
    new Planet(sunDiameter * random(21, 22), random(0,360), random(25,35)), // u
    new Planet(sunDiameter * random(24, 25), random(0,360), random(25,35)), // n
    earth, // e
    earth_moon,
    jupiter,
    jupiter_system,
    new Planet(sunDiameter * random(50,51), random(0,360), random(5,6)),
  ];
  
  return new System(sunDiameter,solarSystemCenterX, solarSystemCenterY, rate, bodies);
};


function boom() {
  let list = ["titleCard"];
  for (let ele of list)
      document.getElementById(ele).classList.add("blowUp");
  console.log('BOOM!')
}