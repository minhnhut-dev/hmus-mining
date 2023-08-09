import { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, NavBar, ProductsList, ProductDetails } from "components";

export const CartContext = createContext([]);

const App = () => {
  const cartState = useState(0);

  return (
    <Router>
      <CartContext.Provider value={cartState}>
        <div className="App">
          <Header />
          <NavBar />
          <div className="App__content">
            <Switch>
              <Route path="/products/:id">
                <ProductDetails />
              </Route>
              <Route path="/">
                <ProductsList />
              </Route>
            </Switch>
          </div>
        </div>
      </CartContext.Provider>
    </Router>
  );
};

export default App;
