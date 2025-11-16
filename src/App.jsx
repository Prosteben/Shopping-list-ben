import React, { useState } from 'react';
import { INITIAL_DATA } from './data/initialData';
import OverviewRoute from './routes/OverviewRoute';
import DetailRoute from './routes/DetailRoute';
import ArchiveRoute from './routes/ArchiveRoute';

export default function App() {
  const [currentView, setCurrentView] = useState('overview');
  const [selectedListId, setSelectedListId] = useState(null);
  const [lists, setLists] = useState(INITIAL_DATA.lists);
  const [users] = useState(INITIAL_DATA.users);
  
  const currentUser = INITIAL_DATA.currentUser;
  const selectedList = lists.find(l => l.id === selectedListId);

  // Overview handlers
  const handleCreateList = (title) => {
    const newList = {
      id: Date.now().toString(),
      title,
      ownerId: currentUser.id,
      members: [currentUser.id],
      items: [],
      archived: false,
      createdAt: new Date().toISOString()
    };
    setLists([...lists, newList]);
  };

  const handleOpenList = (listId) => {
    setSelectedListId(listId);
    setCurrentView('detail');
  };

  const handleDeleteListFromOverview = (listId) => {
    if (confirm('Delete this list?')) {
      setLists(lists.filter(l => l.id !== listId));
    }
  };

  const handleLeaveListFromOverview = (listId) => {
    if (confirm('Leave this list?')) {
      setLists(lists.map(list =>
        list.id === listId
          ? { ...list, members: list.members.filter(m => m !== currentUser.id) }
          : list
      ).filter(list => list.members.length > 0));
    }
  };

  // Detail handlers
  const handleEditListName = (newName) => {
    setLists(lists.map(list =>
      list.id === selectedListId
        ? { ...list, title: newName }
        : list
    ));
  };

  const handleAddMember = (userId) => {
    setLists(lists.map(list =>
      list.id === selectedListId
        ? { ...list, members: [...list.members, userId] }
        : list
    ));
  };

  const handleRemoveMember = (userId) => {
    if (confirm('Remove this member from the list?')) {
      setLists(lists.map(list =>
        list.id === selectedListId
          ? { ...list, members: list.members.filter(m => m !== userId) }
          : list
      ));
    }
  };

  const handleAddItem = (newItem) => {
    const item = {
      ...newItem,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    setLists(lists.map(list =>
      list.id === selectedListId
        ? { ...list, items: [...list.items, item] }
        : list
    ));
  };

  const handleToggleComplete = (itemId) => {
    setLists(lists.map(list =>
      list.id === selectedListId
        ? {
            ...list,
            items: list.items.map(item =>
              item.id === itemId ? { ...item, completed: !item.completed } : item
            )
          }
        : list
    ));
  };

  const handleDeleteItem = (itemId) => {
    setLists(lists.map(list =>
      list.id === selectedListId
        ? { ...list, items: list.items.filter(item => item.id !== itemId) }
        : list
    ));
  };

  const handleArchiveList = () => {
    if (confirm(`Archive "${selectedList.title}"?`)) {
      setLists(lists.map(list =>
        list.id === selectedListId
          ? { ...list, archived: true, archivedAt: new Date().toISOString() }
          : list
      ));
      setCurrentView('overview');
    }
  };

  const handleDeleteList = () => {
    setLists(lists.filter(l => l.id !== selectedListId));
    setCurrentView('overview');
  };

  const handleLeaveList = () => {
    setLists(lists.map(list =>
      list.id === selectedListId
        ? { ...list, members: list.members.filter(m => m !== currentUser.id) }
        : list
    ).filter(list => list.members.length > 0));
    setCurrentView('overview');
  };

  // Archive handlers
  const handleDeleteArchivedList = (listId) => {
    if (confirm('Permanently delete this archived list?')) {
      setLists(lists.filter(l => l.id !== listId));
    }
  };

  // Filter lists to show only those where current user is a member
  const userLists = lists.filter(list => list.members.includes(currentUser.id));

  // Render routes
  if (currentView === 'overview') {
    return (
      <OverviewRoute
        lists={userLists}
        currentUserId={currentUser.id}
        currentUser={currentUser}
        onOpenList={handleOpenList}
        onDeleteList={handleDeleteListFromOverview}
        onLeaveList={handleLeaveListFromOverview}
        onCreateList={handleCreateList}
        onNavigateToArchive={() => setCurrentView('archive')}
      />
    );
  }

  if (currentView === 'detail' && selectedList) {
    return (
      <DetailRoute
        list={selectedList}
        users={users}
        currentUserId={currentUser.id}
        onBack={() => setCurrentView('overview')}
        onAddItem={handleAddItem}
        onToggleComplete={handleToggleComplete}
        onDeleteItem={handleDeleteItem}
        onArchive={handleArchiveList}
        onDelete={handleDeleteList}
        onEditName={handleEditListName}
        onAddMember={handleAddMember}
        onRemoveMember={handleRemoveMember}
        onLeave={handleLeaveList}
      />
    );
  }

  if (currentView === 'archive') {
    const archivedLists = userLists.filter(l => l.archived);
    return (
      <ArchiveRoute
        archivedLists={archivedLists}
        onBack={() => setCurrentView('overview')}
        onDeleteArchivedList={handleDeleteArchivedList}
      />
    );
  }

  return null;
}