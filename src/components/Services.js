import React from "react";
import "../Styles/Services.scss";

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
                  Jesteś organizacją pozarządową, klubem sportowym lub inną instytucją?
               </li>
            </ul>
            <h2>Możesz ją mieć już za 400 zł</h2>
            <span className="moreInformation">Aby poznać konkrety oferty, skontaktuj się z mną...</span>
         </div>
      </section>
   );
};
export default Services;
