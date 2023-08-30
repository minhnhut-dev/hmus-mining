import React, { useState } from "react";
import "./modal.css";

function ModalCart({closeModal, isOpen}) {
  return (
    <>
      {isOpen && (
        <div id="modal" className="modal">
          <div className="modal-content">
            <span id="close-modal" style={{ cursor: 'pointer', color: '#000', fontSize: '30px', float: 'right'}} >
              &times;
            </span>
            <h2 style={{ cursor: 'pointer', color: '#000', fontSize: '30px'}}>Cart</h2>
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Image</th>
                </tr>
              </thead>
              <tbody>
                {/* {cartItems.map((item, index) => ( */}
                  <tr >
                    <td>1</td>
                    <td>1000</td>
                    <td><img src=""/></td>
                  </tr>
                {/* ))} */}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalCart;
