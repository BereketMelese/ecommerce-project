import { useState } from "react";
import axios from "axios";
import formatMoney from "../../utils/money";

function Product({ product, loadCart }) {
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [showAddedMessage, setShowAddedMessage] = useState(false);

  const selectQuantity = (event) => {
    const quantitySelected = Number(event.target.value);
    setQuantity(quantitySelected);
  };

  const addToCart = async () => {
    try {
      setIsAdding(true);
      await axios.post(`/api/cart-items`, {
        productId: product.id,
        quantity,
      });
      await loadCart();

      setShowAddedMessage(true);
      setTimeout(() => setShowAddedMessage(false), 2000);
    } catch (error) {
      console.error("Failed to add to cart:", error);
      alert("Failed to add the item to cart. Please try again.");
    } finally {
      setIsAdding(false);
    }
  };
  return (
    <div className="product-container">
      <div className="product-image-container">
        <img className="product-image" src={product.image} alt={product.name} />
      </div>

      <div className="product-name limit-text-to-2-lines">{product.name}</div>

      <div className="product-rating-container">
        <img
          className="product-rating-stars"
          src={`images/ratings/rating-${product.rating.stars * 10}.png`}
        />
        <div className="product-rating-count link-primary">
          {product.rating.count}
        </div>
      </div>

      <div className="product-price">{formatMoney(product.priceCents)}</div>

      <div className="product-quantity-container">
        <select
          value={quantity}
          onChange={selectQuantity}
          aria-label={`Select quantity for ${product.name}`}
        >
          {[...Array(10).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>
              {num + 1}
            </option>
          ))}
        </select>
      </div>

      <div className="product-spacer"></div>

      {showAddedMessage && (
        <div className="added-to-cart visible">
          <img src="images/icons/checkmark.png" alt="Added to cart" />
          Added
        </div>
      )}

      <button
        data-testid="add-to-cart-button"
        className="add-to-cart-button button-primary"
        onClick={addToCart}
        disabled={isAdding}
        aria-label={` `}
      >
        {isAdding ? "Adding" : "Add to cart"}
      </button>
    </div>
  );
}

export default Product;
