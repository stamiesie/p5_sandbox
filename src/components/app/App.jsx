/* eslint-disable max-len */
/* eslint-disable indent */
import React from 'react';
import P5Wrapper from 'react-p5-wrapper';

export default function App() {
  const sketch = (p5) => {
  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
    p5.noStroke();
    for(let i = 0; i < 1000; i++){
        p5.fill(p5.random(255), p5.random(255), p5.random(255), p5.random(255));
        p5.circle(p5.random(p5.windowWidth), p5.random(p5.windowHeight), p5.random(100));
    }
  };
};
  return <P5Wrapper sketch={sketch}/>;
}
