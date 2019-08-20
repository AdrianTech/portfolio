import React from "react";
import "../Styles/About.scss";
import "../Styles/Icons.scss";
import ScrollAnimation from "react-animate-on-scroll";
import css from "../images/icons/css.png";
import html from "../images/icons/html2.png";
import js from "../images/icons/js.png";
import react from "../images/icons/react.png";
import git from "../images/icons/git.png";
import node from "../images/icons/node.png";
import vscode from "../images/icons/vscode.png";

const About = props => (
   <section id="about">
      <h2>Poznaj mnie</h2>
      <h3>Cześć, mam na imię Adrian...</h3>
      <div className="introduce-myself">
         <ScrollAnimation animateOnce={true} animateIn="bounceIn" delay={400}>
            <div className="foto" />
         </ScrollAnimation>
         <ScrollAnimation animateOnce={true} animateIn="zoomIn" delay={600}>
            <div className="text-about">
               <p>
                  Zajmuję się tworzeniem stron www i rozwijam swoje umiejętności w kierunku budowania aplikacji webowych zarówno po stronie
                  frontendu, jak i backendu. Najczęściej korzystam z biblioteki JavaScript - React, po stronie serwera zaś z Expressa,
                  frameworka Node.js. Chcę stale doskonalić swoje umiejętności, dlatego szukam nowych wyzwań... jeżeli potrzebujesz strony
                  internetowej dla swojej firmy bądź szukasz developera do swojego projektu, daj mi znać, klikając link poniżej...
               </p>
               <div className="about-icons">
                  <ScrollAnimation animateOnce={true} animateIn="zoomIn" delay={800}>
                     <a href="https://github.com/AdrianTech" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github" />
                     </a>
                  </ScrollAnimation>
                  <ScrollAnimation animateOnce={true} animateIn="zoomIn" delay={1200}>
                     <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook" />
                     </a>
                  </ScrollAnimation>
               </div>
               <ScrollAnimation animateOnce={true} animateIn="zoomIn" delay={1400}>
                  <a className="contact-nav" href="#contact">
                     Skontaktuj się ze mną
                  </a>
               </ScrollAnimation>
            </div>
         </ScrollAnimation>
      </div>
      <div className="technology-stack">
         <h2> Technologie</h2>
         <div className="icons">
            <ScrollAnimation animateOnce={true} animateIn="flip" delay={200}>
               <div className="items">
                  <img src={html} alt="" />
                  <p>HTML5</p>
               </div>
            </ScrollAnimation>
            <ScrollAnimation animateOnce={true} animateIn="flip" delay={400}>
               <div className="items">
                  <img src={css} alt="" />
                  <p>CSS3</p>
               </div>
            </ScrollAnimation>
            <ScrollAnimation animateOnce={true} animateIn="flipInY" delay={500}>
               <div className="items">
                  <img src={js} alt="" />
                  <p>JavaScript</p>
               </div>
            </ScrollAnimation>
            <ScrollAnimation animateOnce={true} animateIn="flipInX" delay={600}>
               <div className="items">
                  <img src={react} alt="" />
                  <p>React.js</p>
               </div>
            </ScrollAnimation>
            <ScrollAnimation animateOnce={true} animateIn="fadeInUp" delay={200}>
               <div className="smaller-items">
                  <img src={node} alt="" />
                  <p>Node.js</p>
               </div>
            </ScrollAnimation>
            <ScrollAnimation animateOnce={true} animateIn="bounceIn" delay={400}>
               <div className="smaller-items">
                  <img src={vscode} alt="" />
                  <p>VSCode</p>
               </div>
            </ScrollAnimation>
            <ScrollAnimation animateOnce={true} animateIn="flipInX" delay={500}>
               <div className="smaller-items">
                  <img src={git} alt="" />
                  <p>Git</p>
               </div>
            </ScrollAnimation>
            <ScrollAnimation animateOnce={true} animateIn="flipInX" delay={600}>
               <div className="smaller-items">
                  <i className="fas fa-code fa-2x" />
                  <p>Pozostałe</p>
               </div>
            </ScrollAnimation>
         </div>
      </div>
   </section>
);

export default About;
