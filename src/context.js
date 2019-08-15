import React, { Component, createContext } from "react";
import * as emailjs from "emailjs-com";

export const Context = createContext();

export class ContextProvider extends Component {
   state = {
      isClicked: false,
      showNavbar: false,
      message: "",
      name: "",
      getContact: "",
      info: {},
      counter: 2
   };
   handleBtnStart = e => {
      //console.log(e.target.className);
      const navTarget = e.target.className;
      if (navTarget === "start") window.location.hash = "about";
      // else if (navTarget === "nav-home") window.location.hash = "showcase";
      // else if (navTarget === "nav-about") window.location.hash = "about";
      // else if (navTarget === "nav-projects") window.location.hash = "projects";
      // else if (navTarget === "nav-services") window.location.hash = "#";
      // else if (navTarget === "nav-contact") window.location.hash = "#";
   };
   handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollX = window.innerWidth;
      if (scrollY > 600 && scrollX >= 768) {
         this.setState({
            showNavbar: true
         });
         //window.location.hash = "about";
      } else {
         this.setState({
            showNavbar: false
         });
         window.location.hash = "main";
      }
   };
   componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);
   }

   changeNav = () => {
      this.setState(prevState => ({
         isClicked: !prevState.isClicked
      }));
   };
   handleForm = e => {
      const name = e.target.name;
      const value = e.target.value;
      this.setState({
         [name]: value
      });
   };

   handleSubmit = e => {
      e.preventDefault();
      const { name, getContact, message, counter } = this.state;
      this.validateForm();
      var template_params = {
         name: name,
         message: message,
         getContact: getContact
      };
      var service_id = "default_service";
      var template_id = "my";
      if (!this.validateForm()) return;
      else
         emailjs.send(service_id, template_id, template_params).then(
            e => {
               if (e.status === 200) {
                  this.setState({
                     info: { txt: "Twoja wiadomość została wysłana", request: true },
                     name: "",
                     message: "",
                     getContact: ""
                  });
                  this.handleTimeout();
               }
            },
            () => {
               this.setState({
                  info: { txt: "Coś poszło nie tak, spróbuj ponownie", request: true },
                  counter: counter + 1
               });
               if (counter > 3) {
                  console.log(counter);
                  this.setState({
                     info: { txt: "Występuje jakiś błąd. Proszę, skontaktuj się ze mną telefonicznie", request: false }
                  });
               }
               this.handleTimeout();
            }
         );
   };
   handleTimeout = () => {
      setTimeout(() => {
         this.setState({
            info: {}
         });
      }, 6000);
   };
   validateForm = () => {
      const { message, name } = this.state;
      if (name.trim().length < 3 || message.trim().length < 10) {
         this.setState({
            info: { txt: "Za krótka wiadomość lub imię", request: false }
         });
         this.handleTimeout();
         return false;
      } else {
         return true;
      }
   };

   render() {
      const { isClicked, showNavbar, message, getContact, name, info } = this.state;
      const { handleBtnStart, changeNav, handleScroll, handleForm, handleSubmit } = this;

      return (
         <Context.Provider
            value={{
               isClicked,
               showNavbar,
               name,
               getContact,
               message,
               info,
               handleForm,
               handleSubmit,
               handleBtnStart,
               changeNav,
               handleScroll
            }}
         >
            {this.props.children}
         </Context.Provider>
      );
   }
}
export default ContextProvider;
