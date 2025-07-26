import { Component } from "react";

class NetworkStatus extends Component {
  constructor() {
    super();
    this.state = {
      isOnline: navigator.onLine,
    };
  }

  // Define the actual event handlers
  handleOnline = () => {
    console.log("You are online");
    this.setState({ isOnline: true });
  };

  handleOffline = () => {
    console.log("You are offline");
    this.setState({ isOnline: false });
  };

  componentDidMount() {
    window.addEventListener("online", this.handleOnline);
    window.addEventListener("offline", this.handleOffline);
  }

  componentWillUnmount() {
    window.removeEventListener("online", this.handleOnline);
    window.removeEventListener("offline", this.handleOffline);
  }

  render() {
    return (
      <div>
        <h3>{this.state.isOnline ? "You are online" : "You are offline"}</h3>
      </div>
    );
  }
}

export default NetworkStatus;
