import React, { Component } from 'react'

export default class TodoForm extends Component {
  state = {
    newTodo: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  submitTodo = e => {
    e.preventDefault()
    this.props.submitTodo(this.state.newTodo)
  }

  render() {
    return (
      <form action="" onSubmit={this.submitTodo}>
        <input type="text"
              id="newTodo"
              value={this.state.newTodo}
              onChange={this.handleChange}
        />
        <button type="submit">Add new Todo</button>
      </form>
    )
  }
}
