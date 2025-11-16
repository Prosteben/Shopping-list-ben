import React, { useState } from 'react';
import DetailHeader from '../components/detail/DetailHeader';
import AddItemForm from '../components/detail/AddItemForm';
import ItemsList from '../components/detail/ItemsList';
import EditListNameModal from '../components/shared/EditListNameModal';
import ManageMembersModal from '../components/shared/ManageMembersModal';
import { Filter } from 'lucide-react';

export default function DetailRoute({ 
  list, 
  users,
  currentUserId,
  onBack, 
  onAddItem, 
  onToggleComplete, 
  onDeleteItem, 
  onArchive, 
  onDelete, 
  onEditName,
  onAddMember,
  onRemoveMember,
  onLeave
}) {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showEditNameModal, setShowEditNameModal] = useState(false);
  const [showManageMembersModal, setShowManageMembersModal] = useState(false);
  const [filter, setFilter] = useState('all');

  const isOwner = list.ownerId === currentUserId;

  const handleLeave = () => {
    if (window.confirm(`Are you sure you want to leave "${list.title}"?`)) {
      onLeave();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <DetailHeader
        title={list.title}
        isOwner={isOwner}
        onBack={onBack}
        onDelete={() => setShowDeleteConfirm(true)}
        onArchive={onArchive}
        onEditName={() => setShowEditNameModal(true)}
        onManageMembers={() => setShowManageMembersModal(true)}
        onLeave={handleLeave}
      />

      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-600">Members</p>
              <p className="font-semibold">{list.members.length}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Items</p>
              <p className="font-semibold">{list.items.length}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Completed</p>
              <p className="font-semibold">
                {list.items.filter(i => i.completed).length} / {list.items.length}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Filter size={20} className="text-gray-600" />
            <span className="font-semibold">Filter Items:</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
                filter === 'all' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Show All
            </button>
            <button
              onClick={() => setFilter('unresolved')}
              className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
                filter === 'unresolved' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Unresolved Only
            </button>
            <button
              onClick={() => setFilter('resolved')}
              className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
                filter === 'resolved' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Resolved Only
            </button>
          </div>
        </div>

        <div className="mb-6">
          <AddItemForm onAddItem={onAddItem} />
        </div>

        <ItemsList
          items={list.items}
          filter={filter}
          onToggleComplete={onToggleComplete}
          onDeleteItem={onDeleteItem}
        />
      </div>

      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Delete Shopping List?</h3>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete "{list.title}"? This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  onDelete();
                  setShowDeleteConfirm(false);
                }}
                className="flex-1 bg-red-500 hover:bg-red-600 text-white p-3 rounded-lg transition-colors"
              >
                Delete
              </button>
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 p-3 rounded-lg transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {showEditNameModal && (
        <EditListNameModal
          isOpen={showEditNameModal}
          currentName={list.title}
          onSave={(newName) => {
            onEditName(newName);
            setShowEditNameModal(false);
          }}
          onClose={() => setShowEditNameModal(false)}
        />
      )}

      {showManageMembersModal && (
        <ManageMembersModal
          isOpen={showManageMembersModal}
          list={list}
          users={users}
          currentUserId={currentUserId}
          onAddMember={onAddMember}
          onRemoveMember={onRemoveMember}
          onClose={() => setShowManageMembersModal(false)}
        />
      )}
    </div>
  );
}