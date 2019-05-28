import React, { Component } from 'react'
import TodoItem from '../components/TodoItem'
import TodoForm from '../components/TodoForm'
import {Route} from 'react-router-dom'
import Ab from '../views/Ab'

export default class Todo extends Component {
  state = {
    name: 'Jonathan',
    todos: [
      'Mikirin Kamu',
      'Mikirin Aku',
      'Mikirin Kita',
      'Mikirin Dia'
    ]
  }

  submitTodo = (newTodo) => {
    const {todos} = this.state

    this.setState({
      todos: [...todos, newTodo]
    }, () => {
      console.log(this.state.todos)
    })

  }

  render() {
    return (
      <div className="hai">
      <h1 
        style={{
          color: 'red',
          backgroundColor: 'cornflowerblue'
        }}
      >Siapa itu {this.state.name}?</h1>
      <h2>Enrico kemarin kemana?</h2>
      <ul>
      {
        this.state.todos.map((todo, index) => {
          return <TodoItem key={index} todo={todo}/>
        })
      }
      </ul>

      <TodoForm submitTodo={this.submitTodo} />


      <Route path="/todo/ab" component={Ab} />
    </div>
    )
  }
}
