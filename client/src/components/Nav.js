import React, { useContext } from "react";
import { Context } from "../store/context";
import logo from "../images/short-logo.png";

const Nav = () => {
  const { changeNav, isClicked, navigation } = useContext(Context);
  const style = {
    opacity: "1",
  };
  const navBar = {
    transform: "translate3d(0,0,0)",
  };
  let anim = "";
  if (isClicked) {
    anim += "animated slideInLeft";
  }

  return (
    <>
      <header className="mobile-header" style={isClicked ? navBar : null}>
        <nav onClick={changeNav}>
          <div className="image-mobile">
            <img src={logo} alt="author" />
          </div>
          <ul style={isClicked ? style : null} className={anim}>
            <li onClick={() => navigation("showcase")}>Home</li>
            <li onClick={() => navigation("about")}>O mnie</li>
            <li onClick={() => navigation("projects")}>Projekty</li>
            <li onClick={() => navigation("services")}>Usługi</li>
            <li onClick={() => navigation("contact")}>Kontakt</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Nav;
