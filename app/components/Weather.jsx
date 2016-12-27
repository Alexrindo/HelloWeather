import React from "react";
import WeatherForm from "WeatherForm";
import WeatherMessage from "WeatherMessage";
import {getTemp} from "openWeatherMap";

class Weather extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			isLoading: false
		}
	}

	handleSearch(location) {
		let that = this

		this.setState({isLoading: true})

		getTemp(location).then(function (temp) {
			that.setState({
				location,
				temp,
				isLoading: false
			})
		}, function (errorMessage) {
			console.info(errorMessage)
			that.setState({isLoading: false})
		})
	}

	render() {
			let {isLoading, temp, location} = this.state;
			function renderMessage() {
				if(isLoading) {
					return <h3>Fetching Weather...</h3>
				} else if (temp && location) {
					return <WeatherMessage location={location} temperature={temp} />
				}
			}

			return (
		  		<div>
			  		<h3>Weather Component</h3>
			  		<WeatherForm onSearch={this.handleSearch.bind(this)} />
			  		{renderMessage()}
		  		</div>
  			)
	}
}

export default Weather

