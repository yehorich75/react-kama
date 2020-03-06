import React from "react";
import classes from "./Slider.module.css";
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
        <div className={classes.slider}>
          <div className={`${classes.item} header__slider-item`}>
            <div className={classes.info}>
              <div className={`${classes.subtitle} headline-left`}>Surf</div>
              <div className={classes.title}>North Shore</div>
              <div className={`${classes.subtext} headline-left`}>
                Condition
              </div>
              <div className={classes.text}>Radical</div>
              <a className={classes.link} href="#">
                <img src={arrowsRight} alt="#" />
              </a>
            </div>
          </div>
          <div className={`${classes.item} header__slider-item`}>
            <div className={classes.info}>
              <div className={`${classes.subtitle} headline-left`}>Surf</div>
              <div className={classes.title}>South Shore</div>
              <div className={`${classes.subtext} headline-left`}>
                Condition
              </div>
              <div className={classes.text}>Radical</div>
              <a className={classes.link} href="#">
                <img src={arrowsRight} alt="#" />
              </a>
            </div>
          </div>
          <div className={`${classes.item} header__slider-item`}>
            <div className={classes.info}>
              <div className={`${classes.subtitle} headline-left`}>Surf</div>
              <div className={classes.title}>West Shore</div>
              <div className={`${classes.subtext} headline-left`}>
                Condition
              </div>
              <div className={classes.text}>Radical</div>
              <a className={classes.link} href="#">
                <img src={arrowsRight} alt="#" />
              </a>
            </div>
          </div>
          <div className={`${classes.item} header__slider-item`}>
            <div className={classes.info}>
              <div className={`${classes.subtitle} headline-left`}>Surf</div>
              <div className={classes.title}>East Shore</div>
              <div className={`${classes.subtext} headline-left`}>
                Condition
              </div>
              <div className={classes.text}>Radical</div>
              <a className={classes.link} href="#">
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
