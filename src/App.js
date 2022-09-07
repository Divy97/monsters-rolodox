import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
    console.log("Constructor");
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
            console.log("this.state: ", this.state);
          }
        )
      )
      .catch((error) => {
        console.log("ERROR  ", error);
      });

    console.log("componentDidMount");
  }

  onSearch = (event) => {
    const searchField = event.target.value.toLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearch } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    console.log("Render");
    return (
      <div className="App">
        {/* Input Box */}
        <input
          className="search-box"
          type="search"
          placeholder="search a monster"
          onChange={onSearch}
        />

        {filteredMonsters.map((monster, id) => {
          return (
            <div key={id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
