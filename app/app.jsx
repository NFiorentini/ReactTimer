const Countdown                      = require('Countdown');
const Main                           = require('Main');
const React                          = require('react');
const ReactDOM                       = require('react-dom');
const Timer                          = require('Timer');

const {Route, Router, IndexRoute, hashHistory} =
    require('react-router');

$(document).foundation();

require('style!css!sass!applicationStyles')

/*
Since Countdown is nested under Main, its route
is /Countdown.
*/
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="countdown" component={Countdown}/>
      <IndexRoute component={Timer}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
