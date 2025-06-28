'use client';

import React, { useState } from 'react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { name: 'Dashboard', icon: '📊', href: '/', active: true },
    { name: 'Users', icon: '👥', href: '/users' },
    { name: 'Products', icon: '📦', href: '/products' },
    { name: 'Orders', icon: '🛍️', href: '/orders' },
    { name: 'Analytics', icon: '📈', href: '/analytics' },
    { name: 'Settings', icon: '⚙️', href: '/settings' },
  ];

  return (
    <div className={`bg-gray-900 text-white h-screen sticky top-0 transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
      {/* Sidebar Header */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <h2 className="text-lg font-semibold">Menu</h2>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 ${
                  item.active 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                {!isCollapsed && (
                  <span className="font-medium">{item.name}</span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom section */}
      {!isCollapsed && (
        <div className="absolute bottom-4 left-4 right-4">
          <div className="p-3 bg-gray-800 rounded-lg">
            <p className="text-sm text-gray-400">Need help?</p>
            <a href="#" className="text-sm text-blue-400 hover:text-blue-300">Contact Support</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar; 