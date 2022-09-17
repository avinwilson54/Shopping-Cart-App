import Header from "./components/Header";
import Table from "./components/Table";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import Filter from "./components/Filter";
import products from "./products";
import { useState } from "react";
import { data } from "jquery";

function App() {
  function onSelect(value) {
    console.log(value);
    displayTable(this.value);
  }

  return (
    <Router>
      <Header filterValue={onSelect} />

      <Switch>
        <Route path="/" exact>
          <Table filterSearch={displayTable} />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </Router>
  );
}

function displayTable(item) {
  if (products.size !== item) {
    document.getElementById("tableRow").classList.add("d-none");
    console.log(true);
  } else {
    document.getElementById("tableRow").classList.remove("d-none");
  }
}

export default App;
