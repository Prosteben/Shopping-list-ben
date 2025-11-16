import React, { useState } from 'react';

export default function CreateListModal({ isOpen, onCreate, onClose }) {
  const [title, setTitle] = useState('');

  if (!isOpen) return null;

  const handleCreate = () => {
    if (title.trim()) {
      onCreate(title.trim());
      setTitle('');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h3 className="text-xl font-bold mb-4">Create New Shopping List</h3>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter list name..."
          className="w-full border border-gray-300 rounded p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          autoFocus
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleCreate();
            }
          }}
        />
        <div className="flex gap-3">
          <button
            onClick={handleCreate}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition-colors"
          >
            Create
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 p-3 rounded-lg transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}