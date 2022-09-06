import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      )
      .catch((error) => {
        console.log("ERROR  ", error);
      });
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
