import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Hero from "./components/hero";
import Home from "./pages/home";
import Sportssnaps from "./pages/sportssnaps";

function App() {
  return (
    <Router>
      <Hero />
      <Route exact path="/" component={Home} />
      <Route path="/sportssnaps" component={Sportssnaps} />
    </Router>
  );
}

export default App;
