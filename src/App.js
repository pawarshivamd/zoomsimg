import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import './App.css';
import ReactImageMagnify from 'react-image-magnify';

import car1 from "./img/1.webp"
import car2 from "./img/2.jpg"
import car3 from "./img/31.jpg"
import car4 from "./img/4.jpg"
import car5 from "./img/5.webp"
import car6 from "./img/6.webp"
import car7 from "./img/7.jpg"
import car8 from "./img/8.jpg"
import car9 from "./img/9.jpg"


// import catImgeUrl from "./img/10.jpg";




function App() {
  const [activeImage, setActiveImage] = useState(car1);
  return (
    <div className='container'>
      <div className="row">
        <div className="col-lg-6">
          <div className="zoom-img-box">
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  src: activeImage,
                },
                largeImage: {
                  src: activeImage,
                  width: 1500,
                  height: 1500,
                },
              }}
            />
          </div>
          <div className="downsection">
            <Swiper
              slidesPerView={5}
              spaceBetween={20}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide onClick={() => setActiveImage(car1)}><div className="img-box"><img src={car1} alt="" /></div> </SwiperSlide>
              <SwiperSlide onClick={() => setActiveImage(car2)}><div className="img-box"><img src={car2} alt="" /></div> </SwiperSlide>
              <SwiperSlide onClick={() => setActiveImage(car3)}><div className="img-box"><img src={car3} alt="" /></div> </SwiperSlide>
              <SwiperSlide onClick={() => setActiveImage(car4)}><div className="img-box"><img src={car4} alt="" /></div> </SwiperSlide>
              <SwiperSlide onClick={() => setActiveImage(car5)}><div className="img-box"><img src={car5} alt="" /></div> </SwiperSlide>
              <SwiperSlide onClick={() => setActiveImage(car6)}><div className="img-box"><img src={car6} alt="" /></div> </SwiperSlide>
              <SwiperSlide onClick={() => setActiveImage(car7)}><div className="img-box"><img src={car7} alt="" /></div> </SwiperSlide>
              <SwiperSlide onClick={() => setActiveImage(car8)}><div className="img-box"><img src={car8} alt="" /></div> </SwiperSlide>
              <SwiperSlide onClick={() => setActiveImage(car9)}><div className="img-box"><img src={car9} alt="" /></div> </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
