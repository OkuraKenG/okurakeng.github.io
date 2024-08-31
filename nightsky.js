class NightSky {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.stars = [];
        this.noiseScale = random(0.01, 0.02);
        this.noiseLevel = random(74,125);

        for (let i = 0; i < 300; i++)
            this.stars.push(
                new NightStar(x, y, random(-90, 360), random(-90, 360), random(0, 750))
            )
    }

    draw() {
        for (const star of this.stars) {
            star.draw(this.x, this.y);
        }

        let noiseLevel = this.noiseLevel;
        let noiseScale = this.noiseScale;

        for (let i = 0; i < windowWidth; i++) {
            stroke(1);
            
            // Scale the input coordinate.
            let x = i;
            let nx = noiseScale * x;

            // Compute the noise value.
            let y = noiseLevel * noise(nx);

            // Draw the line.
            line(x, windowHeight, x, windowHeight - y - 40);
        }
    }
}

class NightStar {
    constructor(x, y, stop, deg, distance) {
        this.x = x + (distance) * cos(deg);
        this.y = y + (distance) * cos(deg);
        this.stop = stop;
        this.deg = deg;
        this.distance = distance;
        this.fill = color(random(200, 256))
    }

    draw(x, y) {
        noStroke();


        if (this.deg <= this.stop) {
            fill(this.fill)
            let starX = x + (this.distance) * cos(this.deg);
            let starY = y + (this.distance) * sin(this.deg);
            this.deg += 1;
            circle(starX, starY, 0.5)
            this.x = x + (this.distance) * cos(this.deg);
            this.y = y + (this.distance) * cos(this.deg);
        }



    }
}