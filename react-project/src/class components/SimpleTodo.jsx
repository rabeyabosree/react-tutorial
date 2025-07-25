
import { Component } from "react";

class SimpleTodo extends Component {
    constructor() {
        super()
        this.state = { todo: "", todos: [] }
    }

    handleChange = (e) => {
        this.setState({ todo: e.target.value })
    }

    addTodo = (e) => {
        e.preventDefault()
        if (this.state.todo.trim() !== "") {
            this.setState(prevState => ({
                todos: [...prevState.todos, prevState.todo]

            }))
        }

    }

    render() {
        return (
            <div>
                <h1>Todo</h1>
                <input type="text" placeholder="type todo here" onChange={this.handleChange} />
                <button onClick={this.addTodo}>Add</button>

                <ul>
                    {this.state.todos.map((todo, index) => (
                        <li key={index}>{todo}</li>
                    ))}
                </ul>
            </div>
        )
    }
}


export default SimpleTodo