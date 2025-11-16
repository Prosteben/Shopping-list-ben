import React from 'react';
import { ShoppingCart, Plus } from 'lucide-react';

export default function OverviewHeader({ user, onCreateClick }) {
  return (
    <div className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ShoppingCart size={32} />
          <h1 className="text-2xl font-bold">Shopping Lists</h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm">Welcome, {user.name}</span>
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