import React from 'react';
import styles from './Surf.module.css';

const Surf = () => {
    return (
      <section className={styles.surf}>
        <div className={styles.title}>
          <span>Surf
            <h3>Surf</h3>
          </span>
        </div>
        <div className={styles.surfSubtitle}>
          <div className={styles.subtitle}>
            <div className="headline-left">Current location</div>
            <div className={styles.head}>California 
              <span>| USA</span>
            </div>
          </div>
        </div>
        <div className={styles.sliderMap}>
          <div className={`${styles.sliderDots} slider-dots--1`}>
            <div className={styles.dotsCircle}></div>
            <div className={styles.dotsContent}>
              <div className="dots-content__row">
                <div className="dots-content__head">
                  <div className="dots-content__title">Airlie Beach</div>
                  <div className="dots-content__subtitle">Australia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  export default Surf;