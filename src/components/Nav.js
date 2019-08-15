import React, { useContext } from "react";
import "../Styles/Navigation.scss";
import { Context } from "../context";
import me from "../images/me.jpg";

const Nav = () => {
   const { changeNav, showNavbar, isClicked } = useContext(Context);
   const style = {
      opacity: "1"
   };
   const navBar = {
      transform: "translate3d(0,0,0)",
      transition: "all 0.4s linear",
      opacity: "1"
   };
   const hideBar = {
      transition: "all 0.5s linear"
   };
   let anim = "";
   if (isClicked) {
      anim += "animated slideInLeft";
   }
   let showNav = "desktop";
   if (showNavbar) {
      showNav += " showNavbar";
   }

   return (
      <>
         <header className="mobile-header" style={isClicked ? navBar : hideBar}>
            <nav onClick={changeNav}>
               <div className="image">
                  <img src={me} alt="author" />
               </div>
               <ul style={isClicked ? style : null} className={anim}>
                  <li>
                     <a href="#showcase">Home</a>
                  </li>
                  <li>
                     <a href="#about">O mnie</a>
                  </li>
                  <li>
                     <a href="#projects">Projekty</a>
                  </li>
                  <li>
                     <a href="#services">Usługi</a>
                  </li>
                  <li>
                     <a href="#contact">Kontakt</a>
                  </li>
               </ul>
            </nav>
            <div className="lang" />
         </header>
         <header className={showNav}>
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
      </>
   );
};

export default Nav;
