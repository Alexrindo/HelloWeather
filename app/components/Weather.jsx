import React from "react";
import WeatherForm from "WeatherForm";
import WeatherMessage from "WeatherMessage";
import ErrorModal from "ErrorModal"
import {getTemp} from "openWeatherMap";

class Weather extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			isLoading: false,
			errorMessage: undefined
		}
	}

	componentDidMount() {
		let location = this.props.location.query.location;

		if(location && location.length > 0) {
			this.handleSearch(location)
			window.location.hash = "#/"
		}
	}

	componentWillReceiveProps(nextProps) {
		let location = nextProps.location.query.location;

		if(location && location.length > 0) {
			this.handleSearch(location)
			window.location.hash = "#/"
		}
	}

	handleSearch(location) {
		let that = this

		this.setState({isLoading: true})

		getTemp(location).then(function (temp) {
			console.info(location, temp, that.state.isLoading)
			that.setState({
				location,
				temp,
				isLoading: false
			})
		}, function (e) {
			console.info(e)
			that.setState({
				isLoading: false,
				errorMessage: e.message,
				location: undefined,
				temp: undefined
			})
		})
	}

	render() {
			let {isLoading, temp, location, errorMessage} = this.state;
			function renderMessage() {
				if(isLoading) {
					return <h3 className="text-center">Fetching Weather...</h3>
				} else if (temp && location) {
					return <WeatherMessage location={location} temperature={temp} />
				}
			}

			function renderError() {
				if(typeof errorMessage === "string") {
					return (
						<ErrorModal message={errorMessage}/>
					)
				}
			}

			return (
		  		<div>
			  		<h1 className="text-center page-title">Get Weather</h1>
			  		<WeatherForm name="searchLocation" onSearch={this.handleSearch.bind(this)} />
			  		{renderMessage()}
			  		{renderError()}
		  		</div>
  			)
	}
}

export default Weather

