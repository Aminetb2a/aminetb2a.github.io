import React from "react";

const Languages = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Languages</h3>
            <div className="skills__box">
                <div className="skills__group">

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Amazigh</h3>
                            <span className="skills__level">Native</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">English</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Turkish</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
                <div className="skills__group">

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Arabic</h3>
                            <span className="skills__level">Native</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">French</h3>
                            <span className="skills__level">Advanced</span>
                        </div>
                    </div>

                    {/* <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">CSS</h3>
                            <span className="skills__level">Basic</span>
                        </div>                                
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Languages