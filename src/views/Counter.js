import React, { Component } from 'react'
import {connect} from 'react-redux'
import {incrementCounter, decrementCounter} from '../store/action'

class Counter extends Component {
  // tambahAku = e => this.props.incrementCounter(5)

  render() {
    return (
      <div>
        Harusnya dapet angka {this.props.counterDariState} dari store nya
        <br />
        <button onClick={this.props.incrementCounter}>Tambah aku mas</button>
        <button onClick={this.props.decrementCounter}>Kurangi aku mas</button>
      
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    counterDariState: state.counter
  }
}

const mapDispatchToProps = {
  incrementCounter,
  decrementCounter
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
