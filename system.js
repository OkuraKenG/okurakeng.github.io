class System {
    constructor(mainBodyDiameter, x, y, rate, bodies, linkedBody) {
        this.mainBodyDiameter = mainBodyDiameter;
        this.x = x;
        this.y = y;
        this.rate = rate;
        this.bodies = bodies;
        this.stars = [];
        this.comets = [];
        this.linkedBody = linkedBody ?? undefined;

        if (!linkedBody) {
            for (let i = 0; i < 200; i++) {
                this.stars.push(new Star((Math.random() - 0.5) / 40));
            }

            for (let i = 0; i < 2; i++) {
                this.comets.push(new Comet(this.x, this.y));
            }
        }
    }

    drawBase() {
        this.#drawStars();
        this.#drawSun();
        if (!this.linkedBody) 
            this.drawOrbits();
    }

    #drawSun() {
        noStroke();
        fill(255, 204, 0);
        circle(this.x, this.y, this.mainBodyDiameter);
    }


    #drawStars() {
        strokeWeight(2);
        for (const star of this.stars) {
            star.draw();
        }
    }

    drawOrbits() {
        stroke(75)
        strokeWeight(1.5);
        noFill();

        for (const body of this.bodies) {
            body.semiMajorAxis ? circle(this.x, this.y, body.semiMajorAxis) : '';
        }
    }


    draw() {
        this.#drawBodies();
        this.#drawComets();

        if (this.linkedBody) {
            this.x = this.linkedBody.x;
            this.y = this.linkedBody.y;
        }
    }

    #drawBodies() {
        for (let body of this.bodies) {
            body.draw(this.x, this.y, this.rate);
        }

    }

    #drawComets() {
        for (let comet of this.comets) {
            comet.draw(this.x, this.y);
        }
    }
}

class Planet {
    constructor(semiMajorAxis, startDeg, size, colour) {
        this.semiMajorAxis = semiMajorAxis;
        this.deg = startDeg ?? random(0, 360);
        this.size = size ?? random(10, 20);
        this.colour = colour ?? color(random(255), 200, random(255));
        // this.x 
        // this.y 
    }

    draw(solarSystemCenterX, solarSystemCenterY, rate) {
        noStroke();
        fill(this.colour);
        this.x = solarSystemCenterX + (this.semiMajorAxis / 2) * cos(this.deg);
        this.y = solarSystemCenterY + (this.semiMajorAxis / 2) * sin(this.deg);

        circle(this.x, this.y, this.size);
        this.deg += rate;
    }
};


class Star {
    constructor(bias) {
        this.x = random(0, windowWidth);
        this.y = random(0, windowHeight);
        this.bright = random(50, 150);
        this.bias = bias;
    }

    draw() {
        stroke(this.bright)
        point(this.x, this.y);
        this.x += this.bias;
        this.y += this.bias;
    }
}


class Comet {
    constructor(solarSystemCenterX, solarSystemCenterY) {
        this.swingyness = random(150, 250);
        this.offset = random(32, 100);
        this.h = random(-1250, -25);
        this.k = ((solarSystemCenterX - this.h) * (solarSystemCenterX - this.h)) / (4 * this.swingyness) + solarSystemCenterY - this.offset;
    }

    draw(solarSystemCenterX, solarSystemCenterY) {
        noStroke();
        fill('red');
        text('☄️', this.h, this.k)
        this.h = this.h + 1;
        this.k = ((solarSystemCenterX - this.h) * (solarSystemCenterX - this.h)) / (4 * this.swingyness) + solarSystemCenterY - this.offset;
    }
}