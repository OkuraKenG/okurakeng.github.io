import { P5CanvasInstance, SketchProps } from "@p5-wrapper/react";
import { Color } from "p5";
import { Terrain } from "./NightSkyStreak";

export class NightSky {
	x: number;
	y: number;
	stars: NightStar[];
	satellites: Satellite[];
	terrains: Terrain[];
	iss: ISS;
	moon: Moon;
	readonly p5: P5CanvasInstance<SketchProps>;


	constructor(x: number, y: number, p5: P5CanvasInstance<SketchProps>) {
		this.x = x;
		this.y = y;
		this.stars = [];
		this.satellites = [];
		this.p5 = p5;
		this.terrains = [new Terrain(
			this.p5.random(65, 125),
			this.p5.random(0.001, 0.02),
			25,
			this.p5.color(1), p5)];
		this.iss = new ISS(this.p5.windowWidth / 2, document.documentElement.scrollHeight, p5);

		this.moon = new Moon(this.p5.windowWidth / 4, document.documentElement.scrollHeight, p5);


		for (let i = 0; i < 750; i++) {
			this.stars.push(
				new NightStar(
					this.p5.random(2.5, this.p5.windowWidth > this.p5.windowHeight ? this.p5.windowWidth * 3 : this.p5.windowHeight * 3), p5)
			)
		}

		for (let i = 0; i < 25; i++) {
			this.satellites.push(
				new Satellite(this.p5.random(this.p5.windowWidth), this.p5.random(this.p5.windowHeight), p5)
			)
		}
	}

	draw() {
		this.p5.background(15, 0, 25);

		this.p5.fill(240);
		this.p5.circle(this.x, this.y, 2);

		for (const star of this.stars) {
			star.draw(this.x, this.y);
		}

		for (const satellite of this.satellites) {
			satellite.draw();
		}

		this.iss.draw();
		this.moon.draw();


		for (const terrain of this.terrains) {
			terrain.draw();
		}





	}
}

class NightStar {
	distance: number;
	deg: number;
	fill: Color;
	size: number;
	x: number;
	y: number;
	readonly p5: P5CanvasInstance<SketchProps>;

	constructor(distance: number, p5: P5CanvasInstance<SketchProps>) {
		this.p5 = p5;
		this.deg = this.p5.random(0, 360);
		this.distance = distance;
		this.fill = this.p5.color(this.p5.random(50, 150));
		this.size = this.p5.random(1, 2);
		this.x = 0;
		this.y = 0;
	}

	draw(x: number, y: number) {
		this.p5.noStroke();
		this.p5.fill(this.fill);
		this.x = x + (this.distance) * this.p5.cos(this.deg);
		this.y = y + (this.distance) * this.p5.sin(this.deg);

		this.p5.circle(this.x, this.y, this.size + Math.random() * 0.75);
		this.deg += 0.01;
	}
}

class Satellite {
	x: number;
	y: number;
	delay: number;
	startX: number;
	startY: number;
	readonly p5: P5CanvasInstance<SketchProps>;
	v_x: number;
	v_y: number;
	distance: number;

	constructor(x: number, y: number, p5: P5CanvasInstance<SketchProps>) {
		this.p5 = p5;
		this.delay = this.p5.random(0, 5000)
		this.startX = x;
		this.startY = y;
		this.x = x;
		this.y = y;
		this.v_x = this.p5.random([-1, 1]);
		this.v_y = this.p5.random([-1, 1]);
		this.distance = this.p5.random(this.p5.windowHeight * 0.25, this.p5.windowHeight * 0.35)
	}
	draw() {
		this.p5.strokeWeight(0.6);
		if ((this.p5.frameCount > this.delay) && this.p5.dist(this.startX, this.startY, this.x, this.y) < this.distance) {
			this.x = this.x + this.v_x;
			this.y = this.y + this.v_y;
			this.p5.fill(this.p5.color(this.p5.sin(0.95 * this.p5.frameCount + this.p5.sin(this.p5.frameCount)) * 255))
			this.p5.circle(this.x, this.y, this.p5.sin(0.95 * this.p5.frameCount + this.p5.sin(this.p5.frameCount)) * 4);
		}


	}

}

class ISS {
	startX: number;
	startY: number;
	x: number;
	y: number;
	v_x: number;
	v_y: number;
	distance: number;
	p5: P5CanvasInstance<SketchProps>;

	constructor(x: number, y: number, p5: P5CanvasInstance<SketchProps>) {
		this.startX = x;
		this.startY = y;
		this.x = x;
		this.y = y;
		this.p5 = p5;
		this.v_x = this.p5.random([-0.25, 0.25]);
		this.v_y = -0.25;
		this.distance = this.p5.random(this.p5.windowHeight * 0.25, this.p5.windowHeight * 0.35)
	}
	draw() {
		this.p5.strokeWeight(0.6);

		this.x = this.x + this.v_x;
		this.y = this.y + this.v_y;
		this.p5.fill(255)
		this.p5.textSize(5);
		this.p5.text('🛰️', this.x, this.y)
	}
}

class Moon {
	startX: number;
	startY: number;
	x: number;
	y: number;
	v_x: number;
	v_y: number;
	distance: number;
	p5: P5CanvasInstance<SketchProps>;

	constructor(x: number, y: number, p5: P5CanvasInstance<SketchProps>) {
		this.startX = x;
		this.startY = y;
		this.x = x;
		this.y = y;
		this.p5 = p5;
		this.v_x = this.p5.random([-0.05, 0.05]);
		this.v_y = -0.05;
		this.distance = this.p5.random(this.p5.windowHeight * 0.25, this.p5.windowHeight * 0.35)
	}
	draw() {
		this.p5.strokeWeight(0.6);

		this.x = this.x + this.v_x;
		this.y = this.y + this.v_y;
		this.p5.fill(255)
		this.p5.textSize(12);
		this.p5.text('🌕', this.x, this.y)
	}
}
