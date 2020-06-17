import React, { useContext, useState } from "react";
import { Context } from "../context";

const Contact = () => {
  const { message, name, getContact, handleSubmit, handleForm, info } = useContext(Context);
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
          <i className="fas fa-mobile-alt" />
          {isVisible ? "795 883 411" : <span onClick={() => showPhoneNumber(true)}>Pokaż numer</span>}
        </div>
        <h4>Lub wyślij wiadomość</h4>
        <form onSubmit={handleSubmit}>
          <label>Twoje imię</label>
          <input type="text" name="name" value={name} onChange={handleForm} placeholder="Minimum 2 znaki" />
          <label>Kontakt</label>
          <input type="text" name="getContact" value={getContact} onChange={handleForm} placeholder="Telefon, email etc..." />
          <label>Wiadomość</label>
          <textarea name="message" value={message} onChange={handleForm} placeholder="Wysyłasz na dev@adriantech.eu" />
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
