import React, { Component } from "react";
import Page from "react-page-loading";

//Package CSS
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "animate.css/animate.min.css";

//Template CSS Style
import "../src/style.css";
import "./assets/css/responsive.css";
import "./assets/css/color/color-default.css";

import HomeThree from "./pages/HomeThree";
import ScrollUpBtn from "./components/ScrollUp";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Page loader={"comet-spin"} color={"#007bff"} size={50}>
          <div>
            <HomeThree />
            <ScrollUpBtn />
          </div>
        </Page>
      </div>
    );
  }
}
export default App;
