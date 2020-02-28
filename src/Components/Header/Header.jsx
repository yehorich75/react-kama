import React from "react";
import classes from './Header.module.css';

import Arrows from '../../img/arrows-down.svg';
import { ReactComponent as Map } from './Map.svg';
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import Aside from './Aside/Aside';


const Header = () => {
    return (
        <div>
            <header className={classes.header}>
                <div className={classes.title}>Go Surf</div>
                <div className={`${classes.arrows} animated fadeInDown delay-2s slow infinite`}>
                    <a href="#">
                        <img src={Arrows} alt="Arrow Down" />
                    </a>
                </div>
                <div className={classes.map}>
                    <Map />
                </div>
                <Aside />
                <Slider />
                <div className={classes.slider}>
                    <div class={`${classes.item} slider-item`}>

                    </div>
                </div>
                <div className="slider-dotshead"></div>
            </header>
        </div>
    );
};

export default Header;
