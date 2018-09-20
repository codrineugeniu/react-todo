import React, { Component } from 'react'

const dateNow = () => new Date().toGMTString()
export const TimeDisplay = ({ time }) => <span> Current Time: {time}</span>

export class CurrentTime extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: dateNow()
    }
    setInterval(() => this.setState({ time: dateNow() }), 100)
  }
  render() {
    const { time } = this.state
    return <TimeDisplay time={time} />
  }
}

export default CurrentTime
