import axios from "axios";

const OPEN_WEATHER_MAP_URL = 
"http://api.openweathermap.org/data/2.5/weather?appid=75267d5598da69bc12b2057959a3ad5d&units=metric";

function getTemp(location) {
	let encodedLocation = encodeURIComponent(location)
	let requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`

	return axios.get(requestURL).then(function (res) {
		if(res.data.cod && res.data.message) {
			throw new Error(res.data.message)
		} else {
			return res.data.main.temp;
		}
	}, function(res) {
		throw new Error(res.data.message);
	})
}

export { getTemp };