import react from 'react'


class Counter extends react.Component {
    constructor() {
        super()
        this.state = { count: 0 }
    }

    increae = () => {
        this.setState({ count: this.state.count + 1 })
    }

    decrese = () => {
        this.setState({ count: this.state.count - 1 })
        if(this.state.count <= 0){
            this.setState({count: 0})
        }
    }

    render() {
        return (
            <div>
                <h1>Counter App</h1>

                <button onClick={this.increae}>+</button>
                <button onClick={this.decrese}>-</button>

                <span>{this.state.count}</span>
            </div>
        )

    }
}

export default Counter