var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
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

    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (errorMessage) {
      alert(errorMessage);
      that.setState({
        isLoading: false
      });
    });
  },
  render: function () {
    var {temp, location, isLoading} = this.state; // Uses ES6 destructuring. Equal to this.state.temp or this.state.location;

    function renderMessage() {
      if (isLoading) { // if isLoading is true
        return <h3>Fetching weather...</h3>;
      } else if (temp && location) { // if temp and location exist
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>

    );
  }
});

module.exports = Weather;
