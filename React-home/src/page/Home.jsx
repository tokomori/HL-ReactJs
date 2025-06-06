import { useSelector } from 'react-redux';

const Home = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <h1>Trang chủ</h1>
      {user.isLoggedIn ? (
        <p>Chào {user.username} ({user.email})</p>
      ) : (
        <p>Chưa đăng nhập</p>
      )}
    </div>
  );
};
