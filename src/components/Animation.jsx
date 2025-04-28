import { animate, createScope, utils } from 'animejs';
import { useEffect, useRef } from 'react';

export function Animation() {
  const root = useRef(null);
  const scope = useRef(null);

  useEffect(() => {

    scope.current = createScope({ root }).add( () => {
      animate('.shape', {
        x: () => utils.random(-100, 100),
        y: () => utils.random(-100, 100),
        scale: 1.2,
        rotate: () => utils.random(-360, 360),
        duration: () => utils.random(500, 1000),
        loop: true,
        onLoop: self => self.refresh().restart(),
      });

      animate('.shape2', {
        x: () => utils.random(-75, 75),
        y: () => utils.random(-75, 75),
        scale: () => utils.random(0.5, 1.5),
        rotate: () => utils.random(-360, 360),
        duration: () => utils.random(500, 1000),
        loop: true,
        onLoop: self => self.refresh().restart()
      });

      animate('.shape3', {
        x: () => utils.random(-125, 125),
        y: () => utils.random(-125, 125),
        scale: () => utils.random(0.5, 1.5),
        rotate: () => utils.random(-360, 360),
        duration: () => utils.random(500, 1000),
        loop: true,
        onLoop: self => self.refresh().restart(),
      });
    });

    return () => scope.current.revert()
  }, []);

  return ( 
    <div ref={root} className="w-40 h-40 relative justify-center items-center flex rounded-full">
        <div className="shape absolute w-4 h-4 bg-orange-700 z-10"></div> 
        <div className="shape2 absolute w-5 h-5 bg-orange-700 z-10"></div> 

        <div className="shape absolute w-4 h-4 bg-yellow-600  rounded-full z-10"></div> 
        <div className="shape2 absolute w-5 h-5 bg-yellow-600 rounded-full z-10"></div> 

        <div className="shape absolute w-4 h-4 bg-transparent border border-orange-600"></div>
        <div className="shape2 absolute w-5 h-5 bg-transparent border border-yellow-600 rounded-full"></div>
        
        <div className="shape2 absolute w-4 h-4 bg-transparent border border-yellow-600 rounded-full"></div>
        <div className="shape absolute w-5 h-5 bg-transparent border border-yellow-600"></div>
    </div>
  );
}
