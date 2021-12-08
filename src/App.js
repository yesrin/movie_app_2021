import React from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './routes/About';

function App(){
  return (
      <Router>
        <Routes>
          <Route path="/about" component={About} />
        </Routes>
      </Router>
  );
}

export default App;
