let canvas;
let sunDiameter;

let solarSystemCenterX;
let solarSystemCenterY;

let planetList;
let starList = [];

let x;
let y;
let deg = 0;

let cometList = [];

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');
  assignSolarSysCords();
  drawBaseSolarSys();
}

function draw() {
  drawBaseSolarSys();

  for (const obj of planetList) {
    noStroke();

    fill(obj.colour);
    x = solarSystemCenterX + (obj.diameter / 2) * cos(obj.deg);
    y = solarSystemCenterY + (obj.diameter / 2) * sin(obj.deg);
    circle(x, y, obj.size);
    obj.deg += 0.0095;
  }
  
}

const assignSolarSysCords = () => {
  sunDiameter = random(25, 50);

  solarSystemCenterX = random(sunDiameter, windowWidth - sunDiameter * 2);
  solarSystemCenterY = random(windowHeight/2, windowHeight - sunDiameter * 2);

  // solarSystemCenterX = windowWidth/2;
  // solarSystemCenterY = windowHeight/2;

  mercury = new Planet(sunDiameter * random(2, 3));
  venus = new Planet(sunDiameter * random(4, 5));
  earth = new Planet(sunDiameter * random(8, 11));
  mars = new Planet(sunDiameter * random(14, 15));
  jupiter = new LargePlanet(sunDiameter * random(22, 24));
  saturn = new LargePlanet(sunDiameter * random(26, 27));
  uranus = new LargePlanet(sunDiameter * random(30, 31));
  neptune = new LargePlanet(sunDiameter * random(35, 36));
  planetList = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune];
  
  for (let i = 0 ; i < 200 ; i++ ) {
    starList.push(new Star((Math.random()-0.5)/40));
  }

  for (let i = 0 ; i < 2 ; i++ ) {
    cometList.push(new Comet());
  }

  console.log(cometList)

};

function drawBaseSolarSys() {
  background(25);

  drawStars();
  drawSun();


  for (const comet of cometList) {
    comet.draw()
  }


  stroke(75);
  strokeWeight(1);
  noFill();

  for (const obj of planetList) {
    circle(solarSystemCenterX, solarSystemCenterY, obj.diameter);
  }
}

function drawStars() {
  for (const star of starList) {
    stroke( star.bright)
    point( star.x, star.y);
    star.x += star.bias;
    star.y += star.bias;
  }
}

function drawSun() {
  noStroke();
  fill(255, 204, 0);
  circle(solarSystemCenterX, solarSystemCenterY, 50);
}


const Planet = class {
  constructor(diameter) {
    this.diameter = diameter;
    this.deg = random(0, 360);
    this.size = random(10, 20);
    this.colour = color(random(255), 200, random(255));
  }
};

class LargePlanet extends Planet {
  constructor(diameter) {
    super(diameter);
    this.size = random(20, 30);
  }
}

class Star {
   constructor(bias) {
    this.x = random(0, windowWidth);
    this.y = random(0, windowHeight);
    this.bright = random(50, 150);
    this.bias = bias;
  } 
}

class Comet {
  constructor() {
    this.swingyness = random(150, 250);
    this.offset = random(32, 100);
    this.h = random(-75,-25);
    this.k = ((solarSystemCenterX - this.h)*(solarSystemCenterX - this.h))/(4*this.swingyness) + solarSystemCenterY - this.offset;
  }  

  draw() {
    noStroke();
    fill('red');
    text('☄️',this.h,this.k)
    this.h = this.h + 1;
    this.k = ((solarSystemCenterX - this.h)*(solarSystemCenterX - this.h))/(4*this.swingyness) + solarSystemCenterY - this.offset;
  }
}