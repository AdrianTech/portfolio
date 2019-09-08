import React from "react";
import Showcase from "./components/Showcase";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Services from "./components/Services";
import Footer from "./components/Footer";
import "./Styles/Navigation.scss";
import ContextProvider from "./context";
import { BrowserRouter as Router } from "react-router-dom";

const Main = () => {
   return (
      <ContextProvider>
         <Router>
            <div className="main">
               <Nav />
               <Showcase />
               <About />
               <Projects />
               <Services />
               <Contact />
               <Footer />
            </div>
         </Router>
      </ContextProvider>
   );
};
export default Main;
