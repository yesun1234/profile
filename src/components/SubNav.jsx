import React from 'react'
import { Link as ScrollLink } from 'react-scroll'

const SubNav = () => {
  return (
    <nav className='subNav'>
        <ul>
            <li>
                <ScrollLink to='PROFILE' smooth={true} duration={500} className='color2' activeClass='on' spy={true}>
                    PROFILE
                </ScrollLink>
            </li>
            <li>
                <ScrollLink to='CAREER' smooth={true} duration={500} className='color2' activeClass='on' spy={true}>
                    CAREER
                </ScrollLink>
            </li>
            <li>
                <ScrollLink to='EDUCATION' smooth={true} duration={500} className='color2' activeClass='on' spy={true}>
                    EDUCATION
                </ScrollLink>
            </li>
        </ul>
        
    </nav>
  )
}

export default SubNav
