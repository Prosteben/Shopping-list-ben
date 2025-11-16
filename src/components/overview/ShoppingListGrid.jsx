import React from 'react';
import { ShoppingCart } from 'lucide-react';
import ShoppingListTile from './ShoppingListTile';

export default function ShoppingListGrid({ lists, currentUserId, onOpenList, onDeleteList, onLeaveList }) {
  if (lists.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <ShoppingCart size={64} className="mx-auto mb-4 opacity-30" />
        <p className="text-xl">No shopping lists yet</p>
        <p>Create your first list to get started!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {lists.map(list => (
        <ShoppingListTile
          key={list.id}
          list={list}
          currentUserId={currentUserId}
          onOpen={onOpenList}
          onDelete={onDeleteList}
          onLeave={onLeaveList}
        />
      ))}
    </div>
  );
}