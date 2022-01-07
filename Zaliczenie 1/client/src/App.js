import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MainPage from './Home';
import Doc from './Documentation';
import Fib from './Fib Calc';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <ul>
          <li><Link to="/">Strona główna</Link></li>
          <li> <Link to="/fibonacci">Kalkulator Fibonacciego</Link></li>
          <li><Link to="/doc">Opis</Link></li>
          </ul>
        </header>
        <br/>
        <div>
          <Route exact path="/" component={MainPage} />
          <Route path="/fibonacci" component={Fib} />
          <Route path="/doc" component={Doc} />
        </div>
      </div>
    </Router>
  );
}

export default App;
