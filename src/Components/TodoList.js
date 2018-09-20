import React from 'react'

const getTodos = todos =>
  todos.map((todo, i) => {
    return <li key={i}>{todo}</li>
  })

export const TodoList = ({ todos }) => {
  return (
    <React.Fragment>
      {todos.length > 0 ? getTodos(todos) : 'No todos. Add one?'}
    </React.Fragment>
  )
}
