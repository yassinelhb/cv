import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from "./views";
import { BrowserRouter as Router, Switch , Route, Link, withRouter } from "react-router-dom";
import NotFound from "./components/404/notFound";


function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
             <Route path="/" exact component={Index}/>
             <Route path="*" component={ NotFound }/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
