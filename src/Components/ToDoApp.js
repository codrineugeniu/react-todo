import React, { Component } from 'react'
import { ToDoInput } from './TodoInput'
import { TodoList } from './TodoList'

class ToDoApp extends Component {
  constructor(props) {
    super(props)
    this.state = { todos: ['todo1', 'todo2'] }
  }
  onTodoAdd = todo => {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }
  render() {
    return (
      <div>
        <div>
          <ul>
            <TodoList todos={this.state.todos} />
          </ul>
        </div>
        <ToDoInput onTodoAdd={this.onTodoAdd} />
      </div>
    )
  }
}

export default ToDoApp
