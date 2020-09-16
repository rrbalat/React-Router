import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import
{
  Route,
  Link,
  BrowserRouter as Router,
  Switch, NavLink
} from 'react-router-dom'
import App from './App'
import Users from './components/Users'
import Contact from './components/Contact'
import Notfound from './components/Notfound'

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <NavLink exact activeClassName="active" to="/">Home</NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="/users">Users</NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="/contact">Contact</NavLink>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))