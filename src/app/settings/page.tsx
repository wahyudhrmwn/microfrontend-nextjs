import { Metadata } from 'next';
import Settings from '@/views/Settings';
import BackNavigation from '@/components/BackNavigation';

export const metadata: Metadata = {
  title: 'Settings | Your App',
  description: 'Configure your application preferences',
};

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <BackNavigation currentPage="Settings" />
      <Settings />
    </div>
  );
} 