import React, { useEffect, useRef } from "react";
import { Element } from "react-scroll";
import gsap from "gsap";

const Section01 = () => {
  const circleRef1 = useRef(null);
  const circleRef2 = useRef(null);
  const circleRef3 = useRef(null);

  const circleRefs = [circleRef1, circleRef2, circleRef3];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/portfolio.pdf"; // public 폴더 안에 있는 PDF 경로
    link.download = "안예선 자소개서.pdf"; // 저장될 파일명
    link.click();
  };

  useEffect(() => {
    const tl = gsap.timeline();

    // 원들 튀어나오기
    tl.fromTo(
      circleRefs.map(ref => ref.current),
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "elastic.out(1,0.5)", stagger: 0.2 }
    );

    // 원들 좌우 정렬
    const positions = [-80, 0, 80];
    tl.to(
      circleRefs.map(ref => ref.current.parentNode),
      { left: (i) => `calc(50% + ${positions[i]}px)`, duration: 0.8, ease: "power2.out" }
    );

    // 초성 그리기
    tl.add(() => {
      const drawLetter = (c, i, onComplete) => {
        const svg = c.current.parentNode;
        const bbox = c.current.getBBox();
        const cx = bbox.x + bbox.width / 2;
        const cy = bbox.y + bbox.height / 2;

        c.current.style.opacity = 0;

        let path;
        if (i < 2) {
          // ㅇ
          path = document.createElementNS("http://www.w3.org/2000/svg", "circle");
          path.setAttribute("cx", cx);
          path.setAttribute("cy", cy);
          path.setAttribute("r", 20);
          path.setAttribute("stroke-width", "30");
          path.setAttribute("fill", "none");
          path.setAttribute("stroke-linecap", "round");
        } else {
          // ㅅ
          path = document.createElementNS("http://www.w3.org/2000/svg", "path");
          path.setAttribute("d", `M ${cx - 15} ${cy + 15} L ${cx} ${cy - 20} L ${cx + 15} ${cy + 15}`);
          path.setAttribute("stroke-width", "6");
          path.setAttribute("fill", "none");
          path.setAttribute("stroke-linecap", "round");
          
        }

        svg.appendChild(path);
        svg.classList.add("letter-path", `color-${i}`);

        const len = path.getTotalLength ? path.getTotalLength() : 2 * Math.PI * 20;
        path.style.strokeDasharray = len;
        path.style.strokeDashoffset = len;

        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 1,
          ease: "power2.out",
          onComplete: onComplete
        });

        // hover 효과
        svg.addEventListener("mouseenter", () => {
          gsap.to(svg, {
            y: -12,
            duration: 1,
            ease: "elastic.out(1, 1.5)",
          });
        });
        svg.addEventListener("mouseleave", () => {
          gsap.to(svg, {
            y: 0,
            duration: 1,
            ease: "elastic.out(1, 1.5)",
          });
        });
      };

      drawLetter(circleRefs[0], 0, () => {
        drawLetter(circleRefs[1], 1, () => {
          drawLetter(circleRefs[2], 2, () => {});
        });
      });
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // 여기서 circleRefs 안 넣어도 안전

  return (
    <Element name='main'>
    <section className="sec01">
      <div className="inner">
        <div className="main">
          <div className="main_top">
            <div className="top_logo">
              {circleRefs.map((ref, idx) => (
                <svg
                  key={idx}
                  width="160"
                  height="160"
                  style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}
                >
                  <circle ref={ref} cx="50%" cy="50%" r="10" />
                </svg>
              ))}
            </div>

            <div className="top_txt">
              <h1>
                안녕하세요.<br />웹 퍼블리셔 <span className="color1">안예선</span>입니다.
              </h1>
              <p>웹표준, 웹접근성을 고려하며 안전하고 수준 높은 사이트를 만들며,<br /> 꾸준한 공부로 발전할 것입니다. </p>
              <button onClick={handleDownload}>이력서 다운받기</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Element>
  );
};

export default Section01;
