import { Component } from "react";

class InputMirror extends Component {
    constructor() {
        super()
        this.state = { inputText: '' }
    }

    handleChange = (e) => {
        this.setState({ inputText: this.state.inputText = e.target.value })
    }


    render() {
        return (
            <div>
                <h1>Input Mirror</h1>
                <input type="text" placeholder="Type here" onChange={this.handleChange} />
                <p>{this.state.inputText}</p>
            </div>
        )
    }
}

export default InputMirror