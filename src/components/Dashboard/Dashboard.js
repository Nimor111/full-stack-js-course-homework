import React from "react";
import PropTypes from "prop-types";

import {NavLink} from "react-router-dom";

const Dashboard = props => {
  return (
    <div>
      <h1>Welcome to simple blogging</h1>

      <nav>
        <NavLink to="/">Home</NavLink>
        <br />
        <NavLink to="/all-posts">All posts</NavLink>
        <br />
        <NavLink exact to="/new-post">
          New post
        </NavLink>
      </nav>
    </div>
  );
};

Dashboard.defaultProps = {};

Dashboard.propTypes = {};

export default Dashboard;
