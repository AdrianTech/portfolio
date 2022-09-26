import React, { useContext } from "react";
import { Context } from "../store/context";
import { ReactComponent as Logo } from "../images/LOGO_LIGHT.svg";
import gsap from "gsap";

const Showcase = () => {
  const { handleBtnStart, changeNav, isClicked, moveNavbar, navigation } = useContext(Context);
  let navBehavior = "desktop";
  React.useEffect(() => {
    gsap.to(".disappear", { autoAlpha: 0, duration: 1, xPercent: -200, delay: 7 });
  }, []);
  if (moveNavbar) navBehavior += " showNavbar";
  return (
    <div id="showcase">
      <header className={navBehavior}>
        <div className="image">
          <Logo onClick={() => navigation("showcase")} />
        </div>
        <nav>
          <span onClick={() => navigation("about")}>O mnie</span>
          <span onClick={() => navigation("technologies")}>Technologie</span>
          <span onClick={() => navigation("services")}>Usługi</span>
          <span onClick={() => navigation("contact")}>Kontakt</span>
        </nav>
      </header>
      <div className="bg-shadow" />
      <div className="welcome-showcase">
        <h4 className="fromTop">Witam na AdrianTech</h4>
        <h1 className="fromTop">Web development</h1>
        <button onClick={handleBtnStart} className="start">
          Poznaj mnie
        </button>
      </div>
      <div className="ham">
        <i onClick={changeNav} className={isClicked ? "fas fa-times" : "fas fa-bars"} />
      </div>
    </div>
  );
};

export default Showcase;
