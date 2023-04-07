import React from 'react'
import "./about.css"
// import Info from './Info';
// import ProfileImg from "../../assets/profile.jpeg";
// import CV from "../../assets/Moazan-CV.pdf";
// import Info from './Info';
import { DataContext } from '../../dataUseContext';



const About = () => {

    const dataContext = React.useContext(DataContext);
    const aboutList = dataContext[0].data.data;
    
    return (

        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My Introduction</span>
            
            <div className="about__container container grid">
                <img src={aboutList[4].profileImg} alt="" className="about__img" />
                <div className="about__data">
                    <div className="about__info grid">

                        <div className="about__box" >
                            <i className='bx bx-award'></i>
                            <h3 className="about__title">{aboutList[0].title}</h3>
                            <span className="about__subtitle">{aboutList[0].subtitle}</span>
                        </div>


                        <div className="about__box" >
                            <i className="bx bx-support"></i>
                            <h3 className="about__title">{aboutList[1].title}</h3>
                            <span className="about__subtitle">{aboutList[1].subtitle}</span>
                        </div>

                        <div className="about__box" >
                            <i className='bx bx-task'></i>
                            <h3 className="about__title">{aboutList[2].title}</h3>
                            <span className="about__subtitle">{aboutList[2].subtitle}</span>
                        </div>

                        <div className="about__box" >
                            <i className='bx bx-check-circle'></i>
                            <h3 className="about__title">{aboutList[3].title}</h3>
                            <span className="about__subtitle">{aboutList[3].subtitle}</span>
                        </div>


                    </div>

                    <p className="about__description">{aboutList[4].description}</p>

                    <a download="" href={aboutList[4].cv} className="button button--flex">Download CV
                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="31">
                            <g stroke="#000">
                                <path
                                    fill="#FFF"
                                    d="M31.742 214.36h81.388l-1.89 30.57 29.02-.07v115.5H31.74l.002-146h0z"
                                    transform="matrix(.16533 0 0 .16533 5 0) translate(28.587 -135.63) scale(.78306)"
                                ></path>
                                <path
                                    fill="none"
                                    d="M112.81 215.01l26.91 28.67"
                                    transform="matrix(.16533 0 0 .16533 5 0) translate(28.587 -135.63) scale(.78306)"
                                ></path>
                            </g>
                        </svg>
                    </a>
                </div>

            </div>

        </section>
    )

}

export default About
