import React from "react";

const Header = () => {
    return (
        <div>
            <header className="header">
                <div className="header-title">Go Surf</div>
                <div className="header__arrows animated fadeInDown delay-2s slow infinite">
                    <a href="#">
                        <img src="img/arrows-down.svg" alt="Arrow Down" />
                    </a>
                </div>
                <div className="header__map"></div>
                <div className="header-aside">
                    <div className="logo">
                        <a href="#">
                            <img src="img/logo.svg" alt="Logo" />
                        </a>
                    </div>
                </div>
                <div className="header__slider"></div>
                <div className="slider-dotshead"></div>
            </header>
        </div>
    );
};

export default Header;
