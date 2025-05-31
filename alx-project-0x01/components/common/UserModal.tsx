import React, { useState } from 'react';
import { UserModalProps, UserProps } from '@/interfaces';

const defaultUser: UserProps = {
  id: Date.now(),
  name: '',
  username: '',
  email: '',
  address: {
    street: '',
    suite: '',
    city: '',
    zipcode: '',
    geo: {
      lat: '',
      lng: '',
    },
  },
  phone: '',
  website: '',
  company: {
    name: '',
    catchPhrase: '',
    bs: '',
  },
};

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [user, setUser] = useState<UserProps>(defaultUser);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const keys = name.split('.');
    const nestedUpdate = (obj: any, keys: string[], value: string): any => {
      const key = keys[0];
      if (keys.length === 1) {
        return { ...obj, [key]: value };
      }
      return {
        ...obj,
        [key]: nestedUpdate(obj[key], keys.slice(1), value),
      };
    };

    setUser((prev) => nestedUpdate(prev, keys, value));
  };

  const handleSubmit = () => {
    onSubmit(user);
    onClose();
    setUser(defaultUser);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">Add New User</h2>
        <div className="grid grid-cols-1 gap-3">
          <input name="name" placeholder="Name" value={user.name} onChange={handleChange} className="border p-2 rounded" />
          <input name="username" placeholder="Username" value={user.username} onChange={handleChange} className="border p-2 rounded" />
          <input name="email" placeholder="Email" value={user.email} onChange={handleChange} className="border p-2 rounded" />
          <input name="address.street" placeholder="Street" value={user.address.street} onChange={handleChange} className="border p-2 rounded" />
          <input name="address.city" placeholder="City" value={user.address.city} onChange={handleChange} className="border p-2 rounded" />
          <input name="phone" placeholder="Phone" value={user.phone} onChange={handleChange} className="border p-2 rounded" />
          <input name="website" placeholder="Website" value={user.website} onChange={handleChange} className="border p-2 rounded" />
          <input name="company.name" placeholder="Company Name" value={user.company.name} onChange={handleChange} className="border p-2 rounded" />
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">Cancel</button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add User</button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
