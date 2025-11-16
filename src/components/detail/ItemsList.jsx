import React from 'react';
import ItemRow from './ItemRow';

export default function ItemsList({ items, filter, onToggleComplete, onDeleteItem }) {
  let displayItems = items;
  
  if (filter === 'unresolved') {
    displayItems = items.filter(item => !item.completed);
  } else if (filter === 'resolved') {
    displayItems = items.filter(item => item.completed);
  }

  const activeItems = displayItems.filter(item => !item.completed);
  const completedItems = displayItems.filter(item => item.completed);

  return (
    <div className="space-y-6">
      {activeItems.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-3">
            Active Items ({activeItems.length})
          </h2>
          <div className="space-y-2">
            {activeItems.map(item => (
              <ItemRow
                key={item.id}
                item={item}
                onToggle={onToggleComplete}
                onDelete={onDeleteItem}
              />
            ))}
          </div>
        </div>
      )}

      {completedItems.length > 0 && filter !== 'unresolved' && (
        <div>
          <h2 className="text-lg font-semibold text-gray-500 mb-3">
            Completed ({completedItems.length})
          </h2>
          <div className="space-y-2">
            {completedItems.map(item => (
              <ItemRow
                key={item.id}
                item={item}
                onToggle={onToggleComplete}
                onDelete={onDeleteItem}
              />
            ))}
          </div>
        </div>
      )}

      {displayItems.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          <p>No items to display</p>
        </div>
      )}
    </div>
  );
}