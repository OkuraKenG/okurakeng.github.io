class NightSkyRT {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.stars = [];
        this.satellites = [];
        this.terrains = [new Terrain(
            this.noiseLevel = random(65, 125),
            random(0.001, 0.02),
            50,
            color(1))];

        for (let i = 0; i < 750; i++) {
            this.stars.push(
                new NightStarRT(
                    random(2.5, windowWidth > windowHeight ? windowWidth * 3 : windowHeight * 3))
            )
        }

        for (let i = 0; i < 25; i++) {
            this.satellites.push(
                new SatelliteRT(random(windowWidth), random(windowHeight))
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

        
        for (const satellite of this.satellites) {
            satellite.draw();
        }

        for (const terrain of this.terrains) {
            terrain.draw();
        }




    }
}

class NightStarRT {
    constructor(distance) {
        this.deg = random(0, 360);
        this.distance = distance;
        this.fill = color(random(50, 150));
        this.size = random(1, 2);
    }

    draw(x, y) {
        noStroke();
        fill(this.fill);
        this.x = x + (this.distance) * cos(this.deg);
        this.y = y + (this.distance) * sin(this.deg);

        circle(this.x, this.y, this.size + Math.random() * 0.75);
        this.deg += 0.01;
    }
}

class SatelliteRT {
    constructor(x, y) {
        this.delay = random(0, 5000)
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
        if ((frameCount > this.delay) && dist(this.startX, this.startY, this.x, this.y) < this.distance) {
            this.x = this.x + this.v_x;
            this.y = this.y + this.v_y;
            fill(color(sin(0.95 * frameCount + sin(frameCount)) * 255))
            circle(this.x, this.y, sin(0.95 * frameCount + sin(frameCount)) * 4);
        }


    }

}