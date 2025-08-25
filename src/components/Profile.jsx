import React from 'react'

import photo from '../assets/images/jieun_im1-142b897b.webp'
import skill01 from '../assets/images/icon_html.svg'
import skill02 from '../assets/images/icon_css.svg'
import skill03 from '../assets/images/icon_javascript.svg'
import skill04 from '../assets/images/icon_react.svg'
import skill05 from '../assets/images/icon_jquery.svg'
import skill06 from '../assets/images/icon_photoshop.svg'
import skill07 from '../assets/images/icon_illustrator.svg'
import skill08 from '../assets/images/icon_figma.svg'
import txt from '../assets/images/txt_img2.png'


const Profile = () => {
    const skills = [
        { name: 'HTML', img: skill01 },
        { name: 'CSS', img: skill02 },
        { name: 'JavaScript', img: skill03 },
        { name: 'React', img: skill04 },
        { name: 'jqueray', img: skill05 },
        { name: 'Photoshop', img: skill06 },
        { name: 'Illustrator', img: skill07 },
        { name: 'Figma', img: skill08 },
        
    ]
  return (
    <div className='profile'>
      <div className='flex al-fs'>
        <div className='flex al-c'>
        <div className='photo'>
          <img src={photo} alt="" />
        </div>
        <div className='profileTxt'>
          <ul>
              <li className='tag'>
                  <span>#성장형마인드</span>
                  <span>#팀워크</span>
                  <span>#끝까지파고드는</span>
                  <span>#책임감</span>
                  <span>#사용자중심</span>
              </li>
              <li className='birthday'>
                  <p>
                      이름: <span>안예선</span>
                  </p>
                  <p>
                      생년원일: <span>1999.07.07</span>
                  </p>
                  <p>
                      TEL: <span>010-4116-4661</span>
                  </p>
                  <p>
                      SKILL/TOLL
                      <div className='skillBox'>
                      {skills.map((s, i) => (
                      <div className='skillItem' key={i}>
                          <img src={s.img} alt={s.name} />
                          <span className='skillName'>{s.name}</span>
                      </div>
                      ))}
                      </div>
                  </p>
              </li>
          </ul>
        </div>
      </div>
      {/* <div className='txtBox'>
        
        <img src={txt} alt="안녕하세요, 웹 퍼블리셔 안예선입니다.

          저는 사용자 입장에서의 편리함과 웹 표준, 접근성을 기반으로, 누구나 쉽고 아름답게 이용할 수 있는 웹사이트를 만들고자 합니다.

          고객과 팀원들과의 소통을 중요한 가치로 여기며, 맡은 일을 책임감 있게 수행하기 위해 매일 배우고 성장하는 자세를 가지고 있습니다.

          또한 자기 객관화를 통해 강점을 더욱 키우고 부족한 점은 보완하며, 최신 트렌드와 디자인을 꾸준히 탐구하여 실력을 다져가고 있습니다.

          빠르게 변화하는 시대 속에서 트렌드를 읽고, 끊임없이 발전하는 웹 퍼블리셔가 되겠습니다." className='txtImg'/>
          <p className='nanum-pen-script-regular'>
          안녕하세요, 웹 퍼블리셔 안예선입니다.

          저는 사용자 입장에서의 편리함과 웹 표준, 접근성을 기반으로, 누구나 쉽고 아름답게 이용할 수 있는 웹사이트를 만들고자 합니다.

          고객과 팀원들과의 소통을 중요한 가치로 여기며, 맡은 일을 책임감 있게 수행하기 위해 매일 배우고 성장하는 자세를 가지고 있습니다.

          또한 자기 객관화를 통해 강점을 더욱 키우고 부족한 점은 보완하며, 최신 트렌드와 디자인을 꾸준히 탐구하여 실력을 다져가고 있습니다.

          빠르게 변화하는 시대 속에서 트렌드를 읽고, 끊임없이 발전하는 웹 퍼블리셔가 되겠습니다.
          </p>
      </div> */}
      </div>
    </div>
  )
}

export default Profile
