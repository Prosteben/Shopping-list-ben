import React, { useState } from 'react';
import { Plus, Check, X } from 'lucide-react';

export default function AddItemForm({ onAddItem }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('pcs');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = () => {
    if (name.trim()) {
      onAddItem({
        name: name.trim(),
        quantity: quantity ? parseInt(quantity) : 1,
        unit: unit,
        completed: false
      });
      setName('');
      setQuantity('');
      setUnit('pcs');
      setIsExpanded(false);
    }
  };

  if (!isExpanded) {
    return (
      <button
        onClick={() => setIsExpanded(true)}
        className="w-full bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
      >
        <Plus size={20} />
        Add New Item
      </button>
    );
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md border-2 border-green-500">
      <div className="flex flex-col gap-3">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Item name..."
          className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          autoFocus
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSubmit();
            }
          }}
        />
        <div className="flex gap-2">
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Qty"
            className="border border-gray-300 rounded p-2 w-20 focus:outline-none focus:ring-2 focus:ring-green-500"
            min="1"
          />
          <select
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="pcs">pcs</option>
            <option value="kg">kg</option>
            <option value="g">g</option>
            <option value="l">l</option>
            <option value="ml">ml</option>
          </select>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleSubmit}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white p-2 rounded flex items-center justify-center gap-2 transition-colors"
          >
            <Check size={18} />
            Add
          </button>
          <button
            onClick={() => {
              setIsExpanded(false);
              setName('');
              setQuantity('');
              setUnit('pcs');
            }}
            className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 p-2 rounded flex items-center justify-center gap-2 transition-colors"
          >
            <X size={18} />
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}