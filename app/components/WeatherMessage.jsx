import React from "react";

const WeatherMessage = ({temperature, location}) => {
  	return (
  		<h3>It is {temperature} in {location}.</h3>
  	)
  }

export default WeatherMessage;