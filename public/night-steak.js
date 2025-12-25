

class NightSkyStreak {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.stars = [];
		this.satellite = new SatelliteStreak(random(windowWidth), random(windowHeight), p5);

		this.terrains = [new Terrain(
			random(65, 125),
			random(0.001, 0.02),
			50,
			color(1),
		),
		new Terrain(
			random(74, 80),
			random(0.001, 0.02),
			30,
			color(25),
		),
		new Terrain(
			random(60, 70),
			random(0.001, 0.02),
			5,
			color(40),
		),
		new Terrain(
			random(20, 30),
			random(0.001, 0.02),
			0,
			color(80),),];

		for (let i = 0; i < 350; i++) {
			const deg = random(-360, 360);
			const deg1 = deg + random(0, 180);
			this.stars.push(
				new NightStarStreak(
					deg < deg1 ? deg1 : deg,
					deg < deg1 ? deg : deg1,
					random(2.5, windowWidth > windowHeight ? windowWidth * 3 : windowHeight * 3),)
			)
		}
	}

	draw() {
		background(15, 0, 25);

		fill(240);
		circle(this.x, this.y, 2);

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

	constructor(stop, deg, distance) {

		this.stop = stop;
		this.startDeg = deg;
		this.deg = deg;
		this.distance = distance;

		this.fill = color(random(50, 150))
	}

	draw(x, y) {
		noFill();
		stroke(this.fill);
		strokeWeight(0.5);
		arc(x, y, this.distance, this.distance, this.startDeg, this.deg)
		if (this.deg <= this.stop && this.deg < this.startDeg + 360) {
			this.deg += 1;
		}
	}
}

class Terrain {

	/**
	 * Draws landscape
	 * @param {number} noiseLevel Noise (amplitude)
	 * @param {number} noiseScale Scale (smoothness)
	 * @param {number} shift Y-level to shift up by
	 * @param {color} colour 
	 */
	constructor(noiseLevel, noiseScale, shift, colour) {
		this.noiseLevel = noiseLevel;
		this.noiseScale = noiseScale;
		this.shift = shift;
		this.colour = colour;

	}

	draw() {
		for (let i = 0; i <= windowWidth; i++) {
			stroke(this.colour);
			strokeWeight(1)

			// Scale the input coordinate.
			const x = i;
			const nx = this.noiseScale * x;

			// Compute the noise value.
			const y = this.noiseLevel * noise(nx + this.shift * 2);

			// Draw the line.
			line(x, document.documentElement.scrollHeight, x, document.documentElement.scrollHeight - y - this.shift);
		}
	}
}

class SatelliteStreak {


	constructor(x, y) {
		this.startX = x;
		this.startY = y;
		this.x = x;
		this.y = y;

		this.v_x = random([-1, 1]);
		this.v_y = random([-1, 1]);
		this.distance = random(windowHeight * 0.25, windowHeight * 0.35)
	}
	draw() {
		strokeWeight(0.6);
		stroke(color(255, 253, 230, 100))
		if (dist(this.startX, this.startY, this.x, this.y) < this.distance) {
			this.x = this.x + this.v_x;
			this.y = this.y + this.v_y;
		}
		line(this.startX, this.startY, this.x, this.y);

	}

}
