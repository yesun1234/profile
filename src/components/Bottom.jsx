import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Bottom = () => {
  const containerRef = useRef(null);
  const linesRef = useRef([]); 
  linesRef.current = []; 

  const text = "THANK YOU FOR WATCHING! 봐주셔서 감사합니다! ";
  const lineCount = 6; 

  const addToRefs = (el) => {
    if (el && !linesRef.current.includes(el)) {
      linesRef.current.push(el);
    }
  };

  useEffect(() => {
    linesRef.current.forEach((line, i) => {
      const lineWidth = line.offsetWidth / 2;

      if (i % 2 === 0) {
        // 짝수줄: 왼쪽으로 이동
        gsap.to(line, {
          x: `-=${lineWidth}px`,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      } else {
        gsap.set(line, { x: `-${lineWidth / 1}px` });

        gsap.to(line, {
          x: `+=${lineWidth}px`,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    });
  }, []);

  return (
    <div ref={containerRef} style={{ overflow: "hidden" }} className="finish">
      {Array.from({ length: lineCount }).map((_, i) => (
        <p
          key={i}
          ref={addToRefs}
          style={{ whiteSpace: "nowrap", margin: 0 }}
        >
          {text}{text}
        </p>
      ))}
    </div>
  );
};

export default Bottom;
