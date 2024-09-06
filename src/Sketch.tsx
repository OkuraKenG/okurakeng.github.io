import * as React from "react";
import { ReactP5Wrapper, Sketch } from "@p5-wrapper/react";

const sketch: Sketch = p5 => {
  p5.setup = () => p5.createCanvas(p5.windowWidth, p5.windowHeight);

  let x = 255;
  p5.draw = () => {
    p5.background(x);
    x--;
  };
};





export default function P5Background() {
    return <ReactP5Wrapper sketch={sketch} />;
}