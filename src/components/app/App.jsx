/* eslint-disable max-len */
/* eslint-disable indent */

import React, { useState, useEffect } from 'react';
import P5Wrapper from 'react-p5-wrapper';

export default function App() {
  const [counter, setCounter] = useState(0);

  const sketch = (p5) => {
    p5.setup = () => {
      p5.createCanvas(p5.windowWidth, p5.windowHeight);
      p5.noStroke();

      for(let i = 0; i < 1000; i++) {
        p5.fill(p5.random(270), p5.random(270), p5.random(270), p5.random(270));
        
        p5.square(
          p5.random(p5.windowWidth),
          p5.random(p5.windowHeight),
          p5.random(100)
        );

        p5.circle(
          p5.random(p5.windowWidth),
          p5.random(p5.windowHeight),
          p5.random(100)
        );
      }
    };
  };


  const handleClick = () => {
    setCounter(counter + 1);
    console.log('>>>', counter);
  };

  useEffect(() => {
    console.log('***', counter);
  }, [counter]);

  return (
    <>
      <button onClick={handleClick}>Randomize</button>

      <P5Wrapper sketch={sketch} />
    </>
  );
}




























