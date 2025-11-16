import React from 'react';
import { ArrowLeft, Trash2, Archive, Edit2, Users, LogOut } from 'lucide-react';

export default function DetailHeader({ title, isOwner, onBack, onDelete, onArchive, onEditName, onManageMembers, onLeave }) {
  return (
    <div className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="hover:bg-blue-700 p-2 rounded-lg transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <div>
            <h1 className="text-2xl font-bold">{title}</h1>
            {isOwner && <span className="text-xs bg-blue-800 px-2 py-0.5 rounded">Owner</span>}
          </div>
        </div>
        <div className="flex gap-2">
          {isOwner && (
            <>
              <button
                onClick={onEditName}
                className="hover:bg-blue-700 p-2 rounded-lg transition-colors"
                title="Edit list name"
              >
                <Edit2 size={20} />
              </button>
              <button
                onClick={onManageMembers}
                className="hover:bg-blue-700 p-2 rounded-lg transition-colors"
                title="Manage members"
              >
                <Users size={20} />
              </button>
              <button
                onClick={onArchive}
                className="hover:bg-blue-700 p-2 rounded-lg transition-colors"
                title="Archive list"
              >
                <Archive size={20} />
              </button>
              <button
                onClick={onDelete}
                className="hover:bg-red-700 p-2 rounded-lg transition-colors"
                title="Delete list"
              >
                <Trash2 size={20} />
              </button>
            </>
          )}
          {!isOwner && (
            <button
              onClick={onLeave}
              className="hover:bg-orange-700 p-2 rounded-lg transition-colors flex items-center gap-2"
              title="Leave list"
            >
              <LogOut size={20} />
              <span className="text-sm">Leave</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}