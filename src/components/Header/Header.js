import { useContext, useState } from "react";
import "./Header.css";
import { IconButton, Link } from "components";
import { CartContext } from "App";
import "../ModalCart/modal.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {cartItems} =  useContext(CartContext);
  
  const closeModal = () => {
    setIsOpen(false); 
  };

  console.log(cartItems);

  return (
    <header className="header">
      <h1>
        <Link to="/">foodhouse</Link>
      </h1>
      <div onClick={() => setIsOpen(!isOpen)}>
        <IconButton icon="icon-shopping-cart" className="header__button" >
          {!!cartItems && (
            <span className="header__cart-items" >{cartItems.length || 0}</span>
          )}
        </IconButton>
        {isOpen && 
                <div id="modal" className="modal">
                <div className="modal-content">
                  <span id="close-modal" style={{ cursor: 'pointer', color: '#000', fontSize: '30px', float: 'right'}} onClick={closeModal}>
                    &times;
                  </span>
                  <h2 style={{ cursor: 'pointer', color: '#000', fontSize: '30px'}}>Cart</h2>
                  <table>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Price</th>
                        <th>Image</th>
                      </tr>
                    </thead>
                    <tbody>
                    {cartItems.map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name || 0}</td>
                    <td><img src={item.image} style={{width: '70px'}}/></td>
                  </tr>
                ))}
                    </tbody>
                  </table>
                </div>
              </div>
        }
      </div>
    </header>
  );
};

export default Header;
