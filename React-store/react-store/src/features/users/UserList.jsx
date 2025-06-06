import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './userSlice';

const UserList = () => {
  const dispatch = useDispatch();
  const { list, status } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold">Danh sách người dùng</h2>
      {status === 'loading' && <p>Đang tải...</p>}
      <ul className="list-disc pl-5 mt-2">
        {list.map((user) => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
