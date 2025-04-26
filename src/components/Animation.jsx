import { animate } from "animejs"
import { useEffect, useRef } from "react"


export function Animation () {
    const shapeRefs = useRef([]);

    useEffect(() => {
      const targets = shapeRefs.current;
  
      animate({
        targets: targets,
        x: () => anime.random(-100, 100),
        y: () => anime.random(-100, 100),
        rotate: () => anime.random(-180, 180),
        duration: () => anime.random(500, 1000),
        composition: 'blend',
        loop: true, // Para que la animación se repita indefinidamente
      });
    }, []);
  

  return (
    <>
        <div className="relative w-64 h-64">
            {Array.from({ length: 4 }).map((_, index) => (
                <div
                key={index}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-md bg-blue-500 shape"
                ref={(el) => (shapeRefs.current[index] = el)}
                style={{ backgroundColor: `hsl(${index * 90}, 70%, 50%)` }} // Para darles colores diferentes
                ></div>
            ))}
        </div>
    </>
  )
}