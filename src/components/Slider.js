import React from "react"
import SwiperCore, { Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import slide01 from "../img/slide01.jpg"
import slide02 from "../img/slide02.jpg"
import slide03 from "../img/slide03.jpg"
import slide04 from "../img/slide04.jpg"
import slide05 from "../img/slide05.jpg"
import slide06 from "../img/slide06.jpg"
import slide07 from "../img/slide07.jpg"
import slide08 from "../img/slide08.jpg"
import slide09 from "../img/slide09.jpg"
import { css } from "@emotion/react"
import { rgba } from "emotion-rgba"
import { mq } from "../styles/mq"
import "swiper/swiper-bundle.css"

const Slider = () => {
  SwiperCore.use([Pagination])

  return (
    <Swiper
      slidesPerView={1.2}
      spaceBetween={10}
      breakpoints={{
        769: {
          slidesPerView: 1.8,
          spaceBetween: 20,
        },
      }}
      centeredSlides={true}
      loop={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={swiper => console.log(swiper)}
      pagination={{ clickable: true }}
      speed={600}
      css={swiper}
    >
      <SwiperSlide>
        <img src={slide01} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide02} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide03} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide04} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide05} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide06} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide07} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide08} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide09} alt="" />
      </SwiperSlide>
    </Swiper>
  )
}

const swiper = css`
  position: relative;
  max-width: 144rem;
  margin: 4rem auto 0;
  ${mq("tab")} {
    margin: 4rem -6% 0;
    padding: 0 5% 2.5rem;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    height: 100%;
    width: 5rem;
    z-index: 10;

    ${mq("tab")} {
      display: none;
    }
  }

  &::before {
    left: 0;
    background-image: linear-gradient(
      90deg,
      #f6de90 0%,
      ${rgba("#f6de90", 0)} 100%
    );
  }

  &::after {
    right: 0;
    background-image: linear-gradient(
      -90deg,
      #f6de90 0%,
      ${rgba("#f6de90", 0)} 100%
    );
  }

  img {
    width: 100%;
    border: 1rem solid #fff;

    ${mq("tab")} {
      border-width: 0.6rem;
    }
  }

  .swiper-slide {
    transition: all 0.3s;
  }

  .swiper-slide-prev,
  .swiper-slide-next,
  .swiper-slide-duplicate-prev,
  .swiper-slide-duplicate-next {
    transform: scale(0.85);

    ${mq("tab")} {
      transform: scale(0.9);
    }
  }

  .swiper-pagination {
    bottom: 2.5rem;

    ${mq("tab")} {
      bottom: 0;
    }
  }

  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    opacity: 1;
    background-color: #fff;
  }

  .swiper-pagination-bullet-active {
    background-color: #ffc300;
  }
`

export default Slider
