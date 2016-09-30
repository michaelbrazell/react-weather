var React = require('react');
var Nav = require('Nav');

// This.props.children is handled by react router for pulling in children components
var Main = React.createClass({
  render: function () {
    return (
      <div>
        <Nav/>
        <h2>Main Component</h2>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Main;
