import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-shadow">
      <h2 className="text-2xl font-bold text-blue-600 mb-2">{user.name}</h2>
      <div className="text-gray-700 space-y-1">
        <p><span className="font-medium">📧 Email:</span> {user.email}</p>
        <p><span className="font-medium">📞 Phone:</span> {user.phone}</p>
        <p><span className="font-medium">🎂 Age:</span> {user.age}</p>
        <p><span className="font-medium">🏠 Address:</span> {user.address}</p>
      </div>
    </div>
  );
};

export default UserCard;
