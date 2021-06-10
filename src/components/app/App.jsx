/* eslint-disable max-len */
/* eslint-disable indent */

import React, { useState, useEffect } from 'react';
import P5Wrapper from 'react-p5-wrapper';

export default function App() {
  const [counter, setCounter] = useState(0);

  // const sketch = (p5) => {
  //   p5.setup = () => {
  //     p5.createCanvas(p5.windowWidth, p5.windowHeight);
  //     p5.background(255);
  //     // p5.noStroke();

  //     for(let i = 0; i < 100; i++) {
  //       p5.fill(p5.random(200), p5.random(200), p5.random(200), p5.random(255));
        
  //       p5.square(
  //         p5.random(p5.windowWidth),
  //         p5.random(p5.windowHeight),
  //         p5.random(100)
  //         );
          
  //         p5.circle(
  //           p5.random(p5.windowWidth),
  //           p5.random(p5.windowHeight),
  //           p5.random(100)
  //           );
  //         }
  //   };
  // };

  const randomizeRatio = () => {
    return Math.round(Math.random() * 100);
  };
  
  const randomizeColor = () => {
    return Math.round(Math.random() * 254);
  };

  const randomizeCurve = () => {
    return Math.round(Math.random() * 640);
  };

  const sketch = (p5) => {
    p5.textInput;
    p5.slider;
  
    p5.setup = () => {
      p5.canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
      p5.canvas.class('p5Canvas');
    
      // create the input
      p5.textInput = p5.createInput();
      p5.textInput.class('Stephen');
      p5.textInput.id('text-input');

      // create the label
      p5.label = p5.createElement('label', 'Type text here');
      p5.label.id('text-input-label');

      // append the input to the label
      const textIn = document.getElementById('text-input');
      const newLabel = document.getElementById('text-input-label');
      newLabel.appendChild(textIn);

      // slider
      p5.slider = p5.createSlider(10, 100, 45, 1);
      const val = p5.slider.value();


    
      // p5.noStroke();
      p5.stroke(randomizeColor(), randomizeColor(), randomizeColor());
      // p5.background(randomizeColor(), randomizeColor(), randomizeColor());
      p5.background(randomizeColor(), randomizeColor(), randomizeColor());

      //p5.erase(randomizeColor(), randomizeColor(), randomizeColor());
      //p5.arc(50, 50, randomizeRatio(), randomizeRatio(), 2, 5);
      // p5.bezier(
        //   randomizeCurve(),
        //   randomizeCurve(),
        //   randomizeCurve(),
        //   randomizeCurve(),
        //   randomizeCurve(),
        //   randomizeCurve(),
        //   randomizeCurve(),
        //   randomizeCurve()
        // );

        // p5.bezier(
          //   randomizeCurve(),
          //   randomizeCurve(),
          //   randomizeCurve(),
          //   randomizeCurve(),
          //   randomizeCurve(),
          //   randomizeCurve(),
          //   randomizeCurve(),
          //   randomizeCurve()
          // );

          const newDensity = randomizeRatio();
          const newColor = randomizeColor();
    
          for(let i = 0; i < 1000; i++) {
            p5.fill(
              p5.random(newColor),
              p5.random(newColor),
              p5.random(newColor),
              p5.random(newColor)
              );
    
              p5.square(
                p5.random(p5.windowWidth),
                p5.random(p5.windowHeight),
                p5.random(val)
                );

                p5.circle(
                  p5.random(p5.windowWidth),
                  p5.random(p5.windowHeight),
                  p5.random(newDensity)
                  );
                  
                p5.triangle(
                  p5.random(p5.windowWidth),
                  p5.random(p5.windowHeight),
                  p5.random(newDensity)
                  );
                }
                
              };
              
              p5.draw = () => {
                p5.text(p5.textInput.value(), 200, 200);
                p5.textSize(30);

                // let val = p5.slider.value();
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
    <div className="wrapper">
      <P5Wrapper sketch={sketch} />
    </div>
    </>
  );
}

  
  
  
  
  
  
  
  
  


























  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
         
  
  
  
  
  
  
  
  
  
  








  