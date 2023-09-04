import React from "react";

const Contact = () => {
  return (
    <>
      <section id="contact">
        <h2>
          <span /> Kontakt
        </h2>
        <div className="contact-with-me">
          <div className="contact-type">
            <i className="fas fa-mobile-alt"></i>
            <a href="tel:+48579066723">579 066 723</a>
          </div>
          <div className="contact-type">
            <i className="far fa-envelope"></i>
            <a href="mailto:adriantech85@gmail.com">adriantech85@gmail.com</a>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
