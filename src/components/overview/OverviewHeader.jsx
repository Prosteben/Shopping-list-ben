import React from 'react';
import { ShoppingCart, Plus, User } from 'lucide-react';

export default function OverviewHeader({ user, allUsers, onCreateClick, onSwitchUser }) {
  return (
    <div className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ShoppingCart size={32} />
          <h1 className="text-2xl font-bold">Shopping Lists</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-blue-700 px-3 py-2 rounded-lg">
            <User size={18} />
            <select
              value={user.id}
              onChange={(e) => onSwitchUser(e.target.value)}
              className="bg-transparent border-none text-white focus:outline-none cursor-pointer"
              title="Switch user"
            >
              {allUsers.map(u => (
                <option key={u.id} value={u.id} className="bg-blue-600">
                  {u.name}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={onCreateClick}
            className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <Plus size={20} />
            Create New List
          </button>
        </div>
      </div>
    </div>
  );
}