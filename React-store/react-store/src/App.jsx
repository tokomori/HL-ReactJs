import React from 'react';
import RegisterForm from './components/RegisterForm';
import UserList from './features/users/UserList';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Quản lý người dùng</h1>
      <div className="max-w-2xl mx-auto space-y-6">
        <RegisterForm />
        <UserList />
      </div>
    </div>
  );
};

export default App;
