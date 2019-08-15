import React, { useContext, useState } from "react";
import "../Styles/Contact.scss";
import { Context } from "../context";

const Contact = () => {
   const { message, name, getContact, handleSubmit, handleForm, info } = useContext(Context);
   const [isVisible, showPhoneNumber] = useState(false);
   let infoStyle = "showInfo";
   if (info.request) infoStyle += " resultOk";
   else if (info.request === false) infoStyle += " resultFalse";
   return (
      <>
         <section id="contact">
            <h2>
               <span /> Kontakt
            </h2>
            <div className="contact-with-me">
               <i class="fas fa-mobile-alt" />
               {isVisible ? "795 883 411" : <span onClick={() => showPhoneNumber(true)}>Pokaż numer</span>}
            </div>
            {/* <h4>Lub wyślij wiadomość</h4> */}
            <form onSubmit={handleSubmit}>
               <label>Twoje imię</label>
               <input type="text" name="name" value={name} onChange={handleForm} />
               <label>Twój email lub numer telefonu</label>
               <input type="text" name="getContact" value={getContact} onChange={handleForm} />
               <label>Wiadomość</label>
               <textarea name="message" value={message} onChange={handleForm} />
               {info.txt && (
                  <div className={infoStyle}>
                     <p>{info.txt}</p>
                  </div>
               )}
               <button className="form-btn">Wyślij</button>
            </form>
         </section>
      </>
   );
};
export default Contact;
