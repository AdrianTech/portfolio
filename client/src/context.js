import React, { Component, createContext } from "react";

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
      if (!this.validateForm()) return;
      const data = {
         name,
         getContact,
         message
      };
      fetch("/sendMail", {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(data)
      })
         .then(res => {
            if (res.ok) {
               this.setState({
                  info: { txt: "Twoja wiadomość została wysłana", response: true },
                  name: "",
                  message: "",
                  getContact: ""
               });
               this.handleTimeout();
               return res;
            } else {
               this.setState({
                  info: { txt: "Coś poszło nie tak, spróbuj ponownie", response: false },
                  counter: counter + 1
               });
               if (counter > 3) {
                  this.setState({
                     info: { txt: "Występuje jakiś błąd. Proszę, skontaktuj się ze mną telefonicznie", response: false }
                  });
               }
               this.handleTimeout();
            }
         })
         .catch(err => err);
   };
   handleTimeout = () => {
      setTimeout(() => {
         this.setState({
            info: {}
         });
      }, 3500);
   };
   validateForm = () => {
      const { message, name } = this.state;
      if (name.trim().length < 2 || message.trim().length < 10) {
         this.setState({
            info: { txt: "Za krótka wiadomość lub imię", response: false }
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
