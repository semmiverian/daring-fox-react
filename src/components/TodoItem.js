import React, { Component } from 'react'
import Display from './Display'

export default class TodoItem extends Component {
  render() {
    return <li>
      <Display todo={this.props.todo} />
    </li>
      
  }
}
