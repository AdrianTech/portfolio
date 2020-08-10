import React, { useContext } from "react";
import { Context } from "../context";
import me from "../images/me.jpg";
import gsap from "gsap";

const Showcase = () => {
  const { handleBtnStart, changeNav, isClicked, moveNavbar, navigation } = useContext(Context);
  let navBehavior = "desktop";
  React.useEffect(() => {
    let tl = gsap.timeline({ defaults: { duration: 0.9 } });
    tl.from(".fromTop", { y: -50, stagger: 0.5, autoAlpha: 0, delay: 1 }).from(".start", { scale: 0 }, "-=0.5");
  }, []);
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
          <span onClick={() => navigation("showcase")}>Home</span>
          <span onClick={() => navigation("about")}>O mnie</span>
          <span onClick={() => navigation("projects")}>Projekty</span>
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
