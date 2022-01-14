import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Select from "./pages/Select/Select";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import CustomizePage from "./pages/CustomizePage/CustomizePage";
import CheckoutPage from "./pages/CustomizePage/CustomizePage";

import "./styles/global.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/select" component={Select} />
        <Route path="/cart" component={Cart} />
        <Route path="/customize" component={CustomizePage} />
        <Route path="/checkout" component={CheckoutPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
