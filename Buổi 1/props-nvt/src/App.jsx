import React from "react";
import ProductList from "./ProductList";

const App = () => {
  const products = [
  {
    id: 1,
    name: "Ghế gỗ",
    price: 500000,
    image: "public/images/ghego.jfif"
  },
  {
    id: 2,
    name: "Bàn gỗ",
    price: 1200000,
  image: "public/images/bango.jfif"  
  },
  {
    id: 3,
    name: "Tủ gỗ",
    price: 2200000,
    image: "public/images/tugo.jfif"
  }
];


  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>Danh sách sản phẩm</h1>
      <ProductList products={products} />
    </div>
  );
};

export default App;
