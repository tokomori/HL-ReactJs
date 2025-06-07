import { useState, useEffect } from 'react';

export default function AddUserForm({ onAdd, editingUser, onCancelEdit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name);
      setEmail(editingUser.email);
    } else {
      setName('');
      setEmail('');
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    onAdd({ name, email });
    if (!editingUser) {
      setName('');
      setEmail('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
      <input
        type="text"
        placeholder="Tên"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">{editingUser ? 'Cập nhật' : 'Thêm'}</button>
      {editingUser && (
        <button type="button" onClick={onCancelEdit} style={{ marginLeft: 10 }}>
          Hủy
        </button>
      )}
    </form>
  );
}
