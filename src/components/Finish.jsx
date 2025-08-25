import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Finish = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const spans = textRef.current.querySelectorAll("span");

    let chars = [];
    spans.forEach(span => {
      const text = span.textContent;
      span.textContent = "";

      const splitChars = text.split("").map(char => {
        const charSpan = document.createElement("span");
        charSpan.textContent = char;
        charSpan.style.display = "inline-block";
        charSpan.style.transform = "translateY(110px)";
        span.appendChild(charSpan);
        return charSpan;
      });

      chars = [...chars, ...splitChars];
    });

    gsap.to(chars, {
      y: 0,
      ease: "none",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 90%",
        end: "top 40%",
        scrub: true,
      },
      stagger: {
        each: 0.05,
        from: "start",
      },
    });
  }, []);

  return (
    <section className="bottom">
      <div className="inner inner2">
        <div className="TextInner" ref={textRef}>
          <p>
            <span>끊임없는</span>
          </p>
          <p>
            <span>공부로</span>
          </p>
          <p>
            <span>발전하는</span>
          </p>
        </div>
        <p>
          
          <br />
          안녕하세요, 웹 퍼블리셔 안예선입니다. 저는 사용자 입장에서의 편리함과 웹 표준, 접근성을 기반으로, 누구나 쉽고 아름답게 이용할 수 있는 웹사이트를 만들고자 합니다. 고객과 팀원들과의 소통을 중요한 가치로 여기며, 맡은 일을 책임감 있게 수행하기 위해 매일 배우고 성장하는 자세를 가지고 있습니다. 또한 자기 객관화를 통해 강점을 더욱 키우고 부족한 점은 보완하며, 최신 트렌드와 디자인을 꾸준히 탐구하여 실력을 다져가고 있습니다. 빠르게 변화하는 시대 속에서 트렌드를 읽고, 끊임없이 발전하는 웹 퍼블리셔가 되겠습니다.
        </p>
      </div>

      
    </section>
  );
};

export default Finish;
