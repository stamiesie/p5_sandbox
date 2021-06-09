/* eslint-disable max-len */
/* eslint-disable indent */

import React, { useState, useEffect } from 'react';
import P5Wrapper from 'react-p5-wrapper';

export default function App() {
  const [counter, setCounter] = useState(0);

  const sketch = (p5) => {
    p5.setup = () => {
      p5.createCanvas(p5.windowWidth, p5.windowHeight);
      // p5.noStroke();

      for(let i = 0; i < 100; i++) {
        p5.fill(p5.random(200), p5.random(200), p5.random(200), p5.random(255));
        
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
          // const button = p5.createButton('SAVE');
          // button.mousePressed(p5.saveCanvas('myCanvas', 'png'));
    };
  };

  const handleRandomClick = () => {
    setCounter(counter + 1);
    console.log('>>>', counter);
  };

  const handleSaveClick = () => {
    console.log('Save button clicked');

    // get canvas data
    const canvas = document.getElementsByClassName('p5Canvas');
    console.log(canvas);
    const dataURL = canvas[0].toDataURL('image/png');
    console.log(dataURL);

    // create temporary link (could make all of this a util function)
    const saveCanvas = document.createElement('a');
    saveCanvas.download = 'greeting.png';
    saveCanvas.href = dataURL;

  // temporarily add link to body and initiate download
    document.body.appendChild(saveCanvas);
    saveCanvas.click();
    document.body.removeChild(saveCanvas);
    console.log('Canvas saved!');
  }; 
  

  useEffect(() => {
    console.log('***', counter);
  }, [counter]);

  return (
    <>
      <button onClick={handleRandomClick}>Randomize</button>
      <button onClick={handleSaveClick}>Save</button>
    <div>
      <P5Wrapper sketch={sketch} />
    </div>
    </>
  );
}
