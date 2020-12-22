import React, { Component, createContext } from "react";

export const Context = createContext();

export class ContextProvider extends Component {
  state = {
    isClicked: false,
    moveNavbar: false,
    message: "",
    info: {},
    counter: 2,
    isSending: false,
  };
  handleBtnStart = (e) => {
    const navTarget = e.target.className;
    if (navTarget === "start") this.navigation("about");
  };
  navigation = (id) => {
    document.getElementById(id).scrollIntoView();
  };
  handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 60) {
      this.setState({
        moveNavbar: true,
      });
    } else {
      this.setState({
        moveNavbar: false,
      });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  changeNav = () => {
    this.setState((prevState) => ({
      isClicked: !prevState.isClicked,
    }));
  };
  handleForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { message, counter } = this.state;
    if (!this.validateForm()) return;
    this.setState({
      isSending: true,
    });
    const data = new FormData();
    data.append("message", message);
    fetch("https://emails.adriantech.eu/emailHandler.php", {
      method: "POST",
      body: data,
    }).then((res) => {
      if (res.ok) {
        this.setState({
          info: { txt: "Twoja wiadomość została wysłana", response: true },
          message: "",
          isSending: false,
        });
        this.handleTimeout();
        return res;
      } else {
        this.setState({
          info: {
            txt: "Coś poszło nie tak, spróbuj ponownie",
            response: false,
            isSending: false,
          },
          counter: counter + 1,
        });
        if (counter > 3) {
          this.setState({
            info: {
              txt: "Występuje jakiś błąd. Proszę, skontaktuj się ze mną telefonicznie",
              response: false,
            },
          });
        }
        this.handleTimeout();
      }
    });
  };
  handleTimeout = () => {
    setTimeout(() => {
      this.setState({
        info: {},
      });
    }, 3500);
  };
  validateForm = () => {
    const { message } = this.state;
    if (message.trim().length < 10) {
      this.setState({
        info: { txt: "Wiadomość powinna mieć do najmniej 10 znaków", response: false },
      });
      this.handleTimeout();
      return false;
    } else {
      return true;
    }
  };

  render() {
    const { isClicked, moveNavbar, message, info, isSending } = this.state;
    const { handleBtnStart, changeNav, handleScroll, handleForm, handleSubmit, navigation } = this;

    return (
      <Context.Provider
        value={{
          isClicked,
          moveNavbar,
          message,
          info,
          isSending,
          handleForm,
          handleSubmit,
          handleBtnStart,
          changeNav,
          handleScroll,
          navigation,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
export default ContextProvider;
