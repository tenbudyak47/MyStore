import React, { useRef, useState } from "react";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation,EffectFade } from "swiper/modules";
import { Pagination, Navigation, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

import "./Home.css";
const Home = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="home-page">
      <div className="slider">
        <Swiper
          centeredSlides={true}
          // spaceBetween={30}
          effect={"fade"}
          // autoplay={{
          //   // delay: 2500,
          //   // disableOnInteraction: false,
          // }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          modules={[Pagination, Navigation, EffectFade]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slider-items">
              <img src="/images/slide-01.jpg" alt="" />
              <div className="slider-infor">
                <p className="slider-collection">Women Collection 2018</p>
                <h2 className="slider-title">New Season</h2>
                <div href="" className="btn-buy-now">
                  <a href="">Shop now</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-items">
              <img src="/images/slide-02.jpg" alt="" />
              <div className="slider-infor">
                <p className="slider-collection">Men New-Season</p>
                <h2 className="slider-title">Jackets & coats</h2>
                <div href="" className="btn-buy-now">
                  <a href="">Shop now</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperSlide>
              <div className="slider-items">
                <img src="/images/slide-03.jpg" alt="" />
                <div className="slider-infor">
                  <p className="slider-collection">Men Collection 2018</p>
                  <h2 className="slider-title">New Arrivals</h2>
                  <div href="" className="btn-buy-now">
                    <a href="">Shop now</a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slider-items">
              <img src="/images/slide-04.jpg" alt="" />
              <div className="slider-infor">
                <p className="slider-collection">Women New-Season</p>
                <h2 className="slider-title">Fashion women</h2>
                <div href="" className="btn-buy-now">
                  <a href="">Shop now</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div className="btn btn-prev">
            <FaAngleLeft className="prev" />
          </div>
          <div className="btn btn-next">
            <FaAngleRight className="next" />
          </div>
        </Swiper>
      </div>
      {/* end slider */}
      <div id="list-cate" className="container">
          
      </div>
      <div id="featured-products"></div>
    </div>
  );
};

export default Home;
