import React, { Component } from "react";
import styles from "./Slider.module.css";
import arrowsRight from "../../../img/arrows-right.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bgSlider1 from "../../../img/header-bg.jpg";
import bgSlider2 from "../../../img/slider-bg-2.jpg";
import bgSlider3 from "../../../img/slider-bg-3.jpg";
import bgSlider4 from "../../../img/slider-bg-4.jpg";
// import Dotshead from "../SliderDot/Dotshead";

const photos = [
  {
    id: 1,
    name: 'Photo 1',
    url: bgSlider1,
    background: 'url("../../../img/header-bg.jpg")',
    title: 'North Shore',
    subtitle: 'Surf'
  },
  {
    id: 2,
    name: 'Photo 2',
    url: bgSlider2,
    background: `url(${bgSlider2})`,
    title: 'South Shore',
    subtitle: 'Surf'
  },
  {
    id: 3,
    name: 'Photo 3',
    url: bgSlider3,
    background: `url(${bgSlider3})`,
    title: 'West Shore',
    subtitle: 'Surf'
  },
  {
    id: 4,
    name: 'Photo 4',
    url: bgSlider4,
    background: `url(${bgSlider4})`,
    title: 'East Shore',
    subtitle: 'Surf'
  }
]

class Carousel extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrows: true,
      slidesToScroll: 1,
      className: "slides"
    };
    return (
      <div className={styles.slider}>
        <Slider {...settings}>
          {photos.map(photo => {
            return (
              <div className={`${styles.item}`} key={photo.id}>
                <div className={styles.info}>               
                  <div className={`${styles.subtitle} headline-left`}>{photo.subtitle}</div>
                  <div className={styles.title}>{photo.title}</div>
                  <div className={`${styles.subtext}`}>
                    Condition
                  </div>
                  <div className={styles.text}>Radical</div>
                  <a className={styles.link} href="/#">
                    <img src={arrowsRight} alt="#" />
                  </a>                                   
                </div>
                <img width="100%" src={photo.url} alt={photo.name}/>                
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default Carousel;
