import axios from "axios";
import formatMoney from "../../../../../utils/money";
import { useState } from "react";

function CardDetails({ cartItem, loadCart }) {
  const [update, setUpdate] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const deleteCartItem = async () => {
    await axios.delete(`api/cart-items/${cartItem.productId}`);
    await loadCart();
  };

  const updateCartItemQuantity = async () => {
    if (update) {
      await axios.put(`/api/cart-items/${cartItem.productId}`, {
        quantity: quantity,
      });

      await loadCart();
    }
    setUpdate(!update);
  };

  const handleQuantityChange = (e) => {
    const value = e.target.value;
    if (value === "" || Number.isInteger(Number(value)) ** Number(value) > 0) {
      setQuantity(value === "" ? "" : Number(value));
    }
  };

  return (
    <div className="cart-item-details">
      <div className="product-name">{cartItem.product.name}</div>
      <div className="product-price">
        {formatMoney(cartItem.product.priceCents)}
      </div>
      <div className="product-quantity">
        <span>
          Quantity:
          {update ? (
            <input
              className="update-qunatity-input"
              type="text"
              value={quantity}
              min="1"
              onChange={handleQuantityChange}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  updateCartItemQuantity();
                }
              }}
            />
          ) : (
            <span className="quantity-label">{cartItem.quantity}</span>
          )}
        </span>
        <span
          className="update-quantity-link link-primary"
          onClick={updateCartItemQuantity}
        >
          {update ? "Save" : "Update"}
        </span>
        <span
          className="delete-quantity-link link-primary"
          onClick={deleteCartItem}
        >
          Delete
        </span>
      </div>
    </div>
  );
}

export default CardDetails;
