import React from 'react'
import "./footer.css"
import fiverr from "../../assets/fiverr.png"

const Footer = () => {
    
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Talha</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://www.linkedin.com/in/talha-saleem-55176b44/" target="_blank" rel="noreferrer" className="home__social-icon">
            <i className="uil uil-linkedin-alt"></i>
            </a>

            <a href="https://stackexchange.com/users/18652345/talha-saleem" target="_blank" rel="noreferrer" className="home__social-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="stack-overflow"><path d="M17.24 19.399v-4.804h1.6V21H4.381v-6.405h1.598v4.804H17.24zM7.582 17.8h8.055v-1.604H7.582V17.8zm.195-3.64 7.859 1.641.34-1.552-7.861-1.642-.338 1.553zm1.018-3.794 7.281 3.398.678-1.463-7.281-3.399-.678 1.454v.01zm2.037-3.589 6.166 5.142 1.018-1.216-6.162-5.14-1.016 1.213-.006.001zm3.982-3.778-1.311.969 4.803 6.454 1.313-.971-4.807-6.452h.002z"></path></svg>
            </a>

            <a href="https://www.fiverr.com/mtalhasaleem" target="_blank" rel="noreferrer" className="home__social-icon">
            <img src={fiverr} alt="" />
            </a>
            
            <a href="https://www.upwork.com/freelancers/talhasaleem2" target="_blank" rel="noreferrer" className="home__social-icon">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAWZJREFUSEvtle0xBFEQRc9GgAgQASJABGwEiAARIAIyQASIYIkAGQiBCKiz1b31jPmot2X/KF21P7an373dt++bGbHgGC0Yn79HsAa8xy/VM7cKfAAvtZKWEn3G4V3gsQA6B87i/0qDfJCvluAUuArUZeAY2AGc8g24AW5L1loCQdYBwSfAZssI98A487UEnjsKgssAeQAEdZJ9YAmYTToPgSZwErsXXNAMJToIM2yZrCF4Cq11VEbTEJLdxcMpdklgVx4uF2mN4+9Fty5Y7dskNudzF6+l3dM3ggSS6ASwY4Ed20jilMGcdtbGAlrrOYF10mGTQKt5kVxSM14Lxwi63VKTKcnywv54F7k4O9woAFyk3bhcIy+kXeqccidOba0qTKPrZWcHOVECW28Dz3HW+yBQV20vQZcCdnddLrFHqrkI0iVKoTyDUfs9yAVfhHt+nSC7VvvZIvtYaicY7LhZ8E8wKNkX32RVGZqS74EAAAAASUVORK5CYII="/>
            </a>
            </div>

            <span className="footer__copy"> TalhaSaleem &#169; All Rights Reserved</span>
            
        </div>
    </footer>
  )
}

export default Footer
