import React from "react";
import UserCreate from "./UserCreate";
import { LanguageStore } from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import LanguageSelector from "../components/LanguageSelector";

class App extends React.Component {
  //   onColorChange = (color) => {
  //     this.setState({ color: color });
  //   };

  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          {/* value={this.state.language} bcz we wants to change/pass that value to CONTEXT */}
          <ColorContext.Provider value={"red"}>
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
