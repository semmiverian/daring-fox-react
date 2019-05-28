import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import Todo from './views/Todo'
import About from './views/About'
import Home from './views/Home'
import Swapi from './views/Swapi'

class App extends Component {
  render() {
    return <Router>
      <h1>Ini halaman kita</h1>
      
      <Link to="/">Home</Link> |
      <Link to="/todo">Todo</Link> |
      <Link to="/about">About</Link> |
      <Link to="/todo/ab">Todo Ab</Link> |
      <Link to="/swapi">Shopee</Link> |

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/todo" component={Todo} />
        <Route path="/about" component={About} />
        <Route path="/swapi" component={Swapi} />
      </Switch>
    </Router>
  }
}

export default App