import React from 'react'
import { Link as ScrollLink } from 'react-scroll'

const Nav = () => {
  return (
      <nav className="nav">
        <ul>
            <li>
                <ScrollLink to='main' smooth={true} duration={500}>
                    <span className='bg-pr navCircle'></span>
                    <span className='bg-pr2 navCircle'></span>
                    <span className='bg-pr3 navCircle'></span>
                </ScrollLink>
            </li>
            <li>
                <ScrollLink to='aboutMe' smooth={true} duration={500}>
                    ABOUT ME
                </ScrollLink>
            </li>
            <li>
                <ScrollLink to='ABOUT' smooth={true} duration={500}>
                    프로젝트
                </ScrollLink>
            </li>
         
        </ul>
    </nav>
  )
}

export default Nav
