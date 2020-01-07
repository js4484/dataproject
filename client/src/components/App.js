import React from "react";
import { Route, Switch } from 'react-router-dom';

import Splash from './ui/Splash';
import Open from './ui/Open';


const App = () => {
  return (
    <div className='outer-container'>
      <Switch>

        <Route path="/splash" component={Splash} routeType="auth" />
        <Route path="/" component={Open} routeType="auth" />
      </Switch>
    </div>
  );
};

export default App;