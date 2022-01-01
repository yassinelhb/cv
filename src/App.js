import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from "./views";
import { BrowserRouter as Router, Switch , Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
             <Route path="/" component={Index}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
