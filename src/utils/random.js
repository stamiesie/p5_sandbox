/* eslint-disable max-len */
/* eslint-disable indent */

// export const randomArt = () => {
//     const sketch = (p5) => {
//         p5.setup = () => {
//           p5.createCanvas(500, 500);
//           p5.noStroke();

//           for(let i = 0; i < 1000; i++){
//               p5.fill(p5.random(255), p5.random(255), p5.random(255), p5.random(255));
//             //   p5.stroke(p5.random(255), p5.random(255), p5.random(255));
//             //   p5.circle(p5.random(500), p5.random(500), p5.random(50));
//               p5.square(p5.random(500), p5.random(500), p5.random(50));
//           }
//         };
//     };
//     return sketch;
// };

export default function sketch(p5, counter) {
    
        p5.setup = () =>
          p5.createCanvas(500, 500);
        
          p5.myCustomRedrawAccordingToNewPropsHandler = (props) => {
            if(counter) {
                counter = (props.counter * Math.PI) / 180;
                console.log('counter', counter);
            }
            
          };
          
          
        
        p5.draw = () => {
          for(let i = 0; i < 1000; i++){
            p5.fill(p5.random(255), p5.random(255), p5.random(255), p5.random(counter));
            // p5.background(counter);
            p5.noLoop();
            p5.square(p5.random(500), p5.random(500), p5.random(50));
          }
        };
        
}
