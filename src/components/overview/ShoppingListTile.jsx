import React from 'react';
import { Trash2, Users, LogOut } from 'lucide-react';

export default function ShoppingListTile({ list, currentUserId, onOpen, onDelete, onLeave }) {
  const totalItems = list.items.length;
  const completedItems = list.items.filter(i => i.completed).length;
  const isOwner = list.ownerId === currentUserId;

  return (
    <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow border border-gray-200">
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800">{list.title}</h3>
          {isOwner && (
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">Owner</span>
          )}
        </div>
        <div className="flex gap-1">
          {isOwner ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete(list.id);
              }}
              className="text-red-500 hover:text-red-700 p-1 rounded hover:bg-red-50"
              title="Delete list"
            >
              <Trash2 size={20} />
            </button>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onLeave(list.id);
              }}
              className="text-orange-500 hover:text-orange-700 p-1 rounded hover:bg-orange-50"
              title="Leave list"
            >
              <LogOut size={20} />
            </button>
          )}
        </div>
      </div>
      
      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
        <div className="flex items-center gap-1">
          <Users size={16} />
          <span>{list.members.length} members</span>
        </div>
        <div>
          <span>{completedItems}/{totalItems} items</span>
        </div>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
        <div
          className="bg-green-500 h-2 rounded-full transition-all"
          style={{ width: `${totalItems > 0 ? (completedItems / totalItems) * 100 : 0}%` }}
        />
      </div>

      <button
        onClick={() => onOpen(list.id)}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition-colors"
      >
        Open List
      </button>
    </div>
  );
}