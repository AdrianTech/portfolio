import React from "react";
import hitWords from "../images/hit-words.png";
import swapi from "../images/swapi.png";
import oldTown from "../images/oldTown.png";
import cloudApp from "../images/cloud-app.png";

const Projects = () => {
  const [hoverHeight, setHeight] = React.useState([]);
  React.useEffect(() => {
    function setHover() {
      let boxHeight = document.querySelector(".img-height").clientHeight + 10;
      let swapiHeight = document.querySelector(".swapiImg").clientHeight + 10;
      setHeight([boxHeight, swapiHeight]);
    }
    ["load", "resize"].forEach(item => window.addEventListener(item, setHover));
  }, []);

  return (
    <section id="projects">
      <h2>Projekty</h2>
      <div className="projectsExamples">
        <div className="example">
          <a href="https://bookstore01.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="thumbail">
            <img className="img-height" src={oldTown} alt="oldTown" />
            <div className="hover-img" style={{ height: hoverHeight[0] }}>
              <i className="fas fa-eye">
                <p>Zobacz</p>
              </i>
            </div>
          </a>
          <div className="text">
            <h3>Old Town</h3>
            <p style={{ fontSize: "16px" }}>
              Projekt fullstackowej aplikacji księgarni <span style={{ fontSize: "14px" }}>(CRUD - Create, Read, Update, Delete)</span>, pozwalający na zarządzanie treścią zarówno po stronie użytkownika, jak i po stronie administratora za pomocą CMS-a (Content Management System).
            </p>
            <a href="//github.com/AdrianTech/bookStore" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" />
              Zobacz kod na Github
            </a>
          </div>
        </div>
        <div className="example">
          <a href="//hit-words.netlify.com/" target="_blank" rel="noopener noreferrer" className="thumbail">
            <img src={hitWords} alt="hitWords" />
            <div className="hover-img" style={{ height: "98%" }}>
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
          <a href="//starwarsapp1.netlify.app/" target="_blank" rel="noopener noreferrer" className="thumbail">
            <img src={swapi} alt="Star Wars App" className="swapiImg" />
            <div className="hover-img" style={{ height: hoverHeight[1] }}>
              <i className="fas fa-eye">
                <p>Zobacz</p>
              </i>
            </div>
          </a>
          <div className="text">
            <h3>Star Wars App</h3>
            <p>Aplikacja pobierająca dane z API (swapi.dev) i wyświetlająca je w formie kart. Na ich odwrocie znajdują się szczegóły postaci. Wybrane postaci można dodawać do ulubionych, usuwać i przeglądać detale.</p>
            <a href="//github.com/AdrianTech/starWarsApp" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github" />
              Zobacz kod na Github
            </a>
          </div>
        </div>
        <div className="example">
          <a href="//cloud-app.netlify.app/" target="_blank" rel="noopener noreferrer" className="thumbail">
            <img src={cloudApp} alt="cloudApp" />
            <div className="hover-img" style={{ height: "98%" }}>
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
};

export default Projects;
