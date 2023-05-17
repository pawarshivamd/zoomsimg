import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import './App.css';
import ReactImageMagnify from 'react-image-magnify';
import catImgeUrl from "./img/10.jpg";

const imgs = [
  "./img/1.webp",
"./img/2.jpg",
"./img/2.jpg",
"./img/4.jpg",
"./img/5.webp",
"./img/6.webp",
"./img/7.jpg",
"./img/8.jpg",
"./img/9.jpg",
]

function App() {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-lg-6">
        <div>
        <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "Wristwatch by Ted Baker London",
                    isFluidWidth: true,
                    src: catImgeUrl,
                  },
                  largeImage: {
                    src: catImgeUrl,
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
            modules={[Pagination , Navigation ]}
            className="mySwiper"
          >
            <SwiperSlide><div className="img-box"><img src={require('./img/1.webp')} alt="" /></div> </SwiperSlide>
            <SwiperSlide><div className="img-box"><img src={require("./img/1.webp")} alt="" /></div> </SwiperSlide>
            <SwiperSlide><div className="img-box"><img src={require("./img/1.webp")} alt="" /></div> </SwiperSlide>
            <SwiperSlide><div className="img-box"><img src={require("./img/1.webp")} alt="" /></div> </SwiperSlide>
            <SwiperSlide><div className="img-box"><img src={require("./img/1.webp")} alt="" /></div> </SwiperSlide>
            <SwiperSlide><div className="img-box"><img src={require("./img/1.webp")} alt="" /></div> </SwiperSlide>
            <SwiperSlide><div className="img-box"><img src={require("./img/1.webp")} alt="" /></div> </SwiperSlide>
            <SwiperSlide><div className="img-box"><img src={require("./img/1.webp")} alt="" /></div> </SwiperSlide>
            <SwiperSlide><div className="img-box"><img src={require("./img/1.webp")} alt="" /></div> </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
