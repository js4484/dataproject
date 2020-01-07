import React from 'react';
import { withRouter } from 'react-router-dom';
import { Route, NavLink, Redirect, Link, Switch } from 'react-router-dom';



class Open extends React.Component {
  
  render(){
  return (
    <div className="inner-container">
      <div className="explanatory-text-box">
        <div className="explanatory-text">
          Here are presented three insigts on the collection of the Metropolitan
          Museum of Art, built from limited, semi-random data from the museum's
          API. All data is not representative of the collection as a whole, but
          is derived wholly from the collection. <span>*</span>
        </div>
        <Link className="start-button" to={`/splash`}>
          Get Started
        </Link>
      </div>
    </div>
  )};

}


export default withRouter(Open);
