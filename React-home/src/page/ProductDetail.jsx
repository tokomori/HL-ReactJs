import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// Giả lập dữ liệu sản phẩm
const productData = [
  {
    id: '1',
    name: 'Tai nghe Bluetooth Sony WH-1000XM4',
    image: '/images/tainghe.jfif',
    price: 6990000,
    description: 'Tai nghe chống ồn chủ động với âm thanh chất lượng cao.',
    stock: 12,
  },
  {
    id: '2',
    name: 'Chuột Logitech G Pro X',
    image: '/images/chuot.jfif',
    price: 1490000,
    description: 'Chuột gaming chính xác cao dành cho game thủ chuyên nghiệp.',
    stock: 8,
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const foundProduct = productData.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      setDescription(foundProduct.description);
    }
  }, [id]);

  const handleChangeDescription = () => {
    setDescription('Phiên bản mới với công nghệ AI khử ồn thông minh hơn.');
  };

  const handleAddToCart = () => {
    setMessage('✅ Đã thêm sản phẩm vào giỏ hàng!');
  };

  if (!product) {
    return (
      <div style={styles.wrapper}>
        <div style={styles.card}>
          <h2>⚠️ Sản phẩm không tồn tại</h2>
          <Link to="/" style={styles.link}>← Quay lại Trang chủ</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h1 style={styles.title}>{product.name}</h1>
        <img src={product.image} alt={product.name} style={styles.image} />
        <p><strong>Giá:</strong> {product.price.toLocaleString()}₫</p>
        <p><strong>Còn lại:</strong> {product.stock} chiếc</p>

        <h3 style={styles.sectionTitle}>📝 Mô tả sản phẩm</h3>
        <p>{description}</p>

        <div style={styles.buttons}>
          <button onClick={handleChangeDescription} style={styles.secondaryBtn}>🔄 Cập nhật mô tả</button>
          <button onClick={handleAddToCart} style={styles.primaryBtn}>🛒 Thêm vào giỏ hàng</button>
        </div>

        {message && <p style={styles.success}>{message}</p>}

        <div style={{ marginTop: '20px' }}>
          <Link to="/" style={styles.link}>← Quay lại Trang chủ</Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    height: '100vh',
    width: '100vw',
    background: 'linear-gradient(to right, #e0f7fa, #fce4ec)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  card: {
    background: '#fff',
    padding: '30px',
    borderRadius: '16px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
    maxWidth: '650px',
    width: '100%',
    textAlign: 'center',
    color: 'black',
  },
  title: {
    fontSize: '1.8rem',
    marginBottom: '15px',
    color: '#333',
  },
  image: {
    width: '60%',
    height: 'auto',
    borderRadius: '12px',
    marginBottom: '20px',
  },
  sectionTitle: {
    marginTop: '20px',
    marginBottom: '10px',
    fontSize: '1.2rem',
    color: '#444',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '15px',
    marginTop: '20px',
  },
  primaryBtn: {
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  secondaryBtn: {
    backgroundColor: '#6c757d',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  success: {
    color: 'green',
    marginTop: '15px',
    fontWeight: 'bold',
  },
  link: {
    textDecoration: 'none',
    color: '#007bff',
    fontWeight: 'bold',
  },
};

export default ProductDetail;
