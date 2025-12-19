import { useEffect, useState } from "react";
import axios from "axios";
import CheckoutHeader from "./checkoutHeader";
import OrderSummary from "./checkoutGrid/OrderSummary";
import PaymentSummary from "./checkoutGrid/PaymentSummary";
import "./CheckoutPage.css";

function CheckoutPage({ cart, loadCart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    const fetchCheckoutData = async () => {
      const response = await axios.get(
        "/api/delivery-options?expand=estimatedDeliveryTime"
      );
      setDeliveryOptions(response.data);
    };

    fetchCheckoutData();
  }, []);

  useEffect(() => {
    const fetchPaymentData = async () => {
      const response = await axios.get("/api/payment-summary");
      setPaymentSummary(response.data);
    };

    fetchPaymentData();
  }, [cart]);

  return (
    <>
      <title>Checkout</title>

      <CheckoutHeader cart={cart} />
      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary
            deliveryOptions={deliveryOptions}
            cart={cart}
            loadCart={loadCart}
          />
          <PaymentSummary paymentSummary={paymentSummary} loadCart={loadCart} />
        </div>
      </div>
    </>
  );
}

export default CheckoutPage;
