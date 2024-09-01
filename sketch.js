let solarSystem;
let nightSky;
let nightSkyRT;
let myData;
let type = 'solar';
let options = ['solar', 'streak', 'rt'];

const links = [
  "https://api.weather.gov/gridpoints/AER/75,95/forecast/hourly", //pacfic 
  "https://api.weather.gov/gridpoints/EPZ/87,111/forecast/hourly", // new mexico
  "https://api.weather.gov/gridpoints/MAF/21,113/forecast/hourly",// blue
  "https://api.weather.gov/gridpoints/BRO/91,9/forecast/hourly", // starbase
  "https://api.weather.gov/gridpoints/MLB/58,70/forecast/hourly",// cape
  "https://api.weather.gov/gridpoints/AKQ/112,102/forecast/hourly", // mid atl
  "https://api.weather.gov/gridpoints/LOX/74,86/forecast/hourly"  // vandy
]


function preload() {
 // loadJSON(random(links), handleSuccess, handleError);
}

// function handleSuccess(data) {
//   myData = data;
//   myData = myData.properties.periods.map(
//     (forecast) => {
//       return {
//         temperature: forecast.temperature,
//         dewpoint: forecast.dewpoint.value * (9 / 5) + 32,
//         relativeHumidity: forecast.relativeHumidity.value,
//         probabilityOfPrecipitation: forecast.probabilityOfPrecipitation.value,
//         windSpeed: forecast.windSpeed,
//         windDirection: forecast.windDirection
//       }

//     }
//   )
// }

// // Log any errors to the console.
// function handleError(error) {
//   options.pop();
// }

function setup() {
  // for (let i = 0; i < 100; i++) {
  //   options.push('solar')
  //   options.push('streak')
  //   options.push('rt')
  // }
  type = random(options);
  let canvas = createCanvas(windowWidth, document.documentElement.scrollHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  pixelDensity(2);

  switch (type) {
    case 'solar':
      solarSystem = initiateSolarSystem();
      solarSystem.drawBase();
      break;
    case 'streak':
      angleMode(DEGREES);
      nightSky = new NightSky(random(windowWidth / 2, windowWidth), random(windowHeight / 2, windowHeight - 80));
      break;
    case 'rt':
      angleMode(DEGREES);
      nightSkyRT = new NightSkyRT(random(windowWidth / 2, windowWidth), random(windowHeight / 2, windowHeight - 80));
      break;
    // case 'weather':
    //   drawWeather();
    //   break;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, document.documentElement.scrollHeight);

  switch (type) {
    case 'solar':
      solarSystem = initiateSolarSystem();
      solarSystem.drawBase();
      break;
    case 'streak':
      angleMode(DEGREES)
      nightSky = new NightSky(random(0, windowWidth), random(50, windowHeight - 50));
      break;
    case 'rt':
        nightSkyRT = new NightSkyRT(random(windowWidth / 2, windowWidth), random(windowHeight / 2, windowHeight - 80));
        break;
    // case 'weather':
    //   drawWeather();
    //   break;
  }

}

function mouseClicked(event) {

  switch (type) {
    case 'solar':
      if (dist(event.x, event.y, solarSystem.x, solarSystem.y) < (solarSystem.mainBodyDiameter / 2))
        boom();
    case 'streak':
      if (dist(event.x, event.y, nightSky.x, nightSky.y) < 2.5)
        boom();
      break;
    // case 'weather':
    //   break;
  }

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
    case 'rt':
      nightSkyRT.draw();
    break;
    // case 'weather':
    //   break;
  }

}


const initiateSolarSystem = () => {
  const sunDiameter = random(40, 50);


  const solarSystemCenterX = random(windowWidth / 2, windowWidth - sunDiameter * 2);
  const solarSystemCenterY = random(windowHeight / 2, windowHeight - sunDiameter * 2);

  const earth = new Planet(sunDiameter * random(7, 8), random(0, 360), random(10, 15));
  const earth_moon = new System(1, solarSystemCenterX + (earth.semiMajorAxis / 2) * cos(earth.deg), solarSystemCenterY + (earth.semiMajorAxis / 2) * sin(earth.deg), 0.04, [new Planet(30, 0, 7.5)], earth)

  const jupiter = new Planet(sunDiameter * random(15, 16), random(0, 360), random(25, 35));
  const jupiter_system = new System(1, solarSystemCenterX + (jupiter.semiMajorAxis / 2) * cos(jupiter.deg), solarSystemCenterY + (earth.semiMajorAxis / 2) * sin(earth.deg), 0.035, [new Planet(50, 0, 2.5), new Planet(65, 90, 3.5), new Planet(70, 20, 2.5)], jupiter)


  const rate = 0.005;
  const bodies = [
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
  ];

  return new System(sunDiameter, solarSystemCenterX, solarSystemCenterY, rate, bodies);
};

function drawWeather() {
  background(22)
  myData = myData.map(
    (forecast) => {
      return {
        temperature: map(forecast.temperature, 0, 120, windowHeight, 100),
        dewpoint: map(forecast.dewpoint, 0, 120, windowHeight, 100),
        relativeHumidity: map(forecast.relativeHumidity, 0, 120, windowHeight, 100),
        probabilityOfPrecipitation: map(forecast.probabilityOfPrecipitation, 0, 120, windowHeight, 100),
        windSpeed: map(Number.parseFloat(forecast.windSpeed.substring(0, forecast.windSpeed.indexOf(' '))), 0, 50, windowHeight, 100),
        windDirection: forecast.windDirection
      }

    });

  let x = 0;
  const x_diff = windowWidth / myData.length;
  noFill();

  stroke('green');
  beginShape();
  for (let i = 0; i < myData.length; i++) {
    vertex(x, myData[i].temperature);
    x += x_diff;
  }
  // Stop drawing the shape.
  endShape();

  x = 0;

  stroke('blue');
  beginShape();
  for (let i = 0; i < myData.length; i++) {
    vertex(x, myData[i].dewpoint);
    x += x_diff;
  }
  // Stop drawing the shape.
  endShape();

  x = 0;

  stroke('red');
  beginShape();
  for (let i = 0; i < myData.length; i++) {
    vertex(x, myData[i].relativeHumidity);
    x += x_diff;
  }
  // Stop drawing the shape.
  endShape();

  x = 0;

  stroke('orange');
  beginShape();
  for (let i = 0; i < myData.length; i++) {
    vertex(x, myData[i].probabilityOfPrecipitation);
    x += x_diff;
  }
  // Stop drawing the shape.
  endShape();

  x = 0;

  stroke('cyan');
  beginShape();
  for (let i = 0; i < myData.length; i++) {
    vertex(x, myData[i].windSpeed);
    x += x_diff;
  }
  // Stop drawing the shape.
  endShape();


}


function boom() {
  let list = ["titleCard"];
  for (let ele of list)
    document.getElementById(ele).classList.add("blowUp");
  console.log('BOOM!')
}