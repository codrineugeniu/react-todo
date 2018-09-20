import React, { Component } from 'react'
import './App.css'
import ToDoApp from './Components/ToDoApp'

class App extends Component {
  render() {
    return (
      <div>
        <h1>ToDo App</h1>
        <ToDoApp />
      </div>
    )
  }
}

export default App
