import { Component } from "react";


class Counters extends Component {
    constructor() {
        super()
        this.state = { count: 0 }
    }

    // componentDidMount
    componentDidMount() {
        console.log("component mounted")
    }


    // update count value
    increaseCount = () => {
        this.setState((prev) => ({ count: prev.count + 1 }))
        console.log("count increased")
    }

    // componentDidUpdate
    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props || prevState.count !== this.state.count) {
            console.log("componentDidUpdate called")
        }
    }


    render() {
        return (
            <div>
                <h1>Counter</h1>
                <button onClick={this.increaseCount}>+</button>
                <h2>{this.state.count}</h2>
            </div>
        )
    }
}

export default Counters