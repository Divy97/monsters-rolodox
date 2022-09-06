import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: {
        firstName: "Divy",
        lastName: "Parekh",
      },
    };
  }

  render() {
    return <div className="App"></div>;
  }
}

export default App;
