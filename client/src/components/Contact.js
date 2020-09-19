import React from "react";
import { Context } from "../context";

const Contact = () => {
  const { message, handleSubmit, handleForm, info, isSending } = React.useContext(Context);
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
          <i className="fas fa-mobile-alt" /> +48 579 066 723 <br></br> <i className="far fa-envelope"></i>
          <a href="mailto:dev@adriantech.eu">dev@adriantech.eu</a>
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
          <button disabled={isSending} className="form-btn">
            {isSending ? "Wysyłanie..." : "Wyślij wiadomość"}
          </button>
        </form>
      </section>
    </>
  );
};
export default Contact;
