import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContentDetailsPage from "./pages/ContentDetailsPage";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/anime/:id" component={ContentDetailsPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
