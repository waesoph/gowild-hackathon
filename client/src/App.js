import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Select from "./pages/Select/Select";

import "./styles/global.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/select" exact component={Select}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
