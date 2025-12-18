import DeliveryDate from "./cartItem/DeliveryDate";
import CardGrid from "./cartItem/CardGrid";

function OrderSummary({ deliveryOptions, cart }) {
  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => {
          const selectedDeliveryOption = deliveryOptions.find(
            (deliveryOption) => {
              return deliveryOption.id === cartItem.deliveryOptionId;
            }
          );
          return (
            <div key={cartItem.productId} className="cart-item-container">
              <DeliveryDate selectedDeliveryOption={selectedDeliveryOption} />

              <CardGrid cartItem={cartItem} deliveryOptions={deliveryOptions} />
            </div>
          );
        })}
    </div>
  );
}

export default OrderSummary;
