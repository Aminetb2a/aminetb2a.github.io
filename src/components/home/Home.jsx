import React from "react";
import "./home.css";
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown'

const Home = () => {
    return (
        <section class="home section" id="home">
                <div class="home__container container grid">
                    <div class="home__content grid">
                        <Social/>                        

                        <div class="home__img"></div>
                        
                        <Data/>
                        
                    </div>
                    <ScrollDown/>
                    {/* <div class="home__scroll">
                        <a href="#about" class="home__scroll-button button--flex">
                            <i class="uil uil-mouse-alt home__scroll-mouse"></i>
                            <span class="home__scroll-name">Scroll Down</span>
                            <i class="uil uil-arrow-down home__scroll-arrow"></i>
                        </a>
                    </div> */}
                </div>
            </section>
    )
}

export default Home