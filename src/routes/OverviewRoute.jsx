import React, { useState } from 'react';
import OverviewHeader from '../components/overview/OverviewHeader';
import ShoppingListGrid from '../components/overview/ShoppingListGrid';
import CreateListModal from '../components/overview/CreateListModal';
import { Archive } from 'lucide-react';

export default function OverviewRoute({ 
  lists, 
  currentUserId, 
  currentUser, 
  onOpenList, 
  onDeleteList, 
  onLeaveList, 
  onCreateList, 
  onNavigateToArchive 
}) {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const activeLists = lists.filter(l => !l.archived);
  const archivedCount = lists.filter(l => l.archived).length;

  return (
    <div className="min-h-screen bg-gray-100">
      <OverviewHeader
        user={currentUser}
        onCreateClick={() => setShowCreateModal(true)}
      />
      
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">My Shopping Lists</h2>
          <button
            onClick={onNavigateToArchive}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Archive size={20} />
            View Archive ({archivedCount})
          </button>
        </div>
        
        <ShoppingListGrid
          lists={activeLists}
          currentUserId={currentUserId}
          onOpenList={onOpenList}
          onDeleteList={onDeleteList}
          onLeaveList={onLeaveList}
        />
      </div>

      <CreateListModal
        isOpen={showCreateModal}
        onCreate={(title) => {
          onCreateList(title);
          setShowCreateModal(false);
        }}
        onClose={() => setShowCreateModal(false)}
      />
    </div>
  );
}