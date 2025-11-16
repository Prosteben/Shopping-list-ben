import React from 'react';
import { Archive } from 'lucide-react';
import ArchivedListTile from './ArchivedListTile';

export default function ArchivedListGrid({ archivedLists, onDelete }) {
  if (archivedLists.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <Archive size={64} className="mx-auto mb-4 opacity-30" />
        <p className="text-xl">No archived lists</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {archivedLists.map(list => (
        <ArchivedListTile
          key={list.id}
          list={list}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}