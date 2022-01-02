/*****************************************************************************/
/*!
\file App.js
\date 2021
\brief
\Not for distribution
*/
/*****************************************************************************/

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//store all pages
import Home from "./Pages/Home";

//renders html
const App: React.FC = () => {
  return (
    <div className='main'>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;