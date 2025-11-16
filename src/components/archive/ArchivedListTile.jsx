import React from 'react';
import { Trash2 } from 'lucide-react';

export default function ArchivedListTile({ list, onDelete }) {
  const archivedDate = new Date(list.archivedAt).toLocaleDateString();
  
  return (
    <div className="bg-gray-50 rounded-lg shadow-md p-5 border border-gray-300">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-xl font-bold text-gray-700">{list.title}</h3>
          <p className="text-sm text-gray-500">Archived: {archivedDate}</p>
        </div>
        <button
          onClick={() => onDelete(list.id)}
          className="text-red-500 hover:text-red-700 p-1 rounded hover:bg-red-50"
        >
          <Trash2 size={20} />
        </button>
      </div>
      
      <div className="text-sm text-gray-600">
        <p>{list.items.length} items</p>
        <p>{list.members.length} members</p>
      </div>
    </div>
  );
}