// we made separate file bcz we can only import it in required component
import React from "react";

// 'english' is Default Value set in context object
// setting up initial value
const Context = React.createContext("english");

export class LanguageStore extends React.Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    this.setState({ language });
  };
  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
