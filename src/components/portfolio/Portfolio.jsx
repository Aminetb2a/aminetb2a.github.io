import React, {useState} from "react";
import "./portfolio.css";
import {Data} from "./Data"
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Portfolio = () => {

    const [toggleState, setToogleState] = useState(0);
    const toggleTab = (index) => {
        setToogleState(index)
    }
    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section__title">Portfolio</h2>
            <span className="section__subtitle">Third party applications I integrated</span>

            <Swiper className="portfolio__container container grid"
                    grabCursor={true}
                    pagination={{clickable: true}}
                    slidesPerView={3}
                    spaceBetween={24}
                    initialSlide={1}
                    centeredSlides={true}
                    navigation={true}
                    breakpoints={{
                        576: {
                            slidesPerView: 2
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 48
                        }
                    }}
            >
                {Data.map(({id, icon, title, description, info, info1, info2, info3}) => {
                    return (
                        <SwiperSlide className="portfolio__content" key={id}>
                            <i className={`uil  ${icon} portfolio__icon`}></i>
                            <h3 className={"portfolio__title"}>{title}</h3>
                            <p className="portfolio__description" style={{whiteSpace: "pre-wrap"}}>{description}</p>
                            <span className="portfolio__button" onClick={() => toggleTab(id)}>
                            View More
                            <i className="uil uil-arrow-right 
                            portfolio__button-icon "></i>
                        </span>

                            <div
                                className={toggleState === id ? "portfolio__modal active-modal" : "portfolio__modal"}>
                                <div className="portfolio__modal-content">
                                    <i onClick={() => toggleTab(0)}
                                       className="uil uil-times portfolio__modal-close"></i>
                                    <h3 className="portfolio__modal-title">{title}</h3>
                                    <p className="portfolio__modal-description" style={{whiteSpace: "pre-wrap"}}>
                                        {info}
                                    </p>

                                    <ul className="portfolio__modal-services grid">
                                        <li className="portfolio__modal-service">
                                            <i className="uil uil-check-circle portfolio__modal-icon"></i>
                                            <p className="portfolio__modal-info">{info1}</p>
                                        </li>
                                        <li className="portfolio__modal-service">
                                            <i className="uil uil-check-circle portfolio__modal-icon"></i>
                                            <p className="portfolio__modal-info">{info2}</p>
                                        </li>
                                        <li className="portfolio__modal-service">
                                            <i className="uil uil-check-circle portfolio__modal-icon"></i>
                                            <p className="portfolio__modal-info">{info3}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            
            <span className="section__subtitle">Applications I developed</span>
            <h4 className="section__title">Coming soon...</h4>
        </section>
    )
}

export default Portfolio