var React = require('react');
var ReactDOM = require('react-dom');
/*
  What this does above in ES6 is creates a require statement for every variable,
  ES5: e.g., var Route = require('react-router').Route; (then var Router... etc.)
  It's called object destructuring in ES6
*/
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

    </Route>
  </Router>,
  document.getElementById('app')
);
