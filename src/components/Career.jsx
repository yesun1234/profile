import React from 'react'

const Career = () => {
  return (
    <div className='career'>
      <ul className='careerList'>
        <li>
            <time className='careerDate'>2024.06 - 2025.6</time>    
            <span className='careerTxt color3'>
                모노브레인
            </span>
            <ul className='carrerTxt_depth'>
                <li>
                    <strong>1. 프로젝트/업무 종류</strong>
                    <ul>
                        <li className='dot'>이러닝북 제작</li>
                        <li className='dot'>음원/영상 콘텐츠 퍼블리싱</li>
                        <li className='dot'>웹/모바일 학습 플랫폼 퍼블리싱</li>
                    </ul>
                </li>
                <li>
                    <strong>2. 본인이 맡은 역할</strong>
                    <ul>
                        <li className='dot'>HTML/CSS 코딩</li>
                        <li className='dot'>반응형/크로스브라우징 처리</li>
                        <li className='dot'>인터랙티브 요소 구현 (퀴즈, 버튼, 팝업 등)</li>
                    </ul>
                </li>
                <li>
                    <strong>3. 성과/특징</strong>
                    <ul>
                        <li className='dot'>작업 속도 향상, 오류 감소</li>
                        <li className='dot'>UI/UX 개선</li>
                        <li className='dot'>특정 프로젝트 완료 건수, 기간</li>
                    </ul>
                </li>
            </ul>
         </li>
         <li>
            <time className='careerDate'>2023.12 - 2024.06</time>    
            <span className='careerTxt color3'>
                국비과정 수료
            </span>
            <ul className='carrerTxt_depth carrerTxt_depth2'>
                <li className='dot'>HTML</li>
                <li className='dot'>CSS</li>
                <li className='dot'>JAVASCRIPT</li>
                <li className='dot'>REACT</li>
                <li className='dot'>UI/UX</li>
            </ul>    
         </li>
         <li>
            <time className='careerDate'>2018</time>    
            <span className='careerTxt color3'>
                고등학교 졸업
            </span>
            <span className='dot dot2'>인문계열 이과</span>
         </li>
      </ul>
    </div>
  )
}

export default Career
