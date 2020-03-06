import React from "react";
import styles from "./Header.module.css";

import Arrows from "../../img/arrows-down.svg";
import Map from './Map/Map';
import SimpleSlider from './Slider/Slider';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Aside from "./Aside/Aside";
import Dotshead from "./SliderDot/Dotshead";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.title}>Go Surf</div>
      <div className={`${styles.arrows} animated fadeInDown delay-2s slow infinite`}>
        <a href="#">
          <img src={Arrows} alt="Arrow Down" />
        </a>
      </div>
      <Map />
      <Aside />
      <SimpleSlider />
      <Dotshead />
    </header>
  );
};

export default Header;
