import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Services = () => {
  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const offers = document.querySelectorAll(".offer ul li");
    const h2 = document.querySelector("#services h2");
    const tl = gsap.timeline({
      defaults: { duration: 0.7, autoAlpha: 0 },
      scrollTrigger: {
        trigger: "#services",
        start: "top top+=300px",
      },
    });
    tl.from(h2, { scale: 0 }).from(offers, { y: -20, stagger: 0.5 }).from(".moreInformation", { y: -10 });
  }, []);
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
            Masz pomysł na biznes - chcesz sprzedawać towar, ale nie masz sklepu?
          </li>
          <li>
            {" "}
            <span>
              <i className="fas fa-check" />
            </span>{" "}
            Chcesz stworzyć i uzupełnić bazę danych?
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
