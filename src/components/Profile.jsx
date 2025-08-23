import React from 'react'

import photo from '../assets/images/jieun_im1-142b897b.webp'
import skill01 from '../assets/images/about_img_01.svg'
import skill02 from '../assets/images/about_img_02.svg'
import skill03 from '../assets/images/about_img_03.svg'
import skill04 from '../assets/images/about_img_04.svg'
import skill05 from '../assets/images/about_img_05.svg'
import skill06 from '../assets/images/about_img_06.svg'
import skill07 from '../assets/images/about_img_07.svg'
import skill08 from '../assets/images/about_img_08.svg'
import skill09 from '../assets/images/about_img_09.svg'


const Profile = () => {
    const skills = [
        { name: 'HTML', img: skill01 },
        { name: 'CSS', img: skill02 },
        { name: 'JavaScript', img: skill03 },
        { name: 'React', img: skill04 },
        { name: 'Photoshop', img: skill05 },
        { name: 'Illustrator', img: skill06 },
        { name: 'Figma', img: skill07 },
        { name: 'Git', img: skill08 },
        { name: 'Next.js', img: skill09 },
    ]
  return (
    <div className='flex profile'>
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
                        <span>{s.name}</span>
                    </div>
                    ))}
                    </div>
                </p>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Profile
