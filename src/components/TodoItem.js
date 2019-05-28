import React, { Component } from 'react'
import Display from './Display'

export default function(props) {
  return <li>
    <Display todo={props.todo} />
  </li>
}


// export default class TodoItem extends Component {
//   render() {
//     return <li>
//       <Display todo={this.props.todo} />
//     </li>
//   }
// }
