var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      location: 'Boston',
      temp: '32'
    }
  },
  handleSearch: function (location) {
    this.setState({
      location: location,
      temp: 23
    });
  },
  render: function () {
    var {temp, location} = this.state; // Uses ES6 destructuring. Equal to this.state.temp or this.state.location;
    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherMessage temp={temp} location={location}/>
      </div>

    );
  }
});

module.exports = Weather;
