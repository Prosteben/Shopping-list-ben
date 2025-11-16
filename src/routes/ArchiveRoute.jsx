import React from 'react';
import ArchiveHeader from '../components/archive/ArchiveHeader';
import ArchivedListGrid from '../components/archive/ArchivedListGrid';

export default function ArchiveRoute({ archivedLists, onBack, onDeleteArchivedList }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <ArchiveHeader onBack={onBack} />
      
      <div className="max-w-6xl mx-auto p-6">
        <ArchivedListGrid
          archivedLists={archivedLists}
          onDelete={onDeleteArchivedList}
        />
      </div>
    </div>
  );
}