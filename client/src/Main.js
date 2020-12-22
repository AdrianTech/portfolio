import React from "react";
import Showcase from "./components/Showcase";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Services from "./components/Services";
import Footer from "./components/Footer";
import ContextProvider from "./store/context";
import { UserProvider } from "./store/getData";

const Main = () => {
  return (
    <ContextProvider>
      <UserProvider>
        <div className="main">
          <Nav />
          <Showcase />
          <About />
          <Projects />
          <Services />
          <Contact />
          <Footer />
        </div>
      </UserProvider>
    </ContextProvider>
  );
};
export default Main;
