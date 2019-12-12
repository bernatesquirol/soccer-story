import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Link } from "react-router-dom";
import Graph from './Graph'
function App() {
  return (
    <HashRouter basename='/'>
      <>
        <Route exact path="/">
          <iframe src="//slides.com/bernatesquirol/deck/embed" width={window.innerWidth} height={window.innerHeight} scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </Route>
        <Route path="/graph1" ><Graph id={0}/></Route>
        <Route path="/graph2" ><Graph id={1}/></Route>
        <Route path="/graph3" ><Graph id={2}/></Route>
        <Route path="/graph4" ><Graph id={3}/></Route>
      </>
    </HashRouter>
  );
}

export default App;
