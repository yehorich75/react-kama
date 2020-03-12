import React, { Component } from "react";
import styles from "./Slider.module.css";
import arrowsRight from "../../../img/arrows-right.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Dotshead from "../SliderDot/Dotshead";

export default class AsNavFor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    return (
      <div>
        <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
        >
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
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          <Dotshead />
        </Slider>
      </div>
    );
  }
}

// export default SimpleSlider;
