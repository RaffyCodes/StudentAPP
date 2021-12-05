import React, { Component } from 'react'
import StudentApp from './students/StudentApp'



class EventBind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            scores: <><p>test score 1: 85%</p></>
        }

        this.clickHandler = this.clickHandler.bind(this)
    }
    
    clickHandler() {
        this.setState({
            scores: 'Goodbye'
        })
    }

    render() {
        return (
            <div>
                <div className="grades">{this.state.scores}</div>
                <button type="button" onClick={this.clickHandler}class="collapsible">+</button>
            </div>
        )
    }
}

export default EventBind
