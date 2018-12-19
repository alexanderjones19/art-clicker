import React from 'react';

const Navbar = props => {
  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper deep-purple darken-4">
          <ul>
            <li className="nav-items">Art Clicker</li>
            <li className="nav-items">{props.message}</li>
            <li className="nav-items">Score: {props.score} | High Score: {props.highScore}</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;