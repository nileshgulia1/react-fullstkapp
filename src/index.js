import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import Home from './Home';
import Submit from './Submit';
import { NavLink } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();





ReactDOM.render(
<Router>
<div className="container">
<nav className="navbar navbar-default">
<div className="container-fluid">

<div className="navbar-header">
<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
  <span className="sr-only">Toggle navigation</span>
  <span className="icon-bar"></span>
  <span className="icon-bar"></span>
  <span className="icon-bar"></span>
</button>
<NavLink className="navbar-brand" to="/">Awesome Recipe</NavLink>
</div>


<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
<ul className="nav navbar-nav">
  <li><NavLink exact activeClassName="activeNav" to="/">Home <span className="sr-only">(current)</span></NavLink></li>
  <li><NavLink activeClassName="activeNav" to="/submit">Submit a Recipe </NavLink></li>
  
</ul>


</div>
</div>
</nav>

<Route exact path="/" component={Home}/>
      <Route path="/submit" history={history} component={Submit}/>
  
</div>

      
      
    
  </Router>
, document.getElementById('root'));
registerServiceWorker();
