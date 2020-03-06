import React from "react";
import styles from "./Dotshead.module.css";

const Dotshead = () => {
  return (
    <div className={styles.dotshead}>
      <div className="slider-dots__item">
        <div className="dots-box">
          <div className="dots-box__number">01</div>
          <div className="dots-box__name">North Shore</div>
        </div>
      </div>
      <div className="slider-dots__item">
        <div className="dots-box">
          <div className="dots-box__number">02</div>
          <div className="dots-box__name">South Shore</div>
        </div>
      </div>
      <div className="slider-dots__item">
        <div className="dots-box">
          <div className="dots-box__number">03</div>
          <div className="dots-box__name">West Shore</div>
        </div>
      </div>
      <div className="slider-dots__item">
        <div className="dots-box">
          <div className="dots-box__number">04</div>
          <div className="dots-box__name">East Shore</div>
        </div>
      </div>
    </div>
  );
};

export default Dotshead;
