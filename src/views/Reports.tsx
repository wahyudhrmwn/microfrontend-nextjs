import React from 'react';

export default function Reports() {
  const reports = [
    { name: 'Sales Report', description: 'Monthly sales performance', lastUpdated: '2 hours ago', type: 'Sales' },
    { name: 'User Activity', description: 'User engagement metrics', lastUpdated: '1 day ago', type: 'Analytics' },
    { name: 'Financial Summary', description: 'Revenue and expenses overview', lastUpdated: '3 days ago', type: 'Finance' },
    { name: 'Inventory Report', description: 'Stock levels and movements', lastUpdated: '1 week ago', type: 'Inventory' },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Reports</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Generate and view various business reports.
            </p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
            Generate Report
          </button>
        </div>
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reports.map((report, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {report.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  {report.description}
                </p>
                <div className="flex items-center space-x-4">
                  <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded">
                    {report.type}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Updated {report.lastUpdated}
                  </span>
                </div>
              </div>
              <div className="ml-4">
                <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-4 flex space-x-3">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
                View Report
              </button>
              <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 