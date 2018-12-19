import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s12">
              <h1 className="center-align">Art Clicker</h1>
              <h4 className="center-align flow-text">Click these paintings to score. Beware though, don't click the same one twice.</h4>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;