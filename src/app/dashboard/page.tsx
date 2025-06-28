import { Metadata } from 'next';
import Dashboard from '@/views/Dashboard';
import BackNavigation from '@/components/BackNavigation';

export const metadata: Metadata = {
  title: 'Dashboard | Your App',
  description: 'Overview and key metrics for your dashboard',
};

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <BackNavigation currentPage="Dashboard" />
      <Dashboard />
    </div>
  );
} 