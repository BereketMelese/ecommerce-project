import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import axios from "axios";
import Header from "../components/Header";
import "./TrackingPage.css";
import dayjs from "dayjs";

function TrackingPage({ cart }) {
  const [order, setOrder] = useState(null);
  const { orderId, productId } = useParams();

  useEffect(() => {
    const fetchTrackingData = async () => {
      let response = await axios.get(`/api/orders/${orderId}?expand=products`);
      setOrder(response.data);
    };

    fetchTrackingData();
  }, [orderId]);

  if (!order) return null;

  const productItem = order?.products?.find((item) =>
    productId ? item.productId === productId : item
  );
  const product = productItem?.product;

  const estimatedDeliveryTime = productItem.estimatedDeliveryTimeMs;
  const totalDeliveryTime = estimatedDeliveryTime - order.orderTimeMs;
  const timePassedMs = Date.now() - order.orderTimeMs;

  let deliveryPercentage = (timePassedMs / totalDeliveryTime) * 100;

  if (deliveryPercentage > 100) {
    deliveryPercentage = 100;
  } else if (deliveryPercentage < 0) {
    deliveryPercentage = 0;
  }

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="/tracking-favicon.png" />
      <title>Tracking</title>

      <Header cart={cart} />

      <div className="tracking-page">
        <div className="order-tracking">
          <Link className="back-to-orders-link link-primary" to="/orders">
            View all orders
          </Link>
          <div className="delivery-date">
            Arriving on {dayjs(order.orderTimeMs).format("dddd, MMMM D")}
          </div>
          <div className="product-info">{product.name}</div>
          <div className="product-info">Quantity: {productItem.quantity}</div>
          <img
            className="product-image"
            src={product.image}
            alt={product.name}
          />
          <div className="progress-labels-container">
            <div
              className={`progress-label ${
                deliveryPercentage >= 0 ? "completed" : ""
              }`}
            >
              Preparing
            </div>
            <div
              className={`progress-label current-status ${
                deliveryPercentage >= 33 ? "current-status" : ""
              }`}
            >
              Shipped
            </div>
            <div
              className={`progress-label ${
                deliveryPercentage >= 100 ? "delivered" : ""
              }`}
            >
              Delivered
            </div>
          </div>
          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: `${deliveryPercentage}%` }}
            ></div>
          </div>
          <div className="progress-percentage">
            {Math.round(deliveryPercentage)}% delivered
          </div>
        </div>
      </div>
    </>
  );
}

export default TrackingPage;
