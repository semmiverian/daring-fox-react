import React, { Component } from 'react'
import {connect} from 'react-redux'
import {incrementCounter, decrementCounter, swapiApi} from '../store/action'

class Counter extends Component {
  // tambahAku = e => this.props.incrementCounter(5)

  render() {
    return (
      <div>
        Harusnya dapet angka {this.props.counterDariState} dari store nya
        <br />
        <button onClick={this.props.incrementCounter}>Tambah aku mas</button>
        <button onClick={this.props.decrementCounter}>Kurangi aku mas</button>
        <button onClick={this.props.swapiApi}>Pukul aku mas</button>
        <br />

        <h2>Ini data dari redux thunk</h2>
        { this.props.loading 
            ? <h2>Tunggu aku mas aku lagi loading</h2> 
            : JSON.stringify(this.props.swapiData)
        }
        {/* {
          JSON.stringify(this.props.swapiData)
        } */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    counterDariState: state.counter,
    swapiData: state.swapi,
    loading: state.loading
  }
}

const mapDispatchToProps = {
  incrementCounter,
  decrementCounter,
  swapiApi
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
