import React from "react";
import styles from "./Slider.module.css";
import arrowsRight from "../../../img/arrows-right.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div className={styles.slider}>
          <div className={`${styles.item} header__slider-item`}>
            <div className={styles.info}>
              <div className={`${styles.subtitle} headline-left`}>Surf</div>
              <div className={styles.title}>North Shore</div>
              <div className={`${styles.subtext} headline-left`}>
                Condition
              </div>
              <div className={styles.text}>Radical</div>
              <a className={styles.link} href="#">
                <img src={arrowsRight} alt="#" />
              </a>
            </div>
          </div>
          <div className={`${styles.item} header__slider-item`}>
            <div className={styles.info}>
              <div className={`${styles.subtitle} headline-left`}>Surf</div>
              <div className={styles.title}>South Shore</div>
              <div className={`${styles.subtext} headline-left`}>
                Condition
              </div>
              <div className={styles.text}>Radical</div>
              <a className={styles.link} href="#">
                <img src={arrowsRight} alt="#" />
              </a>
            </div>
          </div>
          <div className={`${styles.item} header__slider-item`}>
            <div className={styles.info}>
              <div className={`${styles.subtitle} headline-left`}>Surf</div>
              <div className={styles.title}>West Shore</div>
              <div className={`${styles.subtext} headline-left`}>
                Condition
              </div>
              <div className={styles.text}>Radical</div>
              <a className={styles.link} href="#">
                <img src={arrowsRight} alt="#" />
              </a>
            </div>
          </div>
          <div className={`${styles.item} header__slider-item`}>
            <div className={styles.info}>
              <div className={`${styles.subtitle} headline-left`}>Surf</div>
              <div className={styles.title}>East Shore</div>
              <div className={`${styles.subtext} headline-left`}>
                Condition
              </div>
              <div className={styles.text}>Radical</div>
              <a className={styles.link} href="#">
                <img src={arrowsRight} alt="#" />
              </a>
            </div>
          </div>
        </div>
      </Slider>
    );
  }
}

// $(function(){

//   $('.slick-slider').slick({
//       infinite: true,
//       speed: 1000,
//       fade: true,
//       cssEase: 'linear',
//       prevArrow: '<img class="slider-arrows slider-arrows__left" src="img/arrows-left.svg" alt="Arrow Left"></img>',
//       nextArrow: '<img class="slider-arrows slider-arrows__right" src="img/arrows-right.svg" alt="Arrow Right"></img>',
//       asNavFor: '.Dotshead_dotshead__htc9c'
//   });

//   $('.Dotshead_dotshead__htc9c').slick({
//       slidesToShow: 4,
//       slidesToScroll: 4,
//       asNavFor: '.slick-slider',
//       dots: true,
//       // centerMode: true,
//       focusOnSelect: true
//   });
// });

export default SimpleSlider;
