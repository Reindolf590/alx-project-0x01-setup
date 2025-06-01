import React, { useState } from "react";
import Header from "@/components/layout/Header";
import UserModal from "@/components/common/UserModal";
import UserCard from "@/components/common/UserCard";
import { UserData } from "@/interfaces";

interface UsersProps {
  posts: UserData[];
}

const Users: React.FC<UsersProps> = ({ posts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState<UserData[]>(posts);

  const handleAddUser = (user: UserData) => {
    setUsers([...users, { ...user, id: users.length + 1 }]);
  };

  return (
    <div>
      <Header />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Users</h1>

        <button
          onClick={() => setIsModalOpen(true)}
          className="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Add User
        </button>

        <UserModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddUser}
        />

        <ul className="space-y-3">
          {users.map((user) => (
            <li key={user.id}>
              <UserCard user={user} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
