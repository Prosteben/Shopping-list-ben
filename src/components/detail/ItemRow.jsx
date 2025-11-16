import React from 'react';
import { Check, Trash2 } from 'lucide-react';

export default function ItemRow({ item, onToggle, onDelete }) {
  return (
    <div className={`flex items-center gap-3 p-3 rounded-lg border ${
      item.completed ? 'bg-gray-50 border-gray-300' : 'bg-white border-gray-200'
    } hover:shadow-md transition-shadow`}>
      <button
        onClick={() => onToggle(item.id)}
        className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
          item.completed 
            ? 'bg-green-500 border-green-500' 
            : 'border-gray-400 hover:border-green-500'
        }`}
      >
        {item.completed && <Check size={16} className="text-white" />}
      </button>
      <div className="flex-1">
        <span className={`${item.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
          {item.name}
        </span>
        <span className="text-gray-500 text-sm ml-2">
          ({item.quantity} {item.unit})
        </span>
      </div>
      <button
        onClick={() => onDelete(item.id)}
        className="text-red-500 hover:text-red-700 p-1 rounded hover:bg-red-50 transition-colors"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}