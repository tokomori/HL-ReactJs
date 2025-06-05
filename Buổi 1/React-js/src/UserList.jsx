import React from "react";
import UserCard from "./UserCard";

const UserList = ({ users }) => {
  return (
    <div className="space-y-6">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
