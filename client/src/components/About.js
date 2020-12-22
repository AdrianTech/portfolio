import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import css from "../images/icons/css.png";
import html from "../images/icons/html2.png";
import js from "../images/icons/js.png";
import react from "../images/icons/react.png";
import git from "../images/icons/git.png";
import node from "../images/icons/node.png";
import vue from "../images/icons/vue.png";
import AboutDescCarousel from "./AboutDescCarousel";
import SocialMedia from "./SocialMedia";
import "pure-react-carousel/dist/react-carousel.es.css";

const About = () => {
  return (
    <section id="about">
      <h2>O mnie</h2>
      <div className="introduce-myself">
        <AboutDescCarousel />
        <SocialMedia />
      </div>
      <div className="technology-stack">
        <h2>Technologie</h2>
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
          <ScrollAnimation animateOnce={true} animateIn="flipInX" delay={600}>
            <div className="items">
              <img src={vue} alt="" />
              <p>Vue.js</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateOnce={true} animateIn="fadeInUp" delay={200}>
            <div className="smaller-items">
              <img src={node} alt="" />
              <p>Node.js</p>
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
};

export default About;
