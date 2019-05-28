import React, { Component } from 'react'
import TodoItem from './components/TodoItem'
import TodoForm from './components/TodoForm'
class App extends Component {
  state = {
    name: 'Jonathan',
    todos: [
      'Mikirin Kamu',
      'Mikirin Aku',
      'Mikirin Kita',
      'Mikirin Dia'
    ]
  }

  // constructor() {
  //   super()
  //   this.state = {
  //     name: 'Jonathan',
  //     newTodo: ''
  //   }

  //   // this.handleChange = this.handleChange.bind(this)
  // }

  submitTodo = newTodo => {
    const {todos} = this.state

    this.setState({
      todos: [...todos, newTodo]
    }, () => {
      console.log(this.state.todos)
    })

  }

  render() {
    return <div>
      <h1>Siapa itu {this.state.name}?</h1>
      <h2>Enrico kemarin kemana?</h2>
      <ul>
      {
        this.state.todos.map((todo, index) => {
          return <TodoItem key={index} todo={todo}/>
        })
      }
      </ul>

      <TodoForm submitTodo={this.submitTodo} />
    </div>
  }
}

export default App