import { Fragment } from "react";
import ImageContainer from "./details/details-grid/ImageContainer";
import ProductActions from "./details/details-grid/ProductActions";
import ProductDetails from "./details/details-grid/ProductDetails";
import OrderHeader from "./details/OrderHeader";

function OrderGrid({ orders }) {
  return (
    <div className="orders-grid">
      {orders.map((order) => {
        return (
          <div key={order.id} className="order-container">
            <OrderHeader order={order} />

            <div className="order-details-grid">
              {order.products.map((orderProduct) => {
                return (
                  <Fragment key={orderProduct.productId}>
                    <ImageContainer orderProduct={orderProduct} />

                    <ProductDetails orderProduct={orderProduct} />

                    <ProductActions order={order} orderProduct={orderProduct} />
                  </Fragment>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default OrderGrid;
