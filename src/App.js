import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Kesehatan from "./pages/Kesehatan";
import Pendidikan from "./pages/Pendidikan";
import Nav from "./components/NavDesktop";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/kesehatan/:kategori">
            <Kesehatan />
          </Route>
          <Route path="/pendidikan/:kategori">
            <Pendidikan />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
