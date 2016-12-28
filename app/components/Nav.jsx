import React from 'react';
import {Link, IndexLink} from "react-router";

class Nav extends React.Component {
	onSearch(event) {
		event.preventDefault();
		
    let location = this.refs.searchField.value
    let encodedLocation = encodeURIComponent(location)

    if(location.length > 0) {
      this.refs.searchField.value = "";
      window.location.hash = "#/?location=" + encodedLocation;
    }
	}

	render() {
		return (
  		<div className="top-bar">
  			<div className="top-bar-left">
  				<ul className="menu">
	  				<li className="menu-text">React Weather App</li>
	  				<li>
	  				  <IndexLink to="/" activeStyle={{fontWeight: "bold"}} activeClassName="active">Get weather </IndexLink>
	  				</li>
	  				<li>
	  				   <Link to="/about" activeStyle={{fontWeight: "bold"}} activeClassName="active">About</Link>
	  				</li>
	  				<li>
	  				  <Link to="/examples" activeStyle={{fontWeight: "bold"}} activeClassName="active">Examples</Link>
	  				</li>
	  			</ul>
  			</div>
  			<div className="top-bar-right">
  				<form onSubmit={this.onSearch.bind(this)}>
  					<ul className="menu">
  						<li>
  							<input ref="searchField" type="search" placeholder="search weather by city" />
  						</li>
  						<li>
  							<input type="submit" className="button" value="Get Weather" />
  						</li>
  					</ul>
  				</form>
  			</div>
  		</div>
    	);
	} 
}

  export default Nav;
