import React from "react";
import "./home.css";
import fiverr from "../../assets/fiverr.png"
import { DataContext } from "../../dataUseContext";

const Home = () => {
  const dataContext = React.useContext(DataContext);
  const homeList = dataContext[1].data;

  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          

          <div className="home__social">
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
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAWZJREFUSEvtle0xBFEQRc9GgAgQASJABGwEiAARIAIyQASIYIkAGQiBCKiz1b31jPmot2X/KF21P7an373dt++bGbHgGC0Yn79HsAa8xy/VM7cKfAAvtZKWEn3G4V3gsQA6B87i/0qDfJCvluAUuArUZeAY2AGc8g24AW5L1loCQdYBwSfAZssI98A487UEnjsKgssAeQAEdZJ9YAmYTToPgSZwErsXXNAMJToIM2yZrCF4Cq11VEbTEJLdxcMpdklgVx4uF2mN4+9Fty5Y7dskNudzF6+l3dM3ggSS6ASwY4Ed20jilMGcdtbGAlrrOYF10mGTQKt5kVxSM14Lxwi63VKTKcnywv54F7k4O9woAFyk3bhcIy+kXeqccidOba0qTKPrZWcHOVECW28Dz3HW+yBQV20vQZcCdnddLrFHqrkI0iVKoTyDUfs9yAVfhHt+nSC7VvvZIvtYaicY7LhZ8E8wKNkX32RVGZqS74EAAAAASUVORK5CYII=" alt=""/>
            </a>
          </div>


          <div className="home__imgdiv">
            <img
              src={homeList.profileImg}
              alt=""
              className="home__imgdiv"
            />
          </div>

          {/* <Data /> */}
          <div className="home__data">
            <h1 className="home__title">
              {homeList.title}
              <svg xmlns="http://www.w3.org/2000/svg" width="51" height="38">
                <path
                  fill="#FFDBAC"
                  d="M451.245 87.821c-7.935-2.863-16.256-4.43-23.466-1.405-8.047 3.376-14.71 9.982-17.906 18.838l-50.02 138.628 30.599-155.276c3.451-17.513-7.948-34.509-25.462-37.96-17.514-3.451-34.509 7.948-37.96 25.462L294.003 243.71V39.821c0-17.85-14.471-32.321-32.321-32.321-17.85 0-32.321 14.47-32.321 32.32v210.476l-39.06-174.603c-3.897-17.42-21.177-28.382-38.597-24.485-17.42 3.897-28.382 21.177-24.485 38.597l37.5 167.634 8.306 41.627c2.034 10.195-7.984 18.622-17.68 14.872l-70.53-27.279c-18.701-7.006-39.392 3.491-44.783 22.72a17.141 17.141 0 007.024 18.909l140.293 86.745V489.5c0 8.284 6.716 15 15 15h130.696l23-2c8.284 0 15-4.716 15-13v-48.07l33.251-23.376a39.988 39.988 0 0016.989-32.71V258.538l47.392-131.346c6.059-16.79-.641-33.312-17.432-39.371z"
                  transform="matrix(.07422 0 0 .07422 6.5 0)"
                ></path>
                <path
                  fill="#FFDBAC"
                  d="M451.245 85.821c-7.934-2.863-16.254-2.426-23.464.598 15.78 6.605 23.768 24.502 17.897 40.773L399.177 256.07a15.002 15.002 0 00-.89 5.091v124.182a39.988 39.988 0 01-16.989 32.71l-26.878 18.895a15.001 15.001 0 00-6.373 12.271V489.5c0 8.284-6.716 15-15 15h25c8.284 0 15-6.716 15-15v-48.07l33.251-23.376a39.988 39.988 0 0016.989-32.71V258.539l47.392-131.346c6.057-16.791-2.643-35.313-19.434-41.372z"
                  transform="matrix(.07422 0 0 .07422 6.5 0)"
                ></path>
                <g>
                  <path
                    d="M453.798 78.767c-20.657-7.454-43.522 3.288-50.973 23.942l-16.525 45.8 11.518-58.453c4.245-21.542-9.827-42.523-31.37-46.769-21.557-4.249-42.522 9.829-46.768 31.37l-18.17 92.203V39.821C301.51 17.864 283.647 0 261.69 0s-39.821 17.863-39.821 39.82v142.595l-24.24-108.359c-4.793-21.426-26.119-34.96-47.554-30.168-21.427 4.793-34.96 26.126-30.167 47.554l5.423 24.239a7.497 7.497 0 008.957 5.682 7.5 7.5 0 005.682-8.956l-5.423-24.239c-2.987-13.356 5.447-26.653 18.803-29.64 13.357-2.99 26.653 5.448 29.641 18.803l39.06 174.603a7.5 7.5 0 0014.82-1.638V39.82c0-13.686 11.135-24.82 24.821-24.82 13.686 0 24.82 11.135 24.82 24.821v203.89c0 3.86 2.93 7.09 6.772 7.464a7.498 7.498 0 008.087-6.014l33.028-167.603c2.646-13.427 15.724-22.199 29.151-19.554 13.428 2.647 22.2 15.724 19.554 29.151l-30.6 155.276a7.5 7.5 0 0014.413 3.996l50.02-138.628c4.647-12.874 18.901-19.568 31.772-14.923 12.874 4.645 19.568 18.897 14.924 31.771l-47.392 131.346a7.488 7.488 0 00-.445 2.545l-.001 65.823a7.5 7.5 0 0015 0l.001-64.511 46.946-130.113c7.45-20.653-3.29-43.519-23.944-50.97zM423.292 349.553a7.5 7.5 0 00-7.5 7.5v28.292a32.514 32.514 0 01-13.802 26.574l-33.251 23.376a7.501 7.501 0 00-3.187 6.136v48.07c0 4.136-3.364 7.5-7.5 7.5H202.357c-4.136 0-7.5-3.364-7.5-7.5v-74.467a7.501 7.501 0 00-3.556-6.379l-50.65-31.318a7.498 7.498 0 00-10.323 2.435 7.498 7.498 0 002.435 10.323l47.095 29.12V489.5c0 12.407 10.094 22.5 22.5 22.5h155.696c12.406 0 22.5-10.093 22.5-22.5v-44.175l30.065-21.135a47.534 47.534 0 0020.175-38.845v-28.292a7.503 7.503 0 00-7.502-7.5z"
                    transform="matrix(.07422 0 0 .07422 6.5 0)"
                  ></path>
                  <path
                    d="M112.847 360.145l-61.721-38.163a9.612 9.612 0 01-3.864-10.578c2.034-7.254 6.854-13.126 13.572-16.534 6.718-3.409 14.304-3.83 21.284-1.216l70.529 27.279a20.762 20.762 0 008.874 1.374c.364.024.733.031 1.108.002.585-.046 58.704-4.245 87.405 33.531a7.489 7.489 0 005.978 2.963 7.5 7.5 0 005.966-12.037c-22.84-30.063-59.81-37.563-82.015-39.217.932-3.15 1.105-6.54.425-9.949l-8.306-41.627c-.012-.057-.023-.114-.036-.17l-24.942-111.497a7.5 7.5 0 00-14.639 3.274l24.924 111.414 8.288 41.541c.594 2.975-1.141 4.809-1.914 5.458-.772.65-2.874 2.044-5.705.951l-70.604-27.307a41.695 41.695 0 00-33.407 1.857 41.702 41.702 0 00-21.229 25.86 24.574 24.574 0 0010.098 27.184c.067.044.136.088.204.13l61.838 38.235a7.495 7.495 0 0010.324-2.435 7.5 7.5 0 00-2.435-10.323z"
                    transform="matrix(.07422 0 0 .07422 6.5 0)"
                  ></path>
                </g>
              </svg>
            </h1>

            <h3 className="home__subtitle">{homeList.subtitle}</h3>

            <p className="home__description">{homeList.description}</p>

            <a href="#contact" className="button button--flex">
              Say Hello
              <svg xmlns="http://www.w3.org/2000/svg" width="33" height="46">
                <defs>
                  <linearGradient
                    id="1"
                    x1="468.533"
                    x2="977.65"
                    y1="1641.865"
                    y2="728.687"
                  >
                    <stop offset="0%" stopColor="#FFF"></stop>
                    <stop offset="100%" stopColor="#F2F2F2"></stop>
                  </linearGradient>
                </defs>
                <path
                  fill="var(--title-color)"
                  d="M-2522.857 465.22l285.714 294.285 352.857 72.857-127.143-351.428-511.428-15.715z"
                  transform="scale(.20122 .19913) scale(.22043 .21958) matrix(-1 0 0 1 -3000 -360) translate(-82.857 -80) rotate(15.159 -2397.205 2960.712) matrix(.62826 0 0 .62826 -2917.652 923.952) scale(-1 1) rotate(15.159 -714.674 13701.92)"
                ></path>
                <path
                  fill="var(--title-color)"
                  d="M-1840 292.362l560 280 80 240-160-160-480-360z"
                  transform="scale(.20122 .19913) scale(.22043 .21958) matrix(-1 0 0 1 -3000 -360) translate(-82.857 -80) rotate(15.159 -2397.205 2960.712) matrix(.62826 0 0 .62826 -2917.652 923.952)"
                ></path>
                <path
                  fill="#FFFFFF"
                  d="M-1200 812.362l-280-200 120 40 160 160z"
                  transform="scale(.20122 .19913) scale(.22043 .21958) matrix(-1 0 0 1 -3000 -360) translate(-82.857 -80) rotate(15.159 -2397.205 2960.712) matrix(.62826 0 0 .62826 -2917.652 923.952)"
                ></path>
                <path
                  fill="#FFFFFF"
                  d="M-1840 292.362l320 680 160-320-480-360zM-1280 572.362l280-120-840-160 560 280z"
                  transform="scale(.20122 .19913) scale(.22043 .21958) matrix(-1 0 0 1 -3000 -360) translate(-82.857 -80) rotate(15.159 -2397.205 2960.712) matrix(.62826 0 0 .62826 -2917.652 923.952)"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        {/* <div className="home__scroll">
          <a href="#about" className="home__sroll-button button--flex">
            <svg
              className="wheel"
              xmlns="http://www.w3.org/2000/svg" width="31" height="23">
              <path
                fill="var(--title-color)"
                stroke="fff"
                strokeLinecap="square"
                strokeWidth="2"
                d="M167 245.36l-15 30-15-30 15 10 15-10h0z"
                transform="translate(4) scale(.71875) translate(-136 -244.36)"
              ></path>
            </svg>
            <span className="home__scroll-name">Scroll Down</span>
          </a>
            </div> */}
      </div>
    </section>
  );
};

export default Home;
