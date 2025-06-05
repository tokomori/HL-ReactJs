import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div style={styles.wrapper}>
    <div style={styles.container}>
      <h1 style={styles.title}>🎧 Cửa hàng điện tử</h1>
      <p style={styles.subtitle}>Chào mừng bạn đến với cửa hàng công nghệ hiện đại!</p>
      <div style={styles.links}>
        <Link to="/about" style={{ ...styles.button, backgroundColor: '#17a2b8' }}>
          📘 Giới thiệu
        </Link>
        <Link to="/product/1" style={{ ...styles.button, backgroundColor: '#28a745' }}>
          🔍 Sản phẩm 1
        </Link>
        <Link to="/product/2" style={{ ...styles.button, backgroundColor: '#ffc107' }}>
          🔍 Sản phẩm 2
        </Link>
      </div>
    </div>
  </div>
);

const styles = {
  wrapper: {
    width: '100vw',
    height: '100vh',
    background: 'linear-gradient(to right, #f5f7fa, #c3cfe2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    textAlign: 'center',
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
    maxWidth: '600px',
    width: '100%',
  },
  title: {
    fontSize: '2.8rem',
    color: '#343a40',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#6c757d',
    marginBottom: '30px',
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  button: {
    padding: '12px 24px',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
};

export default Home;
