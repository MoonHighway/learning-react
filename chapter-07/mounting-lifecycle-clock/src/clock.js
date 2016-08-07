import { Component } from 'react'
import { getClockTime } from './lib'

export default class Clock extends Component {

    constructor() {
        super()
        this.state = getClockTime()
    }

    componentDidMount() {
        console.log("Starting Clock")
        this.ticking = setInterval(() =>
                this.setState(getClockTime())
            , 1000)
    }

    componentWillUnmount() {
        clearInterval(this.ticking)
        console.log("Stopping Clock")
    }

    render() {
        const { hours, minutes, seconds, timeOfDay } = this.state
        return (
            <div className="clock">
                <span>{hours}</span>
                <span>:</span>
                <span>{minutes}</span>
                <span>:</span>
                <span>{seconds}</span>
                <span>{timeOfDay}</span>
                <button onClick={this.props.onClose}>x</button>
            </div>
        )
    }

}