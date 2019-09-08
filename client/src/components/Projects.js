import React from "react";
import "../Styles/Projects.scss";
import hitWords from "../images/hit-words.png";
import oldTown from "../images/oldTown.png";
import cloudApp from "../images/cloud-app.png";

const Projects = () => (
   <section id="projects">
      <h2>Projekty</h2>
      <div className="projectsExamples">
         <div className="example">
            <a href="//oldtown.netlify.com/" target="_blank" rel="noopener noreferrer" className="thumbail">
               <img src={oldTown} alt="oldTown" />
               <div className="hover-img">
                  <i className="fas fa-eye">
                     <p>Zobacz</p>
                  </i>
               </div>
            </a>
            <div className="text">
               <h3>Old Town</h3>
               <p>Projekt aplikacji księgarni, pozwalający na przeglądanie, dodawanie i usuwanie książek z koszyka.</p>
               <a href="//github.com/AdrianTech/bookStore" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github" />
                  Zobacz kod na Github
               </a>
            </div>
         </div>
         <div className="example">
            <a href="//hit-words.netlify.com/" target="_blank" rel="noopener noreferrer" className="thumbail">
               <img src={hitWords} alt="hitWords" />
               <div className="hover-img">
                  <i className="fas fa-eye">
                     <p>Zobacz</p>
                  </i>
               </div>
            </a>
            <div className="text">
               <h3>Hit Words</h3>
               <p>Gra polegająca na wpisywaniu na czas wyświetlanego słowa w języku angielskim.</p>
               <a href="//github.com/AdrianTech/hitWords" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github" />
                  Zobacz kod na Github
               </a>
            </div>
         </div>
         <div className="example">
            <a href="//cloud-app.netlify.com/" target="_blank" rel="noopener noreferrer" className="thumbail">
               <img src={cloudApp} alt="cloudApp" />
               <div className="hover-img">
                  <i className="fas fa-eye">
                     <p>Zobacz</p>
                  </i>
               </div>
            </a>
            <div className="text">
               <h3>Cloud App</h3>
               <p>Prosta aplikacja wyświetalająca pogodę dla danego miasta.</p>
               <a href="//github.com/AdrianTech/cloud-app" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github" />
                  Zobacz kod na Github
               </a>
            </div>
         </div>
      </div>
   </section>
);

export default Projects;
