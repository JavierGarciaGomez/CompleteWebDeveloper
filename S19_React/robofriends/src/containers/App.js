// 223
import React from "react";
import "./App.css";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import { robots } from "../robots";
// 227
import Scroll from "../components/Scroll";

class App extends React.Component {
  constructor() {
    // 223 state
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  // 226
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({
          robots: users,
        });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
    console.log(event.target.value);
  };

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    if (!robots.length) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">Robofriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
