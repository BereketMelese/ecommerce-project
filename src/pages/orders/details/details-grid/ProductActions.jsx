import { Link } from "react-router";

function ProductActions() {
  return (
    <div className="product-actions">
      <Link to="/tracking">
        <button className="track-package-button button-secondary">
          Track package
        </button>
      </Link>
    </div>
  );
}

export default ProductActions;
