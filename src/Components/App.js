import React, { Component } from "react";

import RouterComponent from "Components/Router";
import GlobalStyles from "Components/GlobalStyles";

class App extends Component {
  render() {
    return (
      <>
        <RouterComponent />
        <GlobalStyles></GlobalStyles>
      </>
    );
  }
}

export default App;
