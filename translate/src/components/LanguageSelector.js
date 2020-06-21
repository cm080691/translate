import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div>
        Select a language:
        <i
          className="flag us"
          onClick={
            () => this.context.onLanguageChange("english")
            // () => this.props.onColorChange("primary"))
          }
        />
        <i
          className="flag in"
          onClick={
            () => this.context.onLanguageChange("dutch")
            // () => this.props.onColorChange("red"))
          }
        />
      </div>
    );
  }
}

export default LanguageSelector;
