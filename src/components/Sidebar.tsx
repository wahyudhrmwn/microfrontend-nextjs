'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('sidebar-collapsed') === 'true';
    }
    return false;
  });
  const pathname = usePathname();
  const [showMenuText, setShowMenuText] = useState(!isCollapsed);
  const router = useRouter();

  useEffect(() => {
    localStorage.setItem('sidebar-collapsed', isCollapsed ? 'true' : 'false');
    let timeout: NodeJS.Timeout;
    if (!isCollapsed) {
      timeout = setTimeout(() => setShowMenuText(true), 300); // delay sesuai animasi buka
    } else {
      setShowMenuText(false);
    }
    return () => clearTimeout(timeout);
  }, [isCollapsed]);

  const menuItems = [
    { name: 'All Menus', icon: '💻', href: '/', },
    { name: 'Dashboard', icon: '📊', href: '/dashboard', },
    { name: 'Analytics', icon: '📈', href: '/analytics' },
    { name: 'Users', icon: '👥', href: '/users' },
    { name: 'Reports', icon: '📦', href: '/reports' },
    { name: 'Settings', icon: '⚙️', href: '/settings' },
  ];

  return (
    <div
      className={`bg-gray-900 text-white h-screen sticky top-0 transition-all duration-500 ease-in-out overflow-hidden relative`}
      style={{
        width: isCollapsed ? '5rem' : '16rem',
        boxShadow: '2px 0 8px 0 rgba(0,0,0,0.04)',
      }}
    >
      {/* Sidebar Header */}
      <div className={isCollapsed ? "flex items-center justify-center h-20 border-b border-gray-700 transition-all duration-500" : "p-3 border-b border-gray-700 transition-all duration-500"}>
        {isCollapsed ? (
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        ) : (
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Menu</h2>
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Navigation Menu */}
      <nav className={isCollapsed ? "p-2" : "p-3"}>
        <ul className={isCollapsed ? "space-y-2 mt-0" : "space-y-2"}>
          {menuItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <li key={index}>
                <button
                  type="button"
                  onClick={() => {
                    if (isCollapsed) {
                      setIsCollapsed(false);
                      setTimeout(() => {
                        window.scrollTo(0, 0); // opsional, agar scroll ke atas saat pindah
                        router.push(item.href);
                      }, 400); // waktu sesuai animasi buka
                    } else {
                      window.scrollTo(0, 0);
                      router.push(item.href);
                    }
                  }}
                  className={`flex items-center justify-center w-full
                    ${isCollapsed ? 'w-12 h-12 mx-auto' : 'space-x-3 p-3 justify-start'}
                    rounded-lg transition-all duration-500 ease-in-out
                    ${isActive 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'}
                    'group'
                  `}
                  style={isCollapsed ? { borderRadius: '9999px', opacity: 1, transform: 'translateX(0)', transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)' } : { opacity: 1, transform: 'translateX(0)', transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)' }}
                >
                  <span className="text-xl transition-all duration-500 ease-in-out">{item.icon}</span>
                  <span
                    className="font-medium overflow-hidden"
                    style={{
                      opacity: !isCollapsed && showMenuText ? 1 : 0,
                      transform: !isCollapsed && showMenuText ? 'translateX(0)' : 'translateX(-16px)',
                      marginLeft: !isCollapsed ? '0.75rem' : 0,
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      pointerEvents: !isCollapsed && showMenuText ? 'auto' : 'none',
                      width: !isCollapsed && showMenuText ? 'auto' : 0,
                      display: !isCollapsed ? 'inline-block' : 'inline-block',
                    }}
                  >
                    {item.name}
                  </span>
                </button>
              </li>
            );
          })}
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