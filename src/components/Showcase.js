import React, { useContext } from "react";
import "../Styles/Showcase.scss";
import "../Styles/Navigation.scss";
import { Context } from "../context";

const Showcase = () => {
   const { handleBtnStart, changeNav, isClicked } = useContext(Context);
   return (
      <div id="showcase">
         <div className="bg-shadow" />
         <div className="welcome-showcase">
            <h4>Witam na AdrianTech</h4>
            <h1>Web development</h1>
            <button onClick={handleBtnStart} className="start">
               Poznaj mnie
            </button>
         </div>
         <div className="animated shake ham">
            <i onClick={changeNav} className={isClicked ? "fas fa-times" : "fas fa-bars"} />
         </div>
      </div>
   );
};

export default Showcase;
// onClick={handleBtnStart}
/* 
{isClicked ? null : <Typing className='typing' speed={200} loop={1}>
   <h1>Hello, Everyone.</h1>
   <Typing.Backspace count={20} />
   <h1>I'm self-taugh developer. What can I help you?</h1>
   <Typing.Reset delay={500} />
   </Typing>}
*/
