import './App.css';
import React from "react";

import Home from './pages/Home/Home/Home';
import { BrowserRouter as Router, Switch as Routes, Route } from 'react-router-dom';
import Appointment from './pages/Appointment/Appointment/Appointment';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
