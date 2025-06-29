'use client';

import { useRouter } from 'next/navigation';

interface MenuCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  hoverColor: string;
}

export default function CardMenu() {
  const router = useRouter();

  const menuItems: MenuCard[] = [
    {
      id: 'dashboard',
      title: 'Dashboard',
      description: 'Overview and key metrics',
      icon: '📊',
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600'
    },
    {
      id: 'analytics',
      title: 'Analytics',
      description: 'Deep dive into your data',
      icon: '📈',
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600'
    },
    {
      id: 'users',
      title: 'Users',
      description: 'Manage users and permissions',
      icon: '👥',
      color: 'bg-purple-500',
      hoverColor: 'hover:bg-purple-600'
    },
    {
      id: 'reports',
      title: 'Reports',
      description: 'Generate business reports',
      icon: '📋',
      color: 'bg-orange-500',
      hoverColor: 'hover:bg-orange-600'
    },
    {
      id: 'settings',
      title: 'Settings',
      description: 'Configure your preferences',
      icon: '⚙️',
      color: 'bg-gray-500',
      hoverColor: 'hover:bg-gray-600'
    }
  ];

  const handleMenuSelect = (menuId: string) => {
    router.push(`/${menuId}`);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Snyzze Management System</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Select a menu option below to get started with managing your application.
        </p>
      </div>

      {/* Menu Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <div
            key={item.id}
            onClick={() => handleMenuSelect(item.id)}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 overflow-hidden group"
          >
            {/* Card Header with Icon */}
            <div className={`${item.color} ${item.hoverColor} p-6 transition-colors duration-300`}>
              <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
            </div>
            
            {/* Card Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {item.description}
              </p>
              
              {/* Arrow Icon */}
              <div className="flex justify-end">
                <svg 
                  className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Quick Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">124</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">89%</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">56</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Reports</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">12</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Active Projects</div>
          </div>
        </div>
      </div>
    </div>
  );
}