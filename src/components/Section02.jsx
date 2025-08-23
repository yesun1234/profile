import React from 'react'
import { Element } from 'react-scroll'
import SubNav from './SubNav'
import Career from './Career'
import Profile from './Profile'

const Section02 = () => {
  return (
    <section className='sec02'>
        <div className='inner inner2'>
            <div className='main flex'>
                <SubNav />
                <div className='subMain'>
                    <Element name='PROFILE'>
                        <Profile />
                    </Element>
                    <Element name='CAREER'>
                        <Career />
                    </Element>
                    
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Section02
