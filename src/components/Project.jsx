import React from 'react'
import project01 from '../assets/images/project01.png'
import project02 from '../assets/images/project02.png'
import project03 from '../assets/images/project03.png'
import project04 from '../assets/images/project04.png'
import linkImg from '../assets/images/link2.png'

const Project = () => {
  return (
    <section className='project'>
        <div className='inner inner2'>
            <h2 className='center'>Project</h2>
            <ul className='projectList'>
            <li>
                    <div className='projectBox_inner'>
                        <div className='boxConatain'>
                            <div className='projectBox'>
                                    <img src={project04} alt="" />
                            </div>
                            
                            <div className='projectTxts'>
                                <p className='projectTit center'>제이씨앤씨</p>
                                <ul className='depthTxt flex'>
                                    <li>
                                    사용언어 <span>html, css, javascript, jquery</span>
                                    </li>
                                    <li>
                                        기간 <span>2024.08.12</span>
                                    </li>
                                    <li>
                                        리뷰들을 생생하게 표현하기 위해 scrolltrigger를 통해 강조하여 리뉴얼 해보았습니다.
                                    </li>
                                    <a href='http://dptjs1106.mycafe24.com/project6/info/guide.html' target="_blank" >
                                        <img src={linkImg} alt=""  className='linkImg'/>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='projectBox_inner'>
                            <div className='boxConatain'>
                                <div className='projectBox'>
                                    <img src={project02} alt="" />
                                </div>
                            
                            <div className='projectTxts'>
                                <p className='projectTit center'>한미문화재단</p>
                                <ul className='depthTxt flex'>
                                    <li>
                                    사용언어 <span>html, css, javascript, jquery</span>
                                    </li>
                                    <li>
                                        기간 <span>2025.08.07 - 2025.08.09</span>
                                    </li>
                                    <li>
                                        한미문화재단 홈페이지를 리뉴얼하여 퍼블리싱 했습니다.
                                    </li>
                                    <a href='http://dptjs1106.mycafe24.com/project2' target="_blank" >
                                        <img src={linkImg} alt=""  className='linkImg'/>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='projectBox_inner'>
                            <div className='boxConatain'>
                                <div className='projectBox'>
                                    <img src={project01} alt="" />
                                </div>
                            
                            <div className='projectTxts'>
                                <p className='projectTit center'>한미문화재단</p>
                                <ul className='depthTxt flex'>
                                    <li>
                                    사용언어 <span>html, css, javascript, jquery</span>
                                    </li>
                                    <li>
                                        기간 <span>2025.08.04 - 2025.08.06</span>
                                    </li>
                                    <li>
                                        한미문화재단 홈페이지를 똑같이 퍼블리싱 했습니다.
                                    </li>
                                    <a href='http://dptjs1106.mycafe24.com/project1' target="_blank" >
                                        <img src={linkImg} alt=""  className='linkImg'/>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='projectBox_inner'>
                        <div className='boxConatain'>
                            <div className='projectBox'>
                                    <img src={project03} alt="" />
                            </div>
                            
                            <div className='projectTxts'>
                                <p className='projectTit center'>대한청년을세계로</p>
                                <ul className='depthTxt flex'>
                                    <li>
                                    사용언어 <span>React, React Router, JavaScript, CSS</span>
                                    </li>
                                    <li>
                                        기간 <span>2024.11.14 - 2024.11.23</span>
                                    </li>
                                    <li>
                                        react로 프론트 전부를 맡아서 작업했습니다.
                                    </li>
                                    <a href='https://www.daecheongse.com/' target="_blank" >
                                        <img src={linkImg} alt=""  className='linkImg'/>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </li>
                
            </ul>
        </div>
    </section>
  )
}

export default Project
