import React, { Component, createContext } from "react";
import * as emailjs from "emailjs-com";

export const Context = createContext();

export class ContextProvider extends Component {
   state = {
      isClicked: false,
      moveNavbar: false,
      message: "",
      name: "",
      getContact: "",
      info: {},
      counter: 2
   };
   handleBtnStart = e => {
      const navTarget = e.target.className;
      if (navTarget === "start") window.location.hash = "about";
   };
   handleScroll = () => {
      const scrollY = window.scrollY;
      //const scrollX = window.innerWidth;
      if (scrollY > 60) {
         this.setState({
            moveNavbar: true
         });
      } else {
         this.setState({
            moveNavbar: false
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
         name,
         message,
         getContact
      };
      const service_id = "default_service";
      const template_id = "my";
      const user_ID = "user_YTcj4BTWFLGdTDcRKLExI";
      if (!this.validateForm()) return;
      else
         emailjs.send(service_id, template_id, template_params, user_ID).then(
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
                  info: { txt: "Coś poszło nie tak, spróbuj ponownie", request: false },
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
      }, 4000);
   };
   validateForm = () => {
      const { message, name } = this.state;
      if (name.trim().length < 2 || message.trim().length < 10) {
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
      const { isClicked, moveNavbar, message, getContact, name, info } = this.state;
      const { handleBtnStart, changeNav, handleScroll, handleForm, handleSubmit } = this;

      return (
         <Context.Provider
            value={{
               isClicked,
               moveNavbar,
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
