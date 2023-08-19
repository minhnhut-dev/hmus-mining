import { useContext } from "react";
import "./Header.css";
import { IconButton, Link } from "components";
import { CartContext } from "App";
import ModalCart from "components/ModalCart";

const Header = () => {
  const {cartItems} =  useContext(CartContext);

  return (
    <header className="header">
      <h1>
        <Link to="/">foodhouse</Link>
      </h1>
      <div>
        <IconButton icon="icon-shopping-cart" className="header__button" data-bs-toggle="modal" data-bs-target="#exampleModal">
          {!!cartItems && (
            <span className="header__cart-items">{cartItems.length || 0}</span>
          )}
        </IconButton>
      </div>
    </header>
  );
};

export default Header;
