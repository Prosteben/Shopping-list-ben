import React, { useState } from 'react';
import { Users, UserMinus } from 'lucide-react';

export default function ManageMembersModal({ isOpen, list, users, currentUserId, onAddMember, onRemoveMember, onClose }) {
  const [selectedUserId, setSelectedUserId] = useState('');

  if (!isOpen) return null;

  const isOwner = list.ownerId === currentUserId;
  const availableUsers = users.filter(u => !list.members.includes(u.id));
  const memberUsers = users.filter(u => list.members.includes(u.id));

  const handleAddMember = () => {
    if (selectedUserId) {
      onAddMember(selectedUserId);
      setSelectedUserId('');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex items-center gap-2 mb-4">
          <Users size={24} className="text-blue-500" />
          <h3 className="text-xl font-bold">Manage Members</h3>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold mb-2">Current Members ({memberUsers.length})</h4>
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {memberUsers.map(user => (
              <div key={user.id} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                <div>
                  <p className="font-medium">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                  {user.id === list.ownerId && (
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">Owner</span>
                  )}
                </div>
                {isOwner && user.id !== list.ownerId && (
                  <button
                    onClick={() => onRemoveMember(user.id)}
                    className="text-red-500 hover:text-red-700 p-1"
                    title="Remove member"
                  >
                    <UserMinus size={18} />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {isOwner && availableUsers.length > 0 && (
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Add Member</h4>
            <div className="flex gap-2">
              <select
                value={selectedUserId}
                onChange={(e) => setSelectedUserId(e.target.value)}
                className="flex-1 border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select a user...</option>
                {availableUsers.map(user => (
                  <option key={user.id} value={user.id}>
                    {user.name} ({user.email})
                  </option>
                ))}
              </select>
              <button
                onClick={handleAddMember}
                disabled={!selectedUserId}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Add
              </button>
            </div>
          </div>
        )}

        <button
          onClick={onClose}
          className="w-full bg-gray-300 hover:bg-gray-400 text-gray-700 p-3 rounded-lg transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}