import CardDetails from "./details/CardDetails";
import DeliveryOptions from "./details/DeliveryOptions";

function CardGrid({ cartItem, deliveryOptions, loadCart }) {
  return (
    <div className="cart-item-details-grid">
      <img className="product-image" src={cartItem.product.image} />

      <CardDetails cartItem={cartItem} />

      <DeliveryOptions
        deliveryOptions={deliveryOptions}
        cartItem={cartItem}
        loadCart={loadCart}
      />
    </div>
  );
}

export default CardGrid;
