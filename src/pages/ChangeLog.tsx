import React from 'react';

const ChangeLog = () => {
  const changes = [
    {
      date: '24 May 2025',
      description: 'Added Sidebar and Container components from ShadCN UI.',
    },
    {
      date: '24 May 2025',
      description: 'Updated Documentation page to include design guidelines and component showcase.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Change Log</h1>
      <ul className="space-y-4">
        {changes.map((change, index) => (
          <li key={index} className="border-b border-gray-200 pb-4">
            <p className="text-lg font-medium">{change.date}</p>
            <p className="text-sm text-gray-600">{change.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChangeLog;
