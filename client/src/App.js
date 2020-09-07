import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Kesehatan from "./pages/Kesehatan";
import Pendidikan from "./pages/Pendidikan";
import Dashboard from "./layout/Dashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
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
            <Route path="/dashboard/kesehatan">
              <Dashboard kategori="kesehatan" />
            </Route>
            <Route path="/dashboard/pendidikan">
              <Dashboard kategori="pendidikan" />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
