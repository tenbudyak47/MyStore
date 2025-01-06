import React, { useRef, useState } from "react";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation,EffectFade,FreeMode } from "swiper/modules";
// import { Pagination, Navigation, EffectFade, FreeMode } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
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
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          modules={[Autoplay,Pagination, Navigation, EffectFade]}
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
          <SwiperSlide>
            <div className="slider-items">
              <img src="/images/slide-04.jpg" alt="" />
              <div className="slider-infor">
                <p className="slider-collection">Women New-Season</p>
                <h2 className="slider-title">Fashion women</h2>
                <div href="" className="btn-buy-now">
                  <a href="#">Shop now</a>
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
      <div id="banner-section">
        <div className="container">
          <div className="row">
            <div className="item col-4 pos-relative">
              <a href="" class="thumb">
                <img src="/images/banner-01.jpg" alt="" />
              </a>
              <div className="infor pos-absolute">
                <h3 className="title">Women</h3>
                <p className="desc">Spring 2018</p>
                <div className="btn-buy-now pos-absolute">
                  <a href="">Shop now</a>
                </div>
              </div>
            </div>
            <div className="item col-4 pos-relative">
              <a href="" class="thumb">
                <img src="/images/banner-02.jpg" alt="" />
              </a>
              <div className="infor pos-absolute">
                <h3 className="title">Men</h3>
                <p className="desc">Spring 2018</p>
                <div className="btn-buy-now pos-absolute">
                  <a href="">Shop now</a>
                </div>
              </div>
            </div>
            <div className="item col-4 pos-relative">
              <a href="" class="thumb">
                <img src="/images/banner-03.jpg" alt="" />
              </a>
              <div className="infor pos-absolute">
                <h3 className="title">Accessories</h3>
                <p className="desc">New trend</p>
                <div className="btn-buy-now pos-absolute">
                  <a href="">Shop now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="featured-products">
        <div className="container">
          <h2>Store Overview</h2>
          <ul className="filter-by">
            <li>
              <a className="active" href="">
                Best Seller
              </a>
            </li>
            <li>
              <a href="">Featured</a>
            </li>
            <li>
              <a href="">Sale</a>
            </li>
            <li>
              <a href="">Top Rate</a>
            </li>
          </ul>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            freeMode={true}
            // pagination={{
            //   clickable: true,
            // }}
            modules={[FreeMode, Pagination]}
            className="mySwiper list-products"
          >
            <SwiperSlide className="item">
              <div className="thumb  pos-relative">
                <img src="/images/product-01.jpg" alt="" />
                <a href="" className="btn-quick-view pos-absolute">
                  Quick View
                </a>
              </div>
              <div className="infor">
                <a href="" className="title">
                  Esprit Ruffle Shirt
                </a>
                <p className="price">$16.64</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="thumb pos-relative">
                <img src="/images/product-02.jpg" alt="" />
                <a href="" className="btn-quick-view pos-absolute">
                  Quick View
                </a>
              </div>
              <div className="infor">
                <a href="" className="title">
                  Herschel supply
                </a>
                <p className="price">$35.31</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="thumb  pos-relative">
                <img src="/images/product-03.jpg" alt="" />
                <a href="" className="btn-quick-view pos-absolute">
                  Quick View
                </a>
              </div>
              <div className="infor">
                <a href="" className="title">
                  Only Check Trouser
                </a>
                <p className="price">$25.50</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="thumb pos-relative">
                <img src="/images/product-04.jpg" alt="" />
                <a href="" className="btn-quick-view pos-absolute">
                  Quick View
                </a>
              </div>
              <div className="infor">
                <a href="" className="title">
                  Classic Trench Coat
                </a>
                <p className="price">$75.00</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="thumb pos-relative">
                <img src="/images/product-05.jpg" alt="" />
                <a href="" className="btn-quick-view pos-absolute">
                  Quick View
                </a>
              </div>
              <div className="infor">
                <a href="" className="title">
                  Front Pocket Jumper
                </a>
                <p className="price">$34.75</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="thumb pos-relative">
                <img src="/images/product-06.jpg" alt="" />
                <a href="" className="btn-quick-view pos-absolute">
                  Quick View
                </a>
              </div>
              <div className="infor">
                <a href="" className="title">
                  Herschel supply
                </a>
                <p className="price">$35.31</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="thumb pos-relative">
                <img src="/images/product-07.jpg" alt="" />
                <a href="" className="btn-quick-view pos-absolute">
                  Quick View
                </a>
              </div>
              <div className="infor">
                <a href="" className="title">
                  Only Check Trouser
                </a>
                <p className="price">$25.50</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="item">
              <div className="thumb pos-relative">
                <img src="/images/product-08.jpg" alt="" />
                <a href="" className="btn-quick-view pos-absolute">
                  Quick View
                </a>
              </div>
              <div className="infor">
                <a href="" className="title">
                  Classic Trench Coat
                </a>
                <p className="price">$75.50</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Home;
