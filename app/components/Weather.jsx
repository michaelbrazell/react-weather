var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      location: 'Boston',
      temp: '32'
    }
  },
  handleSearch: function (location) {
    /*
      Using that = this because...
      'this' is not available inside the openWeatherMap() function
      It would return the wrong 'this' so we can define 'that = this'
      so that 'this' inside the function returns this.setState (weather -> handleSearch)
    */
    var that = this;
    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp
      });
    }, function (errorMessage) {
      alert(errorMessage);
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
