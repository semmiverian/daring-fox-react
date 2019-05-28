import React, { Component } from 'react'

export default class Display extends Component {
  render() {
    return <p>{this.props.todo}</p>
  }
}
