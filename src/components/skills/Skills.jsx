import React from "react";
import Backend from "./Backend";
import Frontend from "./Frontend";
import Stack from "./Stack";
import Languages from "./Languages";
import "./skills.css"

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">Tools & Technologies I use</span>
            <div className="skills__container container grid">
                <Backend/>
                <Frontend/>
                <Stack/>
                <Languages/>
            </div>
        </section>
    )
}

export default Skills