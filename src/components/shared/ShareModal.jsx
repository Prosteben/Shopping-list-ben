import React, { useState } from 'react';
import { Share2, Mail } from 'lucide-react';

export default function ShareModal({ isOpen, listTitle, onInvite, onClose }) {
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleInvite = () => {
    if (email.trim() && email.includes('@')) {
      onInvite(email.trim());
      setEmail('');
    } else {
      alert('Please enter a valid email address');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex items-center gap-2 mb-4">
          <Share2 size={24} className="text-blue-500" />
          <h3 className="text-xl font-bold">Share "{listTitle}"</h3>
        </div>
        <p className="text-gray-600 mb-4">Invite people to collaborate on this list</p>
        <div className="flex gap-2 mb-4">
          <div className="flex-1 relative">
            <Mail size={18} className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address..."
              className="w-full border border-gray-300 rounded p-2 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleInvite();
                }
              }}
            />
          </div>
        </div>
        <div className="flex gap-3">
          <button
            onClick={handleInvite}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Share2 size={18} />
            Send Invitation
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 p-3 rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}