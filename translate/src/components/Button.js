import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  // to hook up context object in Child component
  // syntax is static contextType = 'name of file/object'
  // Button.contextType = LanguageContext; or below static method
  //   static contextType = LanguageContext;

  renderSubmit(language) {
    return language === "english" ? "Submit" : "Voorleggen";
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {/* next line is child component, which takes as child component to Consumer */}
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    // this.context refers to default value (which is 'english')
    // const text = this.context === "english" ? "Submit" : "Voorleggen";
    // return <button className="ui button primary">{text}</button>;

    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
