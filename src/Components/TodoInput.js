import React, { Component } from 'react'

export class ToDoInput extends Component {
  constructor(props) {
    super(props)
    this.state = { todo: '' }
  }
  handleOnChange = event => {
    const { value } = event.target

    this.setState({ todo: value })
  }
  render() {
    const { todo } = this.state
    return (
      <label>
        <input type="text" onChange={this.handleOnChange} value={todo} />
        <button onClick={() => this.props.onTodoAdd(this.state.todo)}>
          Add todo
        </button>
      </label>
    )
  }
}
