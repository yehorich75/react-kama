import React from "react";
import styles from "./DotsHead.module.css";

const DotsHead = () => {
  return (
    <div className={styles.dotshead}>
      <div className="slider-dots__item">
        <div className={styles.box}>
          <div className={styles.number}>01</div>
          <div className={styles.name}>North Shore</div>
        </div>
      </div>
      <div className="slider-dots__item">
        <div className={styles.box}>
          <div className={styles.number}>02</div>
          <div className={styles.name}>South Shore</div>
        </div>
      </div>
      <div className="slider-dots__item">
        <div className={styles.box}>
          <div className={styles.number}>03</div>
          <div className={styles.name}>West Shore</div>
        </div>
      </div>
      <div className="slider-dots__item">
        <div className={styles.box}>
          <div className={styles.number}>04</div>
          <div className={styles.name}>East Shore</div>
        </div>
      </div>
    </div>
  );
};

export default DotsHead;
