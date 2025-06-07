import React from "react";
import UserManagement from "./pages/UserManagement";

export default function App() {
  return (
    <div className="container my-5 p-4 bg-white rounded shadow">
      <h1 className="text-center mb-4 fw-bold" style={{ letterSpacing: 1.2 }}>
        Quản lý người dùng
      </h1>
      <UserManagement />
    </div>
  );
}
