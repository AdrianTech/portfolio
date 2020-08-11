import React from "react";
import { useQuery, gql } from "@apollo/client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Project from "./Project";
const services = gql`
  query getServices {
    services {
      id
      name
      body
      externalUrl
      githubUrl
      image {
        url
      }
    }
  }
`;

const Projects = () => {
  const { loading, data } = useQuery(services);
  let servicesData;

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const examples = document.querySelectorAll(".example");
    gsap.set([".example", "#projects h2"], { autoAlpha: 0 });
    gsap.fromTo(
      "#projects h2",
      { scale: 0 },
      {
        autoAlpha: 1,
        duration: 0.6,
        scale: 1,
        scrollTrigger: {
          trigger: "#projects",
          start: "top top+=200",
        },
      }
    );
    examples.forEach((i, index) => {
      gsap.fromTo(
        i,
        {
          xPercent: index % 2 === 0 ? -100 : 100,
        },
        {
          duration: 0.7,
          autoAlpha: 1,
          xPercent: 0,
          scrollTrigger: {
            trigger: i,
            start: "top top+=300",
          },
        }
      );
    });
  }, [loading]);
  if (!loading) servicesData = data.services.map((item) => <Project key={item.id} {...item} />);

  return (
    <section id="projects">
      <h2>Projekty</h2>
      <div className="projectExamples">{servicesData} </div>
    </section>
  );
};

export default Projects;
