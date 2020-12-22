import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { UserContext } from "../store/getData";

const Services = () => {
  const { user, loading } = React.useContext(UserContext);
  React.useEffect(() => {
    if (!loading) {
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
      tl.from(h2, { scale: 1 }).from(offers, { y: -20, stagger: 0.5 }).from(".moreInformation", { y: -10 });
    }
  }, [loading]);
  return (
    <section id="services">
      <h2>Usługi</h2>
      <div className="offer">
        {!loading &&
          user.servicesDesc.map(({ text, id }) => (
            <ul key={id}>
              <li>
                <span>
                  <i className="fas fa-check" />
                </span>{" "}
                {text}
              </li>
            </ul>
          ))}
        <span className="moreInformation">Jeśli tak, pomogę Ci zaistnieć w sieci...</span>
      </div>
    </section>
  );
};
export default Services;
