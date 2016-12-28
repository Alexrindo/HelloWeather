import React from "react";

const About = (props) => {
  	return (
  		<div>
  		<h1 className="text-center page-title">About</h1>
  		<p>
  			This is a weather application built in React. I have
  			built this for the React Developer Course.
  		</p>
  		<p>
  			Here are some of the tools I've used
  		</p>
  		<ul>
  			<li>
  				<a href="https://facebook.github.io/react">React</a> - This was 
  				the Javascript framework used.
  			</li>
  			<li>
  				<a href="https://openweathermap.org/api">OpenWeather API</a> - Here is the
  				Weather framework that I used. 
  			</li>
  		</ul>

  		</div>
  	)
}

export default About;