import React, { useState } from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Main from "./Main";
import "./style.css";
import { DataProvider } from "./Data";
import SingleItem from "./SingleItem";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Shop from "./Shop";
import SmallCart from "./SmallCart";
import Footer from "./Footer";
import Checkout from "./Checkout";

function App() {
  return (
    <div>
      <Router>
        <DataProvider>
          <Header />
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/product/:id" exact component={SingleItem} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/checkout" exact component={Checkout} />
          </Switch>
          <SmallCart />
          <Footer />
        </DataProvider>
      </Router>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
