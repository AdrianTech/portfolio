import React, { useContext } from "react";
import "../Styles/Showcase.scss";
import "../Styles/Navigation.scss";
import { Context } from "../context";
import me from "../images/me.jpg";

const Showcase = () => {
   const { handleBtnStart, changeNav, isClicked, moveNavbar } = useContext(Context);
   let navBehavior = "desktop";
   if (moveNavbar) {
      navBehavior += " showNavbar";
   }
   return (
      <div id="showcase">
         <header className={navBehavior}>
            <nav>
               <div className="image small">
                  <img src={me} alt="author" />
               </div>
               <a href="#showcase">Home</a>
               <a href="#about">O mnie</a>
               <a href="#projects">Projekty</a>
               <a href="#services">Usługi</a>
               <a href="#contact">Kontakt</a>
            </nav>
         </header>
         <div className="bg-shadow" />
         <div className="welcome-showcase">
            <h4>Witam na AdrianTech</h4>
            <h1>Web development</h1>
            <button onClick={handleBtnStart} className="start">
               Poznaj mnie
            </button>
         </div>
         <div className="ham" style={{ marginTop: moveNavbar ? "30px" : "10px" }}>
            <i onClick={changeNav} className={isClicked ? "fas fa-times" : "fas fa-bars"} />
         </div>
      </div>
   );
};

export default Showcase;
