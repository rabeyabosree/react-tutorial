
import Counter from './class components/Counter';
import ToggleText from './class components/ToggleText';
import InputMirror from './class components/InputMirror';
import SimpleTodo from './class components/SimpleTodo';
import { Component } from 'react';
import Timer from './class components/reactLifeCycle/Timer';
class App extends Component {
  constructor() {
    super()
    this.state = { showTimer: true }
  }

  toggleTmimer = () => {
    this.setState((prev) => ({ showTimer: !prev.showTimer }))
  }



  render() {
    return (
      <>
        <Counter />
        <ToggleText />
        <InputMirror />
        <SimpleTodo />

        {/* Timer app*/}
        <div>
          <h1>Timer</h1>
          <button onClick={this.toggleTmimer}>{this.state.showTimer ? "Stop" : "start"}</button>
          <hr />
          {this.state.showTimer ? <Timer /> : 0 }
        </div>



      </>
    )
  }
}

export default App
