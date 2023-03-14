import React from "react";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Ahmed Amine</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#qualification" className="footer__link">Qualification</a>
                    </li>
                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Portfolio</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://github.com/Aminetb2a" target="_blank" rel="noreferrer" class="footer__social-link">
                        <i class="bx bxl-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/aminetb2a/" target="_blank" rel="noreferrer" class="footer__social-link">
                        <i class="bx bxl-linkedin"></i>
                    </a>
                    <a href="https://instagram.com/amine_tb2a" target="_blank" rel="noreferrer" class="footer__social-link">
                        <i class="bx bxl-instagram"></i>
                    </a>                    
                </div>        

                <span className="footer__copy">
                    &#169; aminetb2a.
                    <p>All rights reserved</p>
                </span>                
            </div>
        </footer>
    )
}

export default Footer