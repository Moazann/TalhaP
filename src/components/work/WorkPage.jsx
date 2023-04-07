import React, { useState, useEffect } from "react";
import "./workpage.css";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import db from "../../firebase";
import { useParams } from "react-router-dom";


const WorkPage = () => {

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'auto',
  });

  const { id } = useParams();

  const [info, setInfo] = useState([])

  useEffect(() => {
     db.collection("projects").doc(id).get().then((snapshot) => {
      const list = snapshot.data()
      setInfo(
        list
      )
      
    }).catch((e) => console.log(e))
    
  }, [id])

  const featList = info.features

  const imageList = info.listImg



  const zoomOutProperties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true,
  };

  return (
    <>
      <div className="parent__container">
        <p className="title">Portfolio Details</p>
      </div>

      <div className="cf__container container grid">
        <div className="cf__content">
          <div className="slide-container">
            <Zoom {...zoomOutProperties}>
              {imageList?.map(( image) => (

                 <img alt="" style={{ width: "100%" }} src={image} />
                
              ))}
            </Zoom>
          </div>
        </div>

        <div className="cf__content">
          <h5>{info.name}</h5>
          <br></br>
          <p>{info.about}</p>
          <br></br>
          <h6>
            Rating: &nbsp; &nbsp;
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
            <i className="bx bxs-star"></i>
          </h6>
          <br></br>
          <h6>Website: </h6>
          <p>{info.web}</p>
          <h6>Completed: </h6>
          <p>{info.date}</p>
        </div>
      </div>

      <div className="desc__container">
        <p>{info.desc}</p>

        <h6>Features: </h6>

        {featList?.map((features) => (
          <ul>
            <li>
              - {features}
            </li>
          </ul>
        ))}
        
      </div>
    </>
  );
};

export default WorkPage;
