import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import portfolio from "../../img/portfolio.jpeg";
import grocery from "../../img/grocery.png";
import weather from "../../img/weather.jpg";
import movie from "../../img/movie.jpg"
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>My Recent</span>
      <span>Projects</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://weather-app-sooty-alpha.vercel.app/">
            <img src={weather} alt="weather app" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://snoopy-store.vercel.app/">
            <img src={grocery} alt="e-commerce" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://pranjal-gupta.vercel.app/">
            <img src={portfolio} alt="portfolio" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://moviesite-ten.vercel.app/login">
            <img src={movie} alt="movie site" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
