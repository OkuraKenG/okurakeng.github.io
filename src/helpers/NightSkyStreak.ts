import { P5CanvasInstance, SketchProps } from "@p5-wrapper/react";
import { Color } from "p5";

export class NightSkyStreak {
	x: number;
	y: number;
	stars: NightStarStreak[];
	satellite: SatelliteStreak;
	terrains: Terrain[];
	readonly p5: P5CanvasInstance<SketchProps>;

	constructor(x: number, y: number, p5: P5CanvasInstance<SketchProps>) {
		this.x = x;
		this.y = y;
		this.stars = [];
		this.p5 = p5;
		this.satellite = new SatelliteStreak(this.p5.random(this.p5.windowWidth), this.p5.random(this.p5.windowHeight), p5);

		this.terrains = [new Terrain(
			this.p5.random(65, 125),
			this.p5.random(0.001, 0.02),
			50,
			this.p5.color(1),
			this.p5),
		new Terrain(
			this.p5.random(74, 80),
			this.p5.random(0.001, 0.02),
			30,
			this.p5.color(25),
			this.p5),
		new Terrain(
			this.p5.random(60, 70),
			this.p5.random(0.001, 0.02),
			5,
			this.p5.color(40),
			this.p5),
		new Terrain(
			this.p5.random(20, 30),
			this.p5.random(0.001, 0.02),
			0,
			this.p5.color(80), this.p5),];

		for (let i = 0; i < 350; i++) {
			const deg = this.p5.random(-360, 360);
			const deg1 = deg + this.p5.random(0, 180);
			this.stars.push(
				new NightStarStreak(
					deg < deg1 ? deg1 : deg,
					deg < deg1 ? deg : deg1,
					this.p5.random(2.5, this.p5.windowWidth > this.p5.windowHeight ? this.p5.windowWidth * 3 : this.p5.windowHeight * 3), this.p5)
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

		this.satellite.draw();


		for (const terrain of this.terrains) {
			terrain.draw();
		}




	}
}

class NightStarStreak {
	stop: number;
	deg: number;
	distance: number;
	startDeg: number;
	fill: Color;
	readonly p5: P5CanvasInstance<SketchProps>;

	constructor(stop: number, deg: number, distance: number, p5: P5CanvasInstance<SketchProps>
	) {

		this.stop = stop;
		this.startDeg = deg;
		this.deg = deg;
		this.distance = distance;
		this.p5 = p5;
		this.fill = this.p5.color(this.p5.random(50, 150))
	}

	draw(x: number, y: number) {
		this.p5.noFill();
		this.p5.stroke(this.fill);
		this.p5.strokeWeight(0.5);
		this.p5.arc(x, y, this.distance, this.distance, this.startDeg, this.deg)
		if (this.deg <= this.stop && this.deg < this.startDeg + 360) {
			this.deg += 1;
		}
	}
}

export class Terrain {
	noiseLevel: number;
	noiseScale: number;
	shift: number;
	colour: Color;
	readonly p5: P5CanvasInstance<SketchProps>;


	/**
	 * Draws landscape
	 * @param {number} noiseLevel Noise (amplitude)
	 * @param {number} noiseScale Scale (smoothness)
	 * @param {number} shift Y-level to shift up by
	 * @param {color} colour 
	 */
	constructor(noiseLevel: number, noiseScale: number, shift: number, colour: Color, p5: P5CanvasInstance<SketchProps>) {
		this.noiseLevel = noiseLevel;
		this.noiseScale = noiseScale;
		this.shift = shift;
		this.colour = colour;
		this.p5 = p5;
	}

	draw() {
		for (let i = 0; i <= this.p5.windowWidth; i++) {
			this.p5.stroke(this.colour);
			this.p5.strokeWeight(1)

			// Scale the input coordinate.
			const x = i;
			const nx = this.noiseScale * x;

			// Compute the noise value.
			const y = this.noiseLevel * this.p5.noise(nx + this.shift * 2);

			// Draw the line.
			this.p5.line(x, this.p5.windowHeight, x, this.p5.windowHeight - y - this.shift);
		}
	}
}

class SatelliteStreak {
	x: number;
	y: number;
	startX: number;
	startY: number;
	v_x: number;
	v_y: number;
	distance: number;
	readonly p5: P5CanvasInstance<SketchProps>;

	constructor(x: number, y: number, p5: P5CanvasInstance<SketchProps>) {
		this.startX = x;
		this.startY = y;
		this.x = x;
		this.y = y;
		this.p5 = p5;
		this.v_x = this.p5.random([-1, 1]);
		this.v_y = this.p5.random([-1, 1]);
		this.distance = this.p5.random(this.p5.windowHeight * 0.25, this.p5.windowHeight * 0.35)
	}
	draw() {
		this.p5.strokeWeight(0.6);
		this.p5.stroke(this.p5.color(255, 253, 230, 100))
		if (this.p5.dist(this.startX, this.startY, this.x, this.y) < this.distance) {
			this.x = this.x + this.v_x;
			this.y = this.y + this.v_y;
		}
		this.p5.line(this.startX, this.startY, this.x, this.y);

	}

}
