import React from 'react';

const SidebarPattern = () => {
  return (
    <aside className="w-64 bg-gray-100 h-screen p-4">
      <ul className="space-y-2">
        <li><a href="#" className="block p-2 hover:bg-gray-200">Dashboard</a></li>
        <li><a href="#" className="block p-2 hover:bg-gray-200">Settings</a></li>
        <li><a href="#" className="block p-2 hover:bg-gray-200">Profile</a></li>
      </ul>
    </aside>
  );
};

export default SidebarPattern;
