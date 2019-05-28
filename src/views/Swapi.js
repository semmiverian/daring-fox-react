import React, { Component } from 'react'
import axios from 'axios'

export default class Swapi extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    axios.get('https://swapi.co/api/people/1')
         .then(({data}) => {
           console.log(data)
            this.setState({
              data
            })
         })  
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.data !== prevState) {
      // kenapa aku ga dihapus?
    }
  }
  
  render() {
    return (
      <div>
        {JSON.stringify(this.state.data)}
      </div>
    )
  }
}
