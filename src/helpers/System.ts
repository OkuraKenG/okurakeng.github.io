import { P5CanvasInstance, SketchProps } from "@p5-wrapper/react";
import { Color } from "p5";

export class System {
	mainBodyDiameter: number;
	x: number;
	y: number;
	rate: number;
	bodies: (Planet | System)[];
	stars: Star[];
	comets: Comet[];
	linkedBody: Planet | undefined;
	readonly p5: P5CanvasInstance<SketchProps>;


	constructor(mainBodyDiameter: number, x: number, y: number, rate: number, bodies: (Planet | System)[], linkedBody: Planet | undefined, p5: P5CanvasInstance<SketchProps>) {
		this.mainBodyDiameter = mainBodyDiameter;
		this.x = x;
		this.y = y;
		this.rate = rate;
		this.bodies = bodies;
		this.stars = [];
		this.comets = [];
		this.linkedBody = linkedBody ?? undefined;
		this.p5 = p5;

		if (!linkedBody) {
			for (let i = 0; i < 200; i++) {
				this.stars.push(new Star((Math.random() - 0.5) / 40, p5));
			}

			for (let i = 0; i < 2; i++) {
				this.comets.push(new Comet(this.x, this.y, p5));
			}
		}
	}

	drawBase() {
		this.drawStars();
		this.drawSun();
		if (!this.linkedBody)
			this.drawOrbits();
	}

	drawSun() {
		this.p5.noStroke();
		this.p5.fill(255, 204, 0);
		this.p5.circle(this.x, this.y, this.mainBodyDiameter);
	}


	drawStars() {
		this.p5.strokeWeight(2);
		for (const star of this.stars) {
			star.draw();
		}
	}

	drawOrbits() {
		this.p5.stroke(75)
		this.p5.strokeWeight(1.5);
		this.p5.noFill();

		for (const body of this.bodies) {
			if ('semiMajorAxis' in body) {
				this.p5.circle(this.x, this.y, body.semiMajorAxis);
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

export class Planet {
	semiMajorAxis: number;
	deg: number;
	size: number;
	colour: Color;
	p5: P5CanvasInstance<SketchProps>;
	x: number;
	y: number;

	constructor(semiMajorAxis: number, startDeg: number, size: number, p5: P5CanvasInstance<SketchProps>, colour?: Color,) {
		this.semiMajorAxis = semiMajorAxis;
		this.p5 = p5;
		this.deg = startDeg ?? this.p5.random(0, 360);
		this.size = size ?? this.p5.random(10, 20);
		this.colour = colour ?? this.p5.color(this.p5.random(255), 200, this.p5.random(255));
		this.x = 0;
		this.y = 0;
	}

	draw(solarSystemCenterX: number, solarSystemCenterY: number, rate: number) {
		this.p5.noStroke();
		this.p5.fill(this.colour);
		this.x = solarSystemCenterX + (this.semiMajorAxis / 2) * this.p5.cos(this.deg);
		this.y = solarSystemCenterY + (this.semiMajorAxis / 2) * this.p5.sin(this.deg);

		this.p5.circle(this.x, this.y, this.size);
		this.deg += rate;
	}
};


export class Star {
	p5: P5CanvasInstance<SketchProps>;
	x: number;
	y: number;
	bright: number;
	bias: number;
	random: number;

	constructor(bias: number, p5: P5CanvasInstance<SketchProps>) {
		this.p5 = p5;
		this.x = this.p5.random(0, this.p5.windowWidth);
		this.y = this.p5.random(0, this.p5.windowHeight);
		this.bright = this.p5.random(20, 150);
		this.bias = bias;
		this.random = Math.random();
	}

	draw() {
		this.p5.stroke(this.random < 0.1 ? this.bright + Math.random() * 50 : this.bright);
		this.p5.point(this.x, this.y);
		this.x += this.bias;
		this.y += this.bias;
	}
}


export class Comet {
	p5: P5CanvasInstance<SketchProps>;
	swingyness: number;
	offset: number;
	h: number;
	k: number;

	constructor(solarSystemCenterX: number, solarSystemCenterY: number, p5: P5CanvasInstance<SketchProps>) {
		this.p5 = p5;
		this.swingyness = this.p5.random(150, 250);
		this.offset = this.p5.random(32, 100);
		this.h = this.p5.random(-1250, -25);
		this.k = ((solarSystemCenterX - this.h) * (solarSystemCenterX - this.h)) / (4 * this.swingyness) + solarSystemCenterY - this.offset;
	}

	draw(solarSystemCenterX: number, solarSystemCenterY: number) {
		this.p5.noStroke();
		this.p5.fill('red');
		this.p5.text('☄️', this.h, this.k)
		this.h = this.h + 1;
		this.k = ((solarSystemCenterX - this.h) * (solarSystemCenterX - this.h)) / (4 * this.swingyness) + solarSystemCenterY - this.offset;
	}
}
