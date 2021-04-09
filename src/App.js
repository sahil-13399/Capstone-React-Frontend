import './App.css';
import React from 'react'

import Main from './Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dyslexia from './Dyslexia';
import Dyscalculia from './Dyscalculia';
import Dysgraphia from './Dysgraphia';


  

function App() {
  return (
    <Router>
      <div className="App" style={{height:"100vh", alignItems:"center", justifyContent:"center", textAlign:"center",padding:15,backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 120%)", display:"flex", verticalAlign: "middle", horizontalAlign:"middle",flexDirection:'column'}}>
        <Switch>
          <Route path="/dyslexia">
            <Dyslexia />
          </Route>
          <Route path="/dyscalculia">
            <Dyscalculia />
          </Route>
          <Route path="/dysgraphia">
            <Dysgraphia />
          </Route> 
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
