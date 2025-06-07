export default function UserTable({ users, onDelete, onEdit }) {
  return (
    <table className="table" border={1} cellPadding={8} style={{ marginTop: 20 }}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Tên</th>
          <th>Email</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        {users.length === 0 ? (
          <tr>
            <td colSpan={4} style={{ textAlign: 'center' }}>Không có dữ liệu</td>
          </tr>
        ) : (
          users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => onEdit(user)}>Sửa</button>{' '}
                <button onClick={() => onDelete(user.id)}>Xóa</button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}
