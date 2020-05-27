import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Hero from "./components/hero";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Hero />
      <Route exact path="/" component={Home} />
    </Router>
  );
}

export default App;
