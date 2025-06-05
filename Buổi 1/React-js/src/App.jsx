import React from "react";
import UserList from "./UserList";

const App = () => {
  const users = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      email: "a.nguyen@example.com",
      phone: "090-123-4567",
      age: 25,
      address: "Hà Nội"
    },
    {
      id: 2,
      name: "Trần Thị B",
      email: "b.tran@example.com",
      phone: "091-234-5678",
      age: 30,
      address: "TP. Hồ Chí Minh"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          👤 Danh sách người dùng
        </h1>
        <UserList users={users} />
      </div>
    </div>
  );
};

export default App;
