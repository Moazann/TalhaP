import React from 'react'
import "./skills.css";
import { DataContext } from '../../dataUseContext';


const Skills = () => {

    const dataContext = React.useContext(DataContext);
    const fList = dataContext[4].data.fend_arr;
    const bList = dataContext[4].data.bend_arr;
    
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My Technical Level</span>

            <div className="skills__container container grid">

                {/* <Frontend /> */}
                <div className="skills__content">
                    <h3 className="skills__title">{fList[0].title}</h3>

                    <div className="skills__box">
                        <div className="skills__group">
                            <div className="skills__data">
                                <i className='bx bx-badge-check'></i>

                                <div>
                                    <h3 className="skills__name">{fList[1].name}</h3>
                                    <span className="skills__level">{fList[1].level}</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <i className='bx bx-badge-check'></i>

                                <div>
                                    <h3 className="skills__name">{fList[2].name}</h3>
                                    <span className="skills__level">{fList[2].level}</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <i className='bx bx-badge-check'></i>

                                <div>
                                    <h3 className="skills__name">{fList[3].name}</h3>
                                    <span className="skills__level">{fList[3].level}</span>
                                </div>
                            </div>
                        </div>

                        <div className="skills__group">
                            <div className="skills__data">
                                <i className='bx bx-badge-check'></i>

                                <div>
                                    <h3 className="skills__name">{fList[4].name}</h3>
                                    <span className="skills__level">{fList[4].level}</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <i className='bx bx-badge-check'></i>

                                <div>
                                    <h3 className="skills__name">{fList[5].name}</h3>
                                    <span className="skills__level">{fList[5].level}</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <i className='bx bx-badge-check'></i>

                                <div>
                                    <h3 className="skills__name">{fList[6].name}</h3>
                                    <span className="skills__level">{fList[6].level}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <Backend /> */}
                <div className="skills__content">
                    <h3 className="skills__title">{bList[0].title}</h3>

                    <div className="skills__box">
                        <div className="skills__group">
                            <div className="skills__data">
                                <i className='bx bx-badge-check'></i>

                                <div>
                                    <h3 className="skills__name">{bList[1].name}</h3>
                                    <span className="skills__level">{bList[1].level}</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <i className='bx bx-badge-check'></i>

                                <div>
                                    <h3 className="skills__name">{bList[2].name}</h3>
                                    <span className="skills__level">{bList[2].level}</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <i className='bx bx-badge-check'></i>

                                <div>
                                    <h3 className="skills__name">{bList[3].name}</h3>
                                    <span className="skills__level">{bList[3].level}</span>
                                </div>
                            </div>
                        </div>

                        <div className="skills__group">
                            <div className="skills__data">
                                <i className='bx bx-badge-check'></i>

                                <div>
                                    <h3 className="skills__name">{bList[4].name}</h3>
                                    <span className="skills__level">{bList[4].level}</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <i className='bx bx-badge-check'></i>

                                <div>
                                    <h3 className="skills__name">{bList[5].name}</h3>
                                    <span className="skills__level">{bList[5].level}</span>
                                </div>
                            </div>

                            <div className="skills__data">
                                <i className='bx bx-badge-check'></i>

                                <div>
                                    <h3 className="skills__name">{bList[6].name}</h3>
                                    <span className="skills__level">{bList[6].level}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
