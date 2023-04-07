import React from 'react'
import "./testimonial.css"
// Import Swiper React Components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
// import db from '../../firebase';
import { DataContext } from '../../dataUseContext'


const Testimonials = () => {

  const dataContext = React.useContext(DataContext);
  const testimonialList = dataContext[5].data.data;

  
  // Very Important Don't Delete this code below 
  // useEffect(() => {
  //  db.collection("portfolio").doc("testimonials").get().then((snapshot) => {
  //       if(snapshot){
  //           setList(

  //               snapshot.get("data")

  //           )
  //       }
  //   })

  // }, []);

  return (
    <section className="testimonial container section" id="testimonials">
      <h2 className="section__title">Testimonials</h2>
      <span className="section__subtitle">What They Say</span>

      <Swiper className="testimonial__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,

          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
          1034: {
            slidesPerView: 2,
            spaceBetween: 24,
          },

        }}
        modules={[Pagination]}

      >

        {testimonialList?.map((e) => (
          <SwiperSlide className="testimonial__card" key={e.id}>
            <img src={e.image} alt=""
              className="testimonial__img" />

            <h3 className="testimonial__name">{e.title}</h3>
            <p className="testimonial__description">{e.description}</p>

          </SwiperSlide>
        ))}

      </Swiper>
    </section>
  )
}

export default Testimonials
