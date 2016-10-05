var React = require('react');

var WeatherMessage = React.createClass({
  render: function() {
    var {temp, location} = this.props; // ES6 destructuring. Equal to this.props.temp; this.props.location;
    var temp = this.props.temp;
    var location = this.props.location;
    return (
      <div>
        <p>It is currently {temp} in {location}</p>
      </div>

    );
  }
});

module.exports = WeatherMessage;
