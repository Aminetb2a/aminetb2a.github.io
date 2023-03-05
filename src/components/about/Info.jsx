import React from "react";

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i class="bx bx-award about__icon"></i>
                <span className="about__title">Experience</span>
                <span className="about__subtitle">2+ Years Working</span>
            </div>
            <div className="about__box">
                <i class="bx bx-briefcase-alt about__icon"></i>
                <span className="about__title">Completed</span>
                <span className="about__subtitle">2+ Years Working</span>
            </div>
            <div className="about__box">
                <i class="bx bx-support about__icon"></i>
                <span className="about__title">Support</span>
                <span className="about__subtitle">Online 24/7</span>
            </div>
        </div>
    )
}

export default Info