import React from 'react';
import { withRouter } from 'react-router-dom';
import { Route, NavLink, Redirect, Link, Switch } from 'react-router-dom';
// const LineChart = require("react-chartjs").Line;
// import { Line } from 'react-chartjs';
import Insight from '../data/Insight';


class Splash extends React.Component {
  render()
  {return (
    <div className="inner-container">
      <div className="navbar">
        <div className="navbar-links">
          <div className="splash-button-box" key={1}>
            <NavLink
              className="splash-button"
              activeClassName="active-navbar-link"
              to={`/splash/1`}
            >
              <div className="splash-button-text">1</div>
            </NavLink>
          </div>

          <div className="splash-button-box" key={2}>
            <NavLink
              className="splash-button"
              activeClassName="active-navbar-link"
              to={`/splash/2`}
            >
              <div className="splash-button-text">2</div>
            </NavLink>
          </div>
          <div className="splash-button-box" key={3}>
            <NavLink
              className="splash-button"
              activeClassName="active-navbar-link"
              to={`/splash/3`}
            >
              <div className="splash-button-text">3</div>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="user-show-main">
        {/* <Switch>
          <Route exact path="/splash/1" component={Insight} />
          <Route exact path="/splash/2" component={Insight} />
          <Route exact path="/splash/3" component={Insight} />
        </Switch> */}
        <Insight />
      </div>
    </div>
  )};
    
    }
    

export default withRouter(Splash);