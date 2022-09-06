import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Linda",
          id: 0,
        },
        {
          name: "Frank",
          id: 1,
        },
        {
          name: "Jacky",
          id: 2,
        },
        {
          name: "Andre",
          id: 3,
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster, id) => {
          return (
            <div key={id}>
              <h1>{monster.name}</h1>;
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
