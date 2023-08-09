import { useContext } from "react";
import "./Header.css";
import { IconButton, Link } from "components";
import { CartContext } from "App";

const Header = () => {
  const [cartItems] = useContext(CartContext);

  return (
    <header className="header">
      <h1>
        <Link to="/">foodhouse</Link>
      </h1>
      <div>
        <IconButton icon="icon-user" className="header__button" />
        <IconButton icon="icon-shopping-cart" className="header__button">
          {!!cartItems && (
            <span className="header__cart-items">{cartItems}</span>
          )}
        </IconButton>
      </div>
    </header>
  );
};

export default Header;
