import React, {useState} from "react";
import "./integration.css";
import {Data} from "./Data"
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Integration = () => {

    const [toggleState, setToogleState] = useState(0);
    const toggleTab = (index) => {
        console.log("toggleTab idex.." + index);
        setToogleState(index)
    }
    return (
        <section className="integration section">
            <h2 className="section__title">Integrations</h2>
            <span className="section__subtitle">Third party applications I integrated</span>

            <Swiper className="integration__container container grid"
                // loop={true}
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
                        <SwiperSlide className="integration__content" key={id}>
                            <i className={`uil  ${icon} integration__icon`}></i>
                            <h3 className={"integration__title"}>{title}</h3>
                            <p className="integration__description" style={{whiteSpace: "pre-wrap"}}>{description}</p>
                            <span className="integration__button" onClick={() => toggleTab(id)}>
                            View More
                            <i className="uil uil-arrow-right 
                            integration__button-icon "></i>
                        </span>

                            <div
                                className={toggleState === id ? "integration__modal active-modal" : "integration__modal"}>
                                <div className="integration__modal-content">
                                    <i onClick={() => toggleTab(0)}
                                       className="uil uil-times integration__modal-close"></i>
                                    <h3 className="integration__modal-title">{title}</h3>
                                    <p className="integration__modal-description" style={{whiteSpace: "pre-wrap"}}>
                                        {info}
                                    </p>

                                    <ul className="integration__modal-services grid">
                                        <li className="integration__modal-service">
                                            <i className="uil uil-check-circle integration__modal-icon"></i>
                                            <p className="integration__modal-info">{info1}</p>
                                        </li>
                                        <li className="integration__modal-service">
                                            <i className="uil uil-check-circle integration__modal-icon"></i>
                                            <p className="integration__modal-info">{info2}</p>
                                        </li>
                                        <li className="integration__modal-service">
                                            <i className="uil uil-check-circle integration__modal-icon"></i>
                                            <p className="integration__modal-info">{info3}</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    )
}

export default Integration