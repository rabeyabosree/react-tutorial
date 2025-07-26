import { Component } from "react";

class LifeCycleDemo extends Component {
    constructor(props) {
        super(props)
        this.state = { count: props.count }
    }



    render() {
        return (
            <div>

                <h1>{this.state.count}</h1>

            </div>
        )
    }
}


export default LifeCycleDemo;