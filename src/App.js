import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'

import Todo from './views/Todo'
import About from './views/About'
import Home from './views/Home'
import Swapi from './views/Swapi'
import Counter from './views/Counter'
import Hooks from './views/hooks'

class App extends Component {
  render() {
    return <Provider store={store}>
      <Router>
        <h1>Ini halaman kita</h1>
        
        <Link to="/">Home</Link> |
        <Link to="/todo">Todo</Link> |
        <Link to="/about">About</Link> |
        <Link to="/todo/ab">Todo Ab</Link> |
        <Link to="/swapi">Shopee</Link> |
        <Link to="/counter">Counter</Link> |
        <Link to="/hooks">Hooks</Link> |

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/todo" component={Todo} />
          <Route path="/about" component={About} />
          <Route path="/swapi" component={Swapi} />
          <Route path="/counter" component={Counter} />
          <Route path="/hooks" component={Hooks} />
        </Switch>
      </Router>
    </Provider>
  }
}

export default App