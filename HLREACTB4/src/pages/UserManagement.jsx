import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import UserTable from '../components/UserTable';
import AddUserForm from '../components/AddUserForm';

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [nextId, setNextId] = useState(1);
  const [editingUser, setEditingUser] = useState(null);

  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) &&
      (!filter || u.email.includes(filter))
  );

  const handleAddUser = (user) => {
    if (editingUser) {
      // Cập nhật user
      setUsers(users.map(u => (u.id === editingUser.id ? { ...u, ...user } : u)));
      setEditingUser(null);
    } else {
      // Thêm mới user
      const newUser = { ...user, id: nextId };
      setUsers([...users, newUser]);
      setNextId(nextId + 1);
    }
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
    // Nếu đang sửa user vừa xóa thì hủy sửa
    if (editingUser && editingUser.id === id) {
      setEditingUser(null);
    }
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
  };

  return (
    <div>
      <SearchBar value={search} onChange={setSearch} />
      <select onChange={(e) => setFilter(e.target.value)} value={filter}>
        <option value="">Tất cả</option>
        <option value="@gmail.com">Gmail</option>
        <option value="@biz.com">Biz</option>
      </select>
      <AddUserForm
        onAdd={handleAddUser}
        editingUser={editingUser}
        onCancelEdit={handleCancelEdit}
      />
      <UserTable
        users={filteredUsers}
        onDelete={handleDeleteUser}
        onEdit={handleEditUser}
      />
    </div>
  );
}
