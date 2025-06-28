import { Metadata } from 'next';
import Reports from '@/views/Reports';
import BackNavigation from '@/components/BackNavigation';

export const metadata: Metadata = {
  title: 'Reports | Your App',
  description: 'Generate and view business reports',
};

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <BackNavigation currentPage="Reports" />
      <Reports />
    </div>
  );
} 