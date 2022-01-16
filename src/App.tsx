import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContentDetailsPage from "./pages/ContentDetailsPage";
import Modal from "./components/Modal";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <Router>
      <Modal />
      <Header />
      <div className="app-body">
        <Switch>
          <Route path="/anime/:id" component={ContentDetailsPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
