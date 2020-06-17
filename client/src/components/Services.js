import React from "react";

const Services = () => {
  return (
    <section id="services">
      <h2>Usługi</h2>
      <div className="offer">
        <ul>
          <li>
            <span>
              <i className="fas fa-check" />
            </span>{" "}
            Potrzebujesz strony internetowej dla swojej firmy?
          </li>
          <li>
            {" "}
            <span>
              <i className="fas fa-check" />
            </span>{" "}
            Jesteś artystą i pragniesz stworzyć swoją wirtualną wizytówkę?
          </li>
          <li>
            {" "}
            <span>
              <i className="fas fa-check" />
            </span>{" "}
            Twoim marzeniem jest prowadzenie popularnego bloga?
          </li>
        </ul>
        <span className="moreInformation">Jeśli tak, pomogę Ci zaistnieć w sieci...</span>
      </div>
    </section>
  );
};
export default Services;
