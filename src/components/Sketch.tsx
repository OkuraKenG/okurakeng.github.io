import * as React from "react";
import { P5CanvasInstance, ReactP5Wrapper, Sketch, SketchProps } from "@p5-wrapper/react";
import { Planet, System } from "../helpers/System";
import { NightSkyStreak } from "../helpers/NightSkyStreak";
import { NightSky } from "../helpers/NightSky";
// import { NightSkyRT } from "../helpers/nightskyrt";
let globalX: number;
let globalY: number;
const sketch: Sketch = p5 => {
	let solarSystem: System;
	let nightSky: NightSkyStreak;
	let nightSkyRT: NightSky;
	let type = 'solar';
	const options = ['solar', 'streak', 'nightsky'];

	p5.setup = () => {
		p5.resizeCanvas(p5.windowWidth, p5.windowHeight > document.documentElement.scrollWidth ? p5.windowHeight : document.documentElement.scrollHeight);
		p5.pixelDensity(2);
		type = p5.random(options);
		globalX = p5.random(p5.windowWidth / 2, p5.windowWidth);
		globalY = p5.random(p5.random(p5.windowHeight / 2, p5.windowHeight - 80));

		switch (type) {
			case 'solar':
				solarSystem = initiateSolarSystem(p5);
				solarSystem.drawBase();
				break;
			case 'streak':
				p5.angleMode(p5.DEGREES);
				nightSky = new NightSkyStreak(globalX, globalY, p5);
				break;
			case 'nightsky':
				p5.angleMode(p5.DEGREES);
				nightSkyRT = new NightSky(globalX, globalY, p5);
				break;
		}
	};

	// p5.mouseClicked = (event) => {
	// 	console.log(event)
	// }

	p5.draw = () => {
		switch (type) {
			case 'solar':
				p5.background(25);
				solarSystem.drawBase();
				solarSystem.draw();
				break;
			case 'streak':
				nightSky.draw();
				break;
			case 'nightsky':
				nightSkyRT.draw();
				break;

		}
	};

	p5.windowResized = () => {
		p5.resizeCanvas(p5.windowWidth, p5.windowHeight > document.documentElement.scrollWidth ? p5.windowHeight : document.documentElement.scrollHeight);
	}
};

const initiateSolarSystem = (p5: P5CanvasInstance<SketchProps>) => {
	const sunDiameter = p5.random(40, 50);


	const solarSystemCenterX = globalX;
	const solarSystemCenterY = globalY;

	const earth = new Planet(sunDiameter * p5.random(7, 8), p5.random(0, 360), p5.random(10, 15), p5);
	const earth_moon = new System(1, solarSystemCenterX + (earth.semiMajorAxis / 2) * p5.cos(earth.deg), solarSystemCenterY + (earth.semiMajorAxis / 2) * p5.sin(earth.deg), 0.04, [new Planet(30, 0, 7.5, p5)], earth, p5)

	const jupiter = new Planet(sunDiameter * p5.random(15, 16), p5.random(0, 360), p5.random(25, 35), p5);
	const jupiter_system = new System(1, solarSystemCenterX + (jupiter.semiMajorAxis / 2) * p5.cos(jupiter.deg), solarSystemCenterY + (earth.semiMajorAxis / 2) * p5.sin(earth.deg), 0.035, [new Planet(50, 0, 2.5, p5), new Planet(65, 90, 3.5, p5), new Planet(70, 20, 2.5, p5)], jupiter, p5)


	const rate = 0.005;
	const bodies = [
		new Planet(sunDiameter * p5.random(3, 4), p5.random(0, 360), p5.random(10, 15), p5), // m
		new Planet(sunDiameter * p5.random(5, 6), p5.random(0, 360), p5.random(10, 15), p5), // v
		new Planet(sunDiameter * p5.random(9, 10), p5.random(0, 360), p5.random(10, 15), p5), // m
		new Planet(sunDiameter * p5.random(18, 19), p5.random(0, 360), p5.random(25, 35), p5), // s
		new Planet(sunDiameter * p5.random(21, 22), p5.random(0, 360), p5.random(25, 35), p5), // u
		new Planet(sunDiameter * p5.random(24, 25), p5.random(0, 360), p5.random(25, 35), p5), // n
		earth, // e
		earth_moon,
		jupiter,
		jupiter_system,
		new Planet(sunDiameter * p5.random(50, 51), p5.random(0, 360), p5.random(5, 6), p5),
	];

	const temp = new System(sunDiameter, solarSystemCenterX, solarSystemCenterY, rate, bodies, undefined, p5);

	return temp;
};




export default function P5Background() {
	return <ReactP5Wrapper sketch={sketch} />;
}
