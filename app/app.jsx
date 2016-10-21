var React = require('react');
var ReactDOM = require('react-dom');
/*
  What this does above in ES6 is creates a require statement for every variable,
  ES5: e.g., var Route = require('react-router').Route; (then var Router... etc.)
  It's called object destructuring in ES6
*/
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

/*
  Load foundation
  Uses css! loaded and style! loader
*/
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
