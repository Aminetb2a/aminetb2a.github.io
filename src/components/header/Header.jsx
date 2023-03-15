import React, { useState } from "react";
import "./header.css";

const Header = () => {

    window.addEventListener("scroll", function () {
        const header = this.document.querySelector(".header");
        if(this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    })

    /* =================== Toggle Menu =================== */
    const[activeNav, setActiveNav] = useState("#home");
    const[Toogle, showMenu] = useState(false);
    
    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">
                    Ahmed Amine 
                    </a>
                <div className={Toogle ? "nav__menu show-menu" : "nav__menu"}>            
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" 
                            onClick={() => setActiveNav("#home")}
                            className={activeNav === "#home" 
                            ? "nav__link active-link"
                            : "nav__link"}>
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" 
                            onClick={() => setActiveNav("#about")}
                            className={activeNav === "#about" 
                            ? "nav__link active-link"
                            : "nav__link"}>                            
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#qualification" 
                            onClick={() => setActiveNav("#qualification")}
                            className={activeNav === "#qualification" 
                            ? "nav__link active-link"
                            : "nav__link"}>
                                <i className="uil uil-briefcase-alt nav__icon"></i> Qualification
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" 
                            onClick={() => setActiveNav("#skills")}
                            className={activeNav === "#skills" 
                            ? "nav__link active-link"
                            : "nav__link"}>
                                <i className="uil uil-file-alt nav__icon"></i> Skills
                            </a>
                        </li>                        
                        <li className="nav__item">
                            <a href="#portfolio" 
                            onClick={() => setActiveNav("#portfolio")}
                            className={activeNav === "#portfolio" 
                            ? "nav__link active-link"
                            : "nav__link"}>
                                <i className="uil uil-scenery nav__icon"></i> Portfolio                                
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" 
                            onClick={() => setActiveNav ('#contact')}
                            className={activeNav === "#contact" 
                            ? "nav__link active-link"
                            : "nav__link"}>
                                <i className="uil uil-message nav__icon"></i> Contact                               
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close" onClick={() => showMenu(!Toogle)}></i>                    
                </div> 
                <div className="nav__toggle" onClick={() => showMenu(!Toogle)}>                
                        <i className="uil uil-apps"></i>
                    </div>                  
                {/* <div class="nav__btns">                    
                    <div className="theme__toggle" onClick={() => changeTheme(!Toogle)}>
                    <i class="uil uil-moon"></i>
                    </div>
                    <div className="nav__toggle" onClick={() => showMenu(!Toogle)}>                
                        <i className="uil uil-apps"></i>
                    </div>  
                </div>            */}
            </nav>
        </header>
    )
}

export default Header