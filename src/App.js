import { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, ProductsList, ProductDetails } from "components";

export const CartContext = createContext([]);

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = product => {
    const checkProductExist = cartItems.find(it => it.id === product.id)
    if (checkProductExist) {
      return;
    }else{
      const newProduct = [...cartItems, product]
      setCartItems(newProduct);
    }
  }
  
  return (
    <Router>
      <CartContext.Provider value={{setCartItems, cartItems, addToCart}}>
        <div className="App">
          <Header />
          {/* <NavBar /> */}
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
