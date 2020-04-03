import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Login from './components/Login';
const store = createStore(rootReducer, applyMiddleware());

const Header = () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collaps" data-target="#myNavbar">
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <Link className="navbar-brand" to="/">
          DIART2020
        </Link>
      </div>
      <div className="collapse navbar-collapse" id="myNavbar">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="/login">Login </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header></Header>
        <Switch>
          <Route path="/" component={App} exact />
          <Route path="/login" component={Login} exact />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
