import { Component } from "react";

class Timer extends Component {
    constructor() {
        super()
        this.state = { seconds: 0 }
    }

    componentDidMount() {
        console.log("componentDidMount called")
        this.Timer = setInterval(() => {

            this.setState((prev) => ({ seconds: prev.seconds + 1 }))
            console.log("componentDidUpdate called")
        }, 1000)

    }

    componentWillUnmount() {

        clearInterval(this.Timer)
        console.log("Timper stopped and  component remove from dom, componentWillUnmount called")

    }

    render() {
        return (
            <div>
               
                <p>{this.state.seconds}</p>

            </div>
        )
    }
}


export default Timer;