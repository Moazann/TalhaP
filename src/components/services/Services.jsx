import React, { useState } from 'react'
import "./services.css"
import { DataContext } from '../../dataUseContext'

const Services = () => {

    const [toggleState, setToggleState] = useState(0);
    const dataContext = React.useContext(DataContext);
    const servicesList = dataContext[3].data.data;
    
    

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="services section" id="services">
            <h2 className="section__title">My Services</h2>
            <span className="section__subtitle">What I Offer</span>

            <div className="services__container container grid">


                <div className="services__content">
                    <div>
                        <i className='bx bxl-flutter services__icon'></i>
                        <h3 className="services__title">{servicesList[0].title1}</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>
                        View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">{servicesList[0].title1}</h3>
                            <p className="services__modal-description">{servicesList[0].desc1}</p>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className='bx bxl-android services__icon'></i>
                        <h3 className="services__title">{servicesList[1].title2}</h3>
                    </div>

                    <span onClick={() => toggleTab(2)} className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
                            

                            <h3 className="services__modal-title">{servicesList[1].title2}</h3>
                            <p className="services__modal-description">{servicesList[1].desc2}</p>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className='bx bxl-apple services__icon'></i>
                        <h3 className="services__title">{servicesList[2].title3}</h3>
                    </div>

                    <span onClick={() => toggleTab(3)} className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">{servicesList[2].title3}</h3>
                            <p className="services__modal-description">{servicesList[2].desc3}</p>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="60"
                            height="50"
                            viewBox="0 0 32 32"
                        >
                            <path
                                fill="var(--title-color)"
                                d="M5.304 16.563a.265.265 0 00-.132-.23L2.98 15.072a.26.26 0 00-.121-.035h-.023a.264.264 0 00-.121.035L.524 16.333a.265.265 0 00-.133.23l.005 3.396a.13.13 0 00.066.114.13.13 0 00.132 0l1.302-.746a.267.267 0 00.132-.23V17.51c0-.094.05-.182.132-.229l.555-.319a.272.272 0 01.265 0l.554.319a.264.264 0 01.132.229v1.587c0 .095.051.181.133.23l1.302.746a.13.13 0 00.132 0 .133.133 0 00.066-.114l.004-3.396zm11.702-4.669c-.041-.023-.091-.022-.131.002s-.065.067-.065.114v3.363a.093.093 0 01-.139.08l-.549-.316a.267.267 0 00-.265 0l-2.192 1.265a.265.265 0 00-.133.229v2.531c0 .095.05.182.132.229l2.192 1.266a.267.267 0 00.265 0l2.193-1.266a.265.265 0 00.132-.229v-6.309a.265.265 0 00-.136-.231l-1.305-.728zm-.203 6.437a.063.063 0 01-.033.057l-.753.434a.065.065 0 01-.066 0l-.753-.434a.065.065 0 01-.033-.057v-.869c0-.024.013-.046.033-.057l.753-.435a.065.065 0 01.066 0l.753.435c.02.012.033.034.033.057v.869zm8.047-.892a.265.265 0 00.132-.229v-.613a.264.264 0 00-.132-.229l-2.178-1.265a.262.262 0 00-.265 0l-2.192 1.265a.264.264 0 00-.132.229v2.53c0 .095.051.183.134.23l2.178 1.241c.08.046.179.046.26.001l1.317-.732c.041-.023.067-.067.068-.115s-.025-.092-.066-.116l-2.206-1.266a.131.131 0 01-.066-.115v-.793c0-.047.025-.091.066-.115l.687-.395a.135.135 0 01.132 0l.687.395a.132.132 0 01.066.115v.624c0 .047.025.091.066.115s.092.023.133 0l1.312-.763zM9.291 15.09a.267.267 0 01.265 0l2.192 1.265a.263.263 0 01.132.229v2.532a.265.265 0 01-.132.229l-2.192 1.266a.267.267 0 01-.265 0l-2.192-1.266a.264.264 0 01-.132-.229v-2.532c0-.095.05-.182.132-.229l2.192-1.265zm19.815 5.557a.438.438 0 01-.217-.058l-.69-.408c-.103-.058-.052-.078-.019-.09.137-.048.165-.059.312-.142.015-.009.036-.005.052.004l.53.315a.066.066 0 00.064 0l2.067-1.193a.065.065 0 00.031-.056v-2.386a.067.067 0 00-.032-.057l-2.066-1.192a.066.066 0 00-.064 0l-2.066 1.192a.066.066 0 00-.033.057v2.386c0 .023.013.044.032.055l.566.327c.307.154.495-.027.495-.209v-2.355a.06.06 0 01.06-.059h.262a.06.06 0 01.06.059v2.355c0 .41-.223.645-.612.645-.119 0-.214 0-.476-.129l-.542-.312a.436.436 0 01-.217-.377v-2.386c0-.155.083-.3.217-.377l2.067-1.194a.452.452 0 01.434 0l2.067 1.194a.436.436 0 01.217.377v2.386a.437.437 0 01-.217.377l-2.067 1.193a.436.436 0 01-.218.058zm.639-1.643c-.905 0-1.094-.415-1.094-.764 0-.033.026-.059.06-.059h.267a.06.06 0 01.059.051c.04.272.16.41.708.41.435 0 .621-.099.621-.329 0-.133-.052-.232-.729-.298-.565-.056-.915-.181-.915-.633 0-.417.352-.666.941-.666.662 0 .99.23 1.031.723.002.017-.004.033-.016.046s-.027.019-.044.019h-.268a.06.06 0 01-.058-.047c-.064-.286-.221-.378-.645-.378-.475 0-.531.166-.531.29 0 .151.065.194.707.279.635.084.937.203.937.649 0 .45-.375.708-1.03.708zm-7.239-1.683a.052.052 0 01.051 0l.421.243a.05.05 0 01.026.044v.486a.05.05 0 01-.026.044l-.421.243a.052.052 0 01-.051 0l-.42-.243a.05.05 0 01-.025-.044v-.486c0-.018.01-.035.025-.044l.42-.243z"
                            ></path>
                        </svg>
                        <h3 className="services__title">{servicesList[3].title4}</h3>
                    </div>

                    <span onClick={() => toggleTab(4)} className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 4 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">{servicesList[3].title4}</h3>
                            <p className="services__modal-description">{servicesList[3].desc4}</p>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            fill="var(--title-color)"
                            stroke="#000"
                            version="1.1"
                            viewBox="0 0 511 511"
                            xmlSpace="preserve"
                        >
                            <g>
                                <path d="M492.168 309.579l-17.626-10.177c2.96-14.723 4.458-29.466 4.458-43.902 0-14.646-1.474-29.403-4.384-43.946l17.552-10.134c5.436-3.138 9.325-8.206 10.949-14.269s.791-12.396-2.348-17.832l-48-83.139A23.345 23.345 0 00438.5 75.231a23.349 23.349 0 00-17.833 2.348l-17.566 10.142C380.912 68.2 354.798 53.092 327 43.692V23.5C327 10.542 316.458 0 303.5 0h-96C194.542 0 184 10.542 184 23.5v20.193c-27.65 9.362-53.728 24.49-75.999 44.088L90.332 77.579a23.345 23.345 0 00-17.833-2.348A23.349 23.349 0 0058.23 86.18l-48 83.139c-3.139 5.436-3.972 11.769-2.348 17.832s5.513 11.131 10.949 14.269l17.626 10.177C33.499 226.32 32 241.063 32 255.5c0 14.644 1.474 29.401 4.384 43.945l-17.552 10.134c-11.222 6.479-15.08 20.879-8.602 32.102l48 83.139c6.479 11.221 20.879 15.08 32.102 8.601l17.565-10.142c22.19 19.521 48.303 34.629 76.103 44.03V487.5c0 12.958 10.542 23.5 23.5 23.5h96c12.958 0 23.5-10.542 23.5-23.5v-20.193c27.651-9.362 53.729-24.49 76-44.087l17.668 10.201c11.221 6.479 25.623 2.62 32.102-8.601l48-83.139c6.478-11.223 2.62-25.623-8.602-32.102zm-4.389 24.602l-48 83.138c-2.343 4.06-7.552 5.455-11.611 3.111l-22.392-12.928a7.5 7.5 0 00-8.842.989c-22.893 21.173-50.437 37.148-79.653 46.199a7.5 7.5 0 00-5.281 7.164V487.5c0 4.687-3.813 8.5-8.5 8.5h-96c-4.687 0-8.5-3.813-8.5-8.5v-25.645a7.501 7.501 0 00-5.28-7.164c-29.396-9.107-56.974-25.062-79.755-46.139a7.494 7.494 0 00-8.843-.99l-22.29 12.868c-4.06 2.343-9.268.948-11.611-3.111l-48-83.138c-2.343-4.059-.947-9.268 3.111-11.612l22.272-12.859a7.499 7.499 0 003.566-8.146C48.739 286.357 47 270.858 47 255.5c0-15.1 1.765-30.584 5.247-46.022a7.5 7.5 0 00-3.566-8.145L26.332 188.43a8.445 8.445 0 01-3.96-5.161 8.448 8.448 0 01.849-6.45l48-83.139a8.44 8.44 0 015.162-3.96 8.444 8.444 0 016.45.849l22.392 12.928a7.498 7.498 0 008.842-.989c22.894-21.173 50.437-37.148 79.653-46.199a7.5 7.5 0 005.281-7.164V23.5c0-4.687 3.813-8.5 8.5-8.5h96c4.687 0 8.5 3.813 8.5 8.5v25.645a7.501 7.501 0 005.28 7.164c29.395 9.106 56.973 25.061 79.755 46.139a7.5 7.5 0 008.843.99l22.29-12.869a8.445 8.445 0 016.45-.849 8.45 8.45 0 015.162 3.96l48 83.139a8.444 8.444 0 01.849 6.45 8.445 8.445 0 01-3.96 5.161l-22.272 12.859a7.5 7.5 0 00-3.566 8.146c3.431 15.206 5.17 30.704 5.17 46.065 0 15.1-1.765 30.584-5.247 46.021a7.501 7.501 0 003.566 8.145l22.349 12.903c4.057 2.344 5.453 7.553 3.109 11.612z"></path>
                                <path d="M255.5 104C171.962 104 104 171.963 104 255.5S171.962 407 255.5 407 407 339.037 407 255.5 339.038 104 255.5 104zm0 288C180.234 392 119 330.766 119 255.5S180.234 119 255.5 119 392 180.234 392 255.5 330.766 392 255.5 392z"></path>
                                <path d="M283.5 216h-28a7.5 7.5 0 00-7.5 7.5v64a7.5 7.5 0 0015 0V271h20.5c15.164 0 27.5-12.336 27.5-27.5S298.664 216 283.5 216zm0 40H263v-25h20.5c6.893 0 12.5 5.607 12.5 12.5s-5.607 12.5-12.5 12.5zM214.522 220.867A7.5 7.5 0 00207.5 216h-8a7.498 7.498 0 00-7.022 4.867l-24 64a7.5 7.5 0 0014.045 5.267L186.697 279h33.605l4.175 11.133a7.503 7.503 0 007.023 4.869 7.5 7.5 0 007.021-10.135l-23.999-64zM192.322 264l11.178-29.807L214.678 264h-22.356zM327.5 216a7.5 7.5 0 00-7.5 7.5v64a7.5 7.5 0 0015 0v-64a7.5 7.5 0 00-7.5-7.5zM309.152 87.3a175.962 175.962 0 0115.421 5.726 7.473 7.473 0 002.934.601 7.5 7.5 0 002.941-14.402 191.008 191.008 0 00-16.742-6.216 7.5 7.5 0 00-4.554 14.291zM100.45 339.904a7.5 7.5 0 00-13.168 7.184 192.173 192.173 0 0010.239 16.677 7.492 7.492 0 006.189 3.255 7.5 7.5 0 006.176-11.746 177.217 177.217 0 01-9.436-15.37zM240.14 431.341c-40.189-3.463-78.337-20.879-107.416-49.041a7.5 7.5 0 10-10.435 10.775c31.55 30.555 72.947 49.452 116.563 53.21a7.501 7.501 0 008.116-6.828 7.501 7.501 0 00-6.828-8.116zM363.425 97.287a7.5 7.5 0 00-8.464 12.384c34.844 23.813 60.049 59.248 70.972 99.776a7.503 7.503 0 007.237 5.55 7.5 7.5 0 007.246-9.453c-11.852-43.98-39.195-82.426-76.991-108.257z"></path>
                            </g>
                        </svg>
                        <h3 className="services__title space">{servicesList[4].title5}</h3>
                    </div>

                    <span onClick={() => toggleTab(5)} className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 5 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">{servicesList[4].title5}</h3>
                            <p className="services__modal-description">{servicesList[4].desc5}</p>
                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className='bx bxl-firebase services__icon'></i>
                        <h3 className="services__title">{servicesList[5].title6}</h3>
                    </div>

                    <span onClick={() => toggleTab(6)} className="services__button">View More <i className="uil uil-arrow-right services__button-icon"></i></span>

                    <div className={toggleState === 6 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">{servicesList[5].title6}</h3>
                            <p className="services__modal-description">{servicesList[5].desc6}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
