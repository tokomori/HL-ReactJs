import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
  <div style={styles.wrapper}>
    <div style={styles.container}>
      <h1 style={styles.title}>📘 Giới thiệu</h1>
      <p style={styles.text}>
        Chúng tôi là công ty chuyên cung cấp các sản phẩm công nghệ chất lượng, uy tín và hiện đại
        hàng đầu Việt Nam. Sự hài lòng của khách hàng là ưu tiên số một của chúng tôi.
      </p>

      <Link to="/" style={styles.link}>← Quay lại Trang chủ</Link>
    </div>
  </div>
);

const styles = {
  wrapper: {
    width: '100vw',
    height: '100vh',
    background: 'linear-gradient(to right, #e3f2fd, #f1f8e9)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  container: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#343a40',
  },
  text: {
    fontSize: '1.2rem',
    color: '#555',
    lineHeight: '1.6',
    marginBottom: '30px',
  },
  link: {
    display: 'inline-block',
    marginTop: '10px',
    textDecoration: 'none',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: '8px',
    fontWeight: 'bold',
  },
};

export default About;
