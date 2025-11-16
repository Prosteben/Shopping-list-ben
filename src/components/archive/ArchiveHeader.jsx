import React from 'react';
import { ArrowLeft, Archive } from 'lucide-react';

export default function ArchiveHeader({ onBack }) {
  return (
    <div className="bg-gray-700 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center gap-4">
        <button
          onClick={onBack}
          className="hover:bg-gray-600 p-2 rounded-lg transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
        <Archive size={28} />
        <h1 className="text-2xl font-bold">Archived Lists</h1>
      </div>
    </div>
  );
}