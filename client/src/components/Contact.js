import React, { useContext, useState } from "react";
import { Context } from "../context";

const Contact = () => {
  const { message, handleSubmit, handleForm, info } = useContext(Context);
  const [isVisible, showPhoneNumber] = useState(false);
  let infoStyle = "showInfo";
  if (info.response) infoStyle += " resultOk";
  else if (info.response === false) infoStyle += " resultFalse";
  return (
    <>
      <section id="contact">
        <h2>
          <span /> Kontakt
        </h2>
        <div className="contact-with-me">
          {!isVisible && <span onClick={() => showPhoneNumber(true)}>Kliknij, by zobaczyć dane kontaktowe</span>}
          {isVisible && (
            <>
              <i className="fas fa-mobile-alt" /> +48 795 883 411 <br></br> <i class="far fa-envelope"></i> dev@adriantech.eu
            </>
          )}
        </div>
        <h4>Lub wyślij wiadomość</h4>
        <form onSubmit={handleSubmit}>
          <label>Wiadomość</label>
          <textarea name="message" value={message} onChange={handleForm} placeholder="Wpisz swoją wiadomość..." />
          {info.txt && (
            <div className={infoStyle}>
              <p>{info.txt}</p>
            </div>
          )}
          <button disabled={typeof info.response === "boolean"} className="form-btn">
            Wyślij
          </button>
        </form>
      </section>
    </>
  );
};
export default Contact;