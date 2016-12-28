import React from 'react';
import {Link, IndexLink} from "react-router";

const Nav = (props) => {
    return (
    <div>
      <h2>Nav Component</h2>
      <IndexLink to="/" activeStyle={{fontWeight: "bold"}} activeClassName="active">Get weather </IndexLink>
      <Link to="/about" activeStyle={{fontWeight: "bold"}} activeClassName="active">About</Link>
      <Link to="/examples" activeStyle={{fontWeight: "bold"}} activeClassName="active">Examples</Link>
    </div>
    );
  }

  export default Nav;