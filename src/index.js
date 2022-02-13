import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

const Routing = () => {
  return(
    <Router>
      <App />
    </Router>
  )
}


ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);
