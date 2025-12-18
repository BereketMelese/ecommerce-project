import { Link } from "react-router";

function ProductActions({ order, orderProduct }) {
  return (
    <div className="product-actions">
      <Link to={`/tracking/${order.id}/${orderProduct.productId}`}>
        <button className="track-package-button button-secondary">
          Track package
        </button>
      </Link>
    </div>
  );
}

export default ProductActions;
