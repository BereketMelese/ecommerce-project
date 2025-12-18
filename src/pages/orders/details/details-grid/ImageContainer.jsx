import React from "react";

function ImageContainer({ orderProduct }) {
  return (
    <div className="product-image-container">
      <img src={orderProduct.product.image} />
    </div>
  );
}

export default ImageContainer;
