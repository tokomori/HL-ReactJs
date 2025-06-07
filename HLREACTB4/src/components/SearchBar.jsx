export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Tìm kiếm theo tên..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ marginBottom: 10, width: '100%', padding: 8 }}
    />
  );
}
