import { Metadata } from 'next';
import Analytics from '@/views/Analytics';
import BackNavigation from '@/components/BackNavigation';

export const metadata: Metadata = {
  title: 'Analytics | Your App',
  description: 'Deep dive into your data and analytics',
};

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <BackNavigation currentPage="Analytics" />
      <Analytics />
    </div>
  );
} 