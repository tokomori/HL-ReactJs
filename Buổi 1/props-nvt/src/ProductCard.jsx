import React, { useState } from "react";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(0);

  const increase = () => setQuantity(q => q + 1);
  const decrease = () => setQuantity(q => (q > 0 ? q - 1 : 0));

  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "16px",
      marginBottom: "16px"
    }}>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", height: "auto", borderRadius: "8px", marginBottom: "12px" }}
      />
      <h2>{product.name}</h2>
      <p>Giá: {product.price.toLocaleString()} VND</p>
      <p>Số lượng: {quantity}</p>
      <p>Tổng: {(quantity * product.price).toLocaleString()} VND</p>
      <button onClick={decrease} style={{ marginRight: "8px" }}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
};

export default ProductCard;
