import { Component } from "react";
import axios from 'axios';

class UserCart extends Component {
  constructor() {
    super();
    this.state = { items: [] };
  }

  componentDidMount() {
    console.log("Component mounted");

    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        this.setState({ items: res.data });
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }

  render() {
    return (
      <div>
        <h1>User Data</h1>
        {this.state.items.length === 0 ? (
          <p>Loading...</p>
        ) : (
          this.state.items.map((item) => (
            <div key={item.id}>
              <h2>{item.username}</h2>
              <p>{item.email}</p>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default UserCart;
