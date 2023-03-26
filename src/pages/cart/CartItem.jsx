import React, { useContext } from "react";
import { ShopContext } from "../../context/context-shop";

const CartItem = ({ data }) => {
  const { id, price, productName, productImage } = data;
  const { cartItems, addItemToCart, removeItem, countHandler } =
    useContext(ShopContext);
  return (
    <div className="product">
      <div className="cartItem">
        <div>
        <img src={productImage} />

        </div>
        
        
        <div className="description">
          <p>
            <b>{productName}</b>
          </p>
          <p> ${price}</p>
          <div className="countHandler">
            <button onClick={() => removeItem(id)}>-</button>
            <input
              type="number"
              value={cartItems[id]}
              onChange={(e) => countHandler(e.target.value, id)}
            />
            <button onClick={() => addItemToCart(id)}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
