import React, {useState} from "react";
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToogleState] = useState(1);
    const toggleTab = (index) => {
        setToogleState(index)
    }
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1
                        ? "qualification__button qualification__active button--flex"
                        : "qualification__button button--flex"}
                         onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>Education
                    </div>
                    <div className={toggleState === 2
                        ? "qualification__button qualification__active button--flex"
                        : "qualification__button button--flex"}
                         onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1
                        ? "qualification__content qualification__content-active"
                        : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Master of Science</h3>
                                <span className="qualification__subtitle">Computational Biology Antalya Bilim University - Antalya, Turkey</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">Sep 2018 - Sep 2020</i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Bachelor of Engineering</h3>
                                <span className="qualification__subtitle">Computer Engineering Antalya Bilim University - Antalya, Turkey</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">Sep 2013 - Jan 2018</i>
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Bachelor of Science</h3>
                                <span className="qualification__subtitle">Science and Technology USTHB - Algiers, Algeria</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">Sep 2012 - Jun 2013</i>
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2
                        ? "qualification__content qualification__content-active"
                        : "qualification__content"}>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Backend Developer</h3>
                                <span className="qualification__subtitle">Hotech - Antalya, Turkey</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">Jan 2021 - Present</i>
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Frontend Developer</h3>
                                <span className="qualification__subtitle">Freelance</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">Feb 2019 - Jan 2021</i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Research Assistant</h3>
                                <span className="qualification__subtitle">Antalya Bilim University - Turkey</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">Sep 2018 - Sep 2020</i>
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Frontend Developer</h3>
                                <span className="qualification__subtitle">Hotech - Antalya, Turkey</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt">Jul 2018 - Sep 2018</i>
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification