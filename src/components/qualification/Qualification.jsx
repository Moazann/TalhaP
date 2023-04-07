import React, { useState } from 'react'
import "./qualification.css"
import { DataContext } from '../../dataUseContext';

const Qualification = () => {

    
    const dataContext = React.useContext(DataContext);
    const exList = dataContext[2].data.ex_arr;

   

    return (
        <section className="qualification section">
            <h2 className="section__title">Experience</h2>
            <span className="section__subtitle">My Personel Journey</span>

            <div className="qualification__container container">
                {/* <div className="qualification__tabs">
                    <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        {edList[0].title}
                    </div>

                    <div className="qualification__button qualification__active ">
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        {exList[0].title}
                    </div>
                </div> */}

                <div className="qualification__sections">
                    {/* <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">{edList[1].degree}</h3>
                                <span className="qualification__subtitle">{edList[1].institute}</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    {edList[1].date}
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">{edList[2].degree}</h3>
                                <span className="qualification__subtitle">{edList[2].institute}</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    {edList[2].date}
                                </div>
                            </div>


                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">{edList[3].degree}</h3>
                                <span className="qualification__subtitle">{edList[3].institute}</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    {edList[3].date}
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>

                            </div>
                        </div>
                    </div> */}

                    <div className="qualification__content qualification__content-active">
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">{exList[1].position}</h3>
                                <span className="qualification__subtitle">{exList[1].company}</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    {exList[1].date}
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">{exList[2].position}</h3>
                                <span className="qualification__subtitle">{exList[2].company}</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    {exList[2].date}
                                </div>
                            </div>


                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">{exList[3].position}</h3>
                                <span className="qualification__subtitle">{exList[3].company}</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    {exList[3].date}
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">{exList[4].position}</h3>
                                <span className="qualification__subtitle">{exList[4].company}</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    {exList[4].date}
                                </div>
                            </div>


                        </div>
                        
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">{exList[5].position}</h3>
                                <span className="qualification__subtitle">{exList[5].company}</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    {exList[5].date}
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification
