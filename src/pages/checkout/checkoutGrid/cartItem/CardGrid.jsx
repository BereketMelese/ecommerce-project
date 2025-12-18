import CardDetails from "../../CardDetails.jsx";
import DeliveryOptions from "../../DeliveryOptions.jsx";

function CardGrid({ cartItem, deliveryOptions }) {
  return (
    <div className="cart-item-details-grid">
      <img className="product-image" src={cartItem.product.image} />

      <CardDetails cartItem={cartItem} />

      <DeliveryOptions deliveryOptions={deliveryOptions} cartItem={cartItem} />
    </div>
  );
}

export default CardGrid;
