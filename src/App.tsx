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
import MintPage from "./Pages/MintPage";
import MultiplayerTest from "./Pages/MultiplayerTest";
//renders html
const App: React.FC = () => 
{
  return (
    <div className='main'>
      
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/MintPage' exact component={MintPage} />
          <Route path='/HainanChickenRice' exact component={MultiplayerTest} />
          <Route path='/OperationDarkArts' component={() => { 
     window.location.href = 'https://forms.gle/bjnW8NfSN2XWxwoG8'; 
     return null;
}} />
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;