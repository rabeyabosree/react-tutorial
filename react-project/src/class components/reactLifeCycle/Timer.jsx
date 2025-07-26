import { Component } from "react";

class Timer extends Component {
    constructor() {
        super();
        this.state = { seconds: 0 };
    }

    componentDidMount() {
        console.log("componentDidMount called");
        this.timer = setInterval(() => {
            this.setState((prev) => ({ seconds: prev.seconds + 1 }));
            console.log("Timer ticked");
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        console.log("Timer stopped and component removed from DOM, componentWillUnmount called");
    }

    render() {
        return (
            <div>
                <p>{this.state.seconds}</p>
            </div>
        );
    }
}

export default Timer;
