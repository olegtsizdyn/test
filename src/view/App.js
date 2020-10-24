import React from "react"
import '../scss/app.scss';
import Header from "../components/Header"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import GroceryList from "../components/GroceryList/index"
import ProductDetails from "../components/ProductDetails/index"

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/grocery-list" component={GroceryList} />
        <Route exact path="/product/:id" component={ProductDetails} />
      </Switch>
    </Router>
  );
}

export default App;
