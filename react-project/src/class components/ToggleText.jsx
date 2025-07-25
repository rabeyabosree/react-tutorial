import { Component } from 'react'

class ToggleText extends Component {
    constructor(){
        super()
        this.state = { toggle : 'hide'}
    }

    toggleBtn =()=>{
        this.setState({toggle : this.state.toggle === 'hide'? "show" : 'hide'})
    }

    render(){
        return(
            <div>
                <h1>Toggle text</h1>
                <button onClick={this.toggleBtn}>{this.state.toggle === 'hide' ? "Show" : "Hide"}</button>
                {this.state.toggle === 'hide' ? <p></p> : <p>this is text</p>}
            </div>
        )
    }

}

export default ToggleText