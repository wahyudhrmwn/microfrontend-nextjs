'use client';

import { useRouter } from 'next/navigation';

interface BackNavigationProps {
  currentPage: string;
}

export default function BackNavigation({ currentPage }: BackNavigationProps) {
  const router = useRouter();

  const handleBackToMenu = () => {
    router.push('/');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4">
      <div className="flex items-center space-x-2">
        <button
          onClick={handleBackToMenu}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back to Menu</span>
        </button>
        <span className="text-gray-400 dark:text-gray-500">/</span>
        <span className="text-gray-700 dark:text-gray-300 font-medium">{currentPage}</span>
      </div>
    </div>
  );
} 